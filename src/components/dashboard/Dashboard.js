import { Auth, API } from "aws-amplify";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated, setUser } from "../../features/auth/authSlice";
import { constants } from "../../constants/applicationConstants";
import {
  errorLogFormatter,
  infoLogFormatter,
} from "../../utils/infoLogFormatter";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import "./Dashboard.css";
import StatusBar from "./StatusBar";
import ProfileToolTip from "./ProfileToolTip";
import DashboardContent from "./DashboardContent";
import { setPlaidAccessToken } from "../../features/plaid/plaidSlice";
import { default as accountsGetResponseJson } from "../../data/accountsGetResponse.json";
import { default as transactionSyncJson } from "../../data/transactionsGetResponse.json";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
// The usePlaidLink hook manages Plaid Link creation
// It does not return a destroy function;
// instead, on unmount it automatically destroys the Link instance

export default function Dashboard({ accessToken }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const plaidAccessToken = useSelector(
    (state) => state.plaidAuth.plaidAccessToken
  );

  const user = useSelector((state) => state.auth);
  const [accounts, setAccounts] = useState([]);

  console.log(user);

  useEffect(() => {
    async function fetchUserAccountInformation() {
      const fetchAccountsResponse = await API.get(
        constants.FINANCEAPI,
        "/user-cards",
        {
          body: { user_id: user.username },
        }
      );

      console.info("Setting account information..");
      setAccounts(fetchAccountsResponse);
      setLoading(false);
    }

    fetchUserAccountInformation();
  }, [user.username]);

  const config = {
    onSuccess: React.useCallback(
      async (public_token, metadata) => {
        try {
          infoLogFormatter("Successfully retrieved public token");
          infoLogFormatter(
            `Fetching plaid accessToken using public token: ${public_token}`
          );
          const response = await API.post(
            constants.FINANCEAPI,
            "/plaid/access-token",
            { body: { publicToken: public_token } }
          );
          dispatch(setPlaidAccessToken(response.accessToken));
          infoLogFormatter(
            `successfully retrieved plaid accessToken: ${response.accessToken}`
          );
        } catch (error) {
          errorLogFormatter(error);
        }
      },
      [dispatch]
    ),
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
    token: accessToken,
  };
  const { open, exit, ready, error } = usePlaidLink(config);

  function openPlaidAuthenticationPortal() {
    try {
      open();
    } catch (caughtError) {
      errorLogFormatter(error.message);
      errorLogFormatter(caughtError);
    }
  }

  async function onSignOut() {
    try {
      await Auth.signOut();
      dispatch(setAuthenticated(false));
      dispatch(setUser(undefined));
      navigate("/");
      infoLogFormatter(
        "User has been successfully signed out. Redirecting to sign in..."
      );
    } catch (error) {
      errorLogFormatter(error);
      dispatch(setAuthenticated(false));
      dispatch(setUser(undefined));
      navigate("/");
    }
  }

  // async function retrieveAccountData() {
  //   const response = await API.post(constants.FINANCEAPI, "/accounts", {
  //     body: {
  //       accessToken: "access-sandbox-052ae6f0-1fb0-4ebf-a157-8c63a1552134",
  //     },
  //   });
  //   console.dir(response);
  // }

  const transactions = transactionSyncJson.added;

  return (
    <div
      className={
        loading &&
        "d-flex justify-content-center h-100 w-100 align-items-center"
      }
    >
      {!loading && (
        <div className="home-page">
          <div className="div-3">
            {accounts.length > 0 && (
              <DashboardContent
                addNewCardHandler={openPlaidAuthenticationPortal}
                accounts={accounts}
                transactions={transactions}
                cardHolderName={`${user.given_name} ${user.family_name}`}
              />
            )}
            <ProfileToolTip firstName={user.given_name} />
            <Button onClick={onSignOut}>Sign Out</Button>
          </div>
        </div>
      )}
      {loading && <CircularProgress />}
    </div>
  );
}
