import React from "react";
import "../styles/App.css";
import Homepage from "../components/Homepage";
import Topbar from "../components/Topbar";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <Homepage />
    </div>
  );
};

export default App;
