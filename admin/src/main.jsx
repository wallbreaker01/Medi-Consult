import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import { AppContext } from "./context/AppContext.jsx";
import { AdminContext } from "./context/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContext>
      <DoctorContext>
        <AppContext>
          <App />
        </AppContext>
      </DoctorContext>
    </AdminContext>
  </BrowserRouter>
);
