import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";
import SearchBar from "./Search/SearchBar";
import AddHymn from "./Search/AddHymn";
import AllHymns from "./AllHymns";
import useStyles from "./styles";

const Hymns = (): ReactElement => {
  const s = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      marginTop={20}
      className={s.root}
    >
      <Box display="flex" alignItems="center" className={s.search}>
        <SearchBar />
        <AddHymn />
      </Box>
      <Box className={s.hymns}>
        <AllHymns />
      </Box>
    </Box>
  );
};

export default Hymns;
