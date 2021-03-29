import React, { ReactElement } from "react";
import "../styles/index.css";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Hymns from "../components/Hymns";
import Topbar from "../components/Topbar";

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Hymns />
    </ThemeProvider>
  );
};

export default App;
