import React, { useState, ReactElement } from "react";
import { Box } from "@material-ui/core";
import SearchBar from "./Search/SearchBar";
import AddHymn from "./Search/AddHymn";
import AllHymns from "./AllHymns";
import hymnsList from "./AllHymns/hymnsList";
import useStyles from "./styles";

interface Values {
  name: string;
  hymn_name: string;
  hymn_number: number;
  date: string;
}

const Hymns = (): ReactElement => {
  const s = useStyles();

  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  const createHymn = (values: Values) => {
    const { name, hymn_name, hymn_number, date } = values;
    const newHymn = {
      name: hymn_name,
      number: hymn_number,
      logs: [{ logged: date, by: name }],
    };

    hymnsList.push(newHymn);
  };

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
        <AddHymn
          open={addModalOpen}
          handleClose={closeAddModal}
          handleOpen={() => setAddModalOpen(true)}
          createMutation={createHymn}
        />
      </Box>
      <Box className={s.hymns}>
        <AllHymns />
      </Box>
    </Box>
  );
};

export default Hymns;
