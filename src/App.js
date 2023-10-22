import { Hub, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import SignUp from "./components/signUp/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Authentication from "./components/auth/Auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(undefined);

  useEffect(() => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        default:
          break;
        case "signIn":
          console.log("user has signed in");
          break;
        case "signUp":
          console.log("user has signed up for the application");
          break;
        case "signOut":
          console.log("the user has signed out of the application.");
          break;
      }
    });

    async function checkUserAuthentication() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;

        console.log(user);

        if (attributes.email && attributes.email_verified) {
          setAuthenticated(true);
          setAuthenticatedUser(user);
        }
      } catch (error) {
        console.error(error);
        setAuthenticated(false);
        setAuthenticatedUser(undefined);
      }
    }

    checkUserAuthentication();
  }, []);

  function renderBasedOnAuth() {
    if (authenticated && authenticatedUser) {
      return <Dashboard user={authenticatedUser} />;
    }

    return <Authentication />;
  }

  return renderBasedOnAuth();
}

export default App;
