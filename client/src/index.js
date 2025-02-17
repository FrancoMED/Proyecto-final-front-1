import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/index";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

createRoot(document.getElementById("root")).render(
  <>
       <Auth0Provider
         domain={process.env.REACT_APP_AUTH0_DOMAIN}
         clientId={process.env.REACT_APP_AUTH0_CLIENTID}
         redirectUri={window.location.origin}
       >
         <Provider store={store}>
           <Router>
             <App />
           </Router>
         </Provider>
       </Auth0Provider>
     </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
