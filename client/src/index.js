import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/index";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENTID

ReactDOM.render(
  <>
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
