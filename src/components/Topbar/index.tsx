import React, { ReactElement } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import useStyles from "./styles";

const Topbar = (): ReactElement => {
  const s = useStyles();
  return (
    <Box className={s.root} display="flex" alignItems="center">
      <Typography className={s.title}>Millard Community Church</Typography>
      <Box
        className={s.tabs}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Button className={s.tabButton}>Prayer Requests</Button>
        <Button className={s.tabButton}>Hymns</Button>
      </Box>
    </Box>
  );
};

export default Topbar;
