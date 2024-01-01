import { Hub, Auth, API } from "aws-amplify";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/dashboard/Dashboard";
import Authentication from "./components/auth/Auth";
import Navbar from "./components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setAuthenticated } from "./features/auth/authSlice";
import { constants } from "./constants/applicationConstants";
import "./App.css";
import { errorLogFormatter, infoLogFormatter } from "./utils/infoLogFormatter";

function App() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [linkToken, setLinkToken] = useState("");

  useEffect(() => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        default:
          break;
        case "signIn":
          infoLogFormatter("User has triggered signIn event");
          break;
        case "signUp":
          infoLogFormatter("User has triggered signUp event");
          break;
        case "signOut":
          infoLogFormatter("User has triggered signOut event");
          break;
      }
    });

    async function checkUserAuthentication() {
      try {
        const amazonCognitoUserMeta = await Auth.currentAuthenticatedUser();
        const { attributes } = amazonCognitoUserMeta;

        if (attributes.email && attributes.email_verified) {
          infoLogFormatter("User has been successfully authenticated...");
          dispatch(setAuthenticated(true));
          dispatch(
            setUser({
              email: attributes.email,
              family_name: attributes.family_name,
              phone_number: attributes.phone_number,
              given_name: attributes.given_name,
            })
          );
        }
      } catch (error) {
        errorLogFormatter(error);
        dispatch(setAuthenticated(false));
        dispatch(setUser(undefined));
      }
    }

    checkUserAuthentication();
  }, [dispatch]);

  useEffect(() => {
    async function fetchPlaidAccessToken() {
      const path = "/plaid";
      infoLogFormatter(
        `Making API Request to ${path} to retrieve link token for env: sandbox`
      );
      const response = await API.get(constants.FINANCEAPI, "/plaid", {
        Headers: "",
      });
      infoLogFormatter(
        `Successfully retrieved plaid link token: ${response.linkToken}`
      );
      if (response.linkToken) {
        setLinkToken(response.linkToken);
      }
    }
    fetchPlaidAccessToken();
  }, []);

  function renderBasedOnAuth() {
    if (user.authenticated) {
      return <Dashboard user={user.auth} accessToken={linkToken} />;
    }

    return <Authentication />;
  }

  return (
    <div className="App">
      {user.authenticated && <Navbar />}
      {renderBasedOnAuth()}
    </div>
  );
}

export default App;
