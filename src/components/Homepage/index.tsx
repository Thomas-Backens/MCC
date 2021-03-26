import React, { ReactElement } from "react";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

const Homepage = (): ReactElement => {
  const s = useStyles();

  return (
    <Box>
      <Typography style={{ color: "white" }}>Welcome!</Typography>
    </Box>
  );
};

export default Homepage;
