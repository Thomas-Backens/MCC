import React from "react";
import "../styles/index.css";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Homepage from "../components/Homepage";
import Topbar from "../components/Topbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;
