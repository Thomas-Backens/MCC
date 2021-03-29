import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";
import Hymns from "../components/Hymns";

const hymns = (): ReactElement => {
  return (
    <Box>
      <Hymns />
    </Box>
  );
};

export default hymns;
