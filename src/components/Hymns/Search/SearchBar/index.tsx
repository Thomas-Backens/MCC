import React, { ReactElement } from "react";
import { Input } from "@material-ui/core";
import useStyles from "./styles";

const SearchBar = (): ReactElement => {
  const s = useStyles();
  return (
    <Input
      className={s.searchBar}
      placeholder="Search Hymn Name, or Number..."
    />
  );
};

export default SearchBar;
