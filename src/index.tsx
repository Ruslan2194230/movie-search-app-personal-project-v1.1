import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { App } from "App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/movie-search-app-personal-project-v1.1">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
