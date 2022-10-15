import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <CookiesProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </CookiesProvider>

  </React.StrictMode>
);
