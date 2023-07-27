import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="appWrapper">
      <Routes />
    </div>

    //another way: using useRoutes() hooks t handle routes
    // <div className="appWrapper">
    //   <Router>
    //     <Routes />
    //   </Router>
    // </div>
  );
}

export default App;
