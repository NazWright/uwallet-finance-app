import { Hub, Auth } from "aws-amplify";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/dashboard/Dashboard";
import Authentication from "./components/auth/Auth";
import Navbar from "./components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setAuthenticated } from "./features/auth/authSlice";

function App() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        default:
          break;
        case "signIn":
          console.info("user has signed in");
          break;
        case "signUp":
          console.info("user has signed up for the application");
          break;
        case "signOut":
          console.info("the user has signed out of the application.");
          break;
      }
    });

    async function checkUserAuthentication() {
      try {
        const amazonCognitoUserMeta = await Auth.currentAuthenticatedUser();
        const { attributes } = amazonCognitoUserMeta;

        if (attributes.email && attributes.email_verified) {
          console.info("User has been authenticated...");
          dispatch(setAuthenticated(true));
          dispatch(setUser({ email: attributes.email }));
        }
      } catch (error) {
        console.error(error);
        dispatch(setAuthenticated(false));
        dispatch(setUser(undefined));
      }
    }

    checkUserAuthentication();
  }, [dispatch]);

  function renderBasedOnAuth() {
    if (user.authenticated) {
      return <Dashboard user={user.auth} />;
    }

    return <Authentication />;
  }

  return (
    <div>
      {user.authenticated && <Navbar />}
      {renderBasedOnAuth()}
    </div>
  );
}

export default App;
