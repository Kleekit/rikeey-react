import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/LandingPage/landing.css";
import "./components/LandingPage/queries.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";

const queryClient = new QueryClient();
ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Router>,
  document.getElementById("root")
);
