import React, { ReactElement } from "react";
import { Input } from "@material-ui/core";
import useStyles from "./styles";

interface SearchBarProps {
  value: string;
  handleChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  handleChange,
}: SearchBarProps): ReactElement => {
  const s = useStyles();
  return (
    <Input
      className={s.searchBar}
      placeholder="Search Hymn Name, or Number..."
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default SearchBar;
