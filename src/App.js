import { Hub, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/dashboard/Dashboard";
import Authentication from "./components/auth/Auth";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(undefined);

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
        const user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;

        console.dir(user);

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

  return (
    <div>
      {authenticated && <Navbar />}
      {renderBasedOnAuth()}
    </div>
  );
}

export default App;
