import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/LandingPage/landing.css";
import "./components/LandingPage/queries.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();
ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
