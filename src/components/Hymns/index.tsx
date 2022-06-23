import React, { useState, ReactElement } from "react";
import { Box } from "@material-ui/core";
import SearchBar from "./Search/SearchBar";
import AddHymn from "./Search/AddHymn";
import AllHymns from "./AllHymns";
import { hymnsList, logsList } from "./AllHymns/hymnsList";
import useStyles from "./styles";
import { mutate } from "swr";
import fetcher from "../../Utils/fetcher";

interface Values {
  name: string;
  hymn_name: string;
  hymn_number: number;
  date: string;
}

interface HymnValues {
  name: string;
  number: number;
}

interface LogValues {
  id: number;
  logged: string;
  bywho: string;
}

const Hymns = (): ReactElement => {
  const s = useStyles();

  // const [newHymnValues, setNewHymnValues] = useState<Values>({
  //   name: "",
  //   hymn_name: "",
  //   hymn_number: 0,
  //   date: "",
  // });

  const [allHymns, setAllHymns] = useState<HymnValues[]>(hymnsList);
  const [allLogs, setAllLogs] = useState<LogValues[]>(logsList);

  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  // const createHymn = (values: Values) => {
  //   const { name, hymn_name, hymn_number, date } = values;
  //   const newHymn = {
  //     name: hymn_name,
  //     number: hymn_number,
  //     logs: [{ logged: date, by: name }],
  //   };

  //   hymnsList.push(newHymn);
  // };

  // const addHymn = (values: Values) => {
  //   mutate("/api/hymn", async () => {
  //     const addedHymn = await fetcher("/api/hymn", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         bywho: values.name,
  //         name: values.hymn_name,
  //         number: values.hymn_number,
  //         logged: values.date,
  //       }),
  //     });

  //     newHymn = addedHymn;
  //   });
  // };

  const addHymn = (values: Values) => {
    mutate("/api/hymn", async () => {
      const addedHymn = await fetcher("/api/hymn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bywho: values.name,
          name: values.hymn_name,
          number: values.hymn_number,
          logged: values.date,
        }),
      });

      const newHymn = {
        name: addedHymn.name,
        number: addedHymn.number,
      };
      setAllHymns([...allHymns, newHymn]);
      const newLog = {
        id: addedHymn.number,
        logged: addedHymn.logged,
        bywho: addedHymn.bywho,
      };
      setAllLogs([...allLogs, newLog]);

      window.location.reload();
    });
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
        <SearchBar
          value={searchBarValue}
          handleChange={(value) => setSearchBarValue(value)}
        />
        <AddHymn
          open={addModalOpen}
          handleClose={closeAddModal}
          handleOpen={() => setAddModalOpen(true)}
          createMutation={addHymn}
        />
      </Box>
      <Box className={s.hymns}>
        <AllHymns
          filter={searchBarValue}
          hymnData={allHymns}
          logData={allLogs}
          setHymns={setAllHymns}
          setLogs={setAllLogs}
        />
      </Box>
    </Box>
  );
};

export default Hymns;
