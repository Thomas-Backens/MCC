import React, { ReactElement } from "react";
import { Box, Button } from "@material-ui/core";
import useStyles from "./styles";

const AddHymn = (): ReactElement => {
  const s = useStyles();
  return (
    <Box marginLeft={4} className={s.root}>
      <Button className={s.addButton}>ADD</Button>
    </Box>
  );
};

export default AddHymn;
