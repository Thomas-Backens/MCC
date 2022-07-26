import React, { useState, ReactElement } from "react";
import { Box } from "@material-ui/core";
import SearchBar from "./Search/SearchBar";
import AddHymn from "./Search/AddHymn";
import PinModal from "./AllHymns/Hymn/Pin";
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

interface PasswordValues {
  password: string;
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
  const [pinModalOpen, setPinModalOpen] = useState<boolean>(false);

  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);

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

  const checkPassword = (values: PasswordValues) => {
    setIsPasswordCorrect(values.password === "rahab" ? true : false);
    setPinModalOpen(false);
  };

  const openAddModal = () => {
    setAddModalOpen(true);
    setPinModalOpen(true);
  };

  const closeAddModal = () => {
    setPinModalOpen(false);
    setAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

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
    <>
      <PinModal
        open={pinModalOpen}
        handleClose={() => setPinModalOpen(false)}
        isCorrect={(values) => checkPassword(values)}
      />
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        // marginTop={20}
        className={s.root}
      >
        <Box display="flex" alignItems="center" className={s.search}>
          <SearchBar
            value={searchBarValue}
            handleChange={(value) => setSearchBarValue(value)}
          />
          <AddHymn
            open={addModalOpen && isPasswordCorrect}
            handleClose={closeAddModal}
            handleOpen={openAddModal}
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
    </>
  );
};

export default Hymns;
