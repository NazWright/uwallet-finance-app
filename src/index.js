import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Amplify, API, Auth } from "aws-amplify";
import config from "./aws-exports";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import { store } from "./app/store";
import { Provider } from "react-redux";
import ForgotPasswordForm from "./components/shared/forgot-password/ForgotPasswordForm";
import OnboardingPage from "./components/onboarding/OnboardingPage";
import OnboardingSteps from "./components/onboarding/steps/OnboardingSteps";
import Chat from "./components/chat/Chat";
import Insights from "./components/insights/Insights";
import SpendingActivityFull from "./components/spending-activity/SpendingActivityFull";

Amplify.configure(config);
API.configure(config);
Auth.configure(config);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordForm />,
  },
  {
    path: "/onboarding-page",
    element: <OnboardingPage />,
  },
  {
    path: "/user/onboarding",
    element: <OnboardingSteps />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/spending-activity",
    element: <SpendingActivityFull />,
  },
  {
    path: "/insights",
    element: <Insights />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
