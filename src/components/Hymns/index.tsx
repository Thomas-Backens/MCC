import React, { useState, ReactElement } from "react";
import { Box, Typography, IconButton, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SearchBar from "./Search/SearchBar";
import AddHymn from "./Search/AddHymn";
import PinModal from "./AllHymns/Hymn/Pin";
import AllHymns from "./AllHymns";
import { hymnsList, logsList } from "./AllHymns/hymnsList";
import useStyles from "./styles";
import { mutate } from "swr";
import fetcher from "../../Utils/fetcher";

interface Values {
  hymn_name: string;
  hymn_number: number;
  log: { logged: string; by: string };
}

interface PasswordValues {
  password: string;
}

interface HymnValues {
  _id: number;
  name: string;
  logs: { logged: string; by: string }[];
}

const Hymns = (): ReactElement => {
  const s = useStyles();

  const [allHymns, setAllHymns] = useState<HymnValues[]>(hymnsList);

  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [pinModalOpen, setPinModalOpen] = useState<boolean>(false);

  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);

  const [isSortedReversed, setIsSortedReversed] = useState<boolean>(false);

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
          name: values.hymn_name,
          number: values.hymn_number,
          log: values.log,
        }),
      });

      console.log(
        `Inside the mutation, values.log: ${values.log}, addedHymn.log: ${addedHymn.log}`
      );

      const newHymn = {
        _id: addedHymn.number,
        name: addedHymn.name,
        logs: addedHymn.log,
      };
      setAllHymns([...allHymns, newHymn]);

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
          <Box display="flex" alignItems="center" className={s.sort}>
            <Button
              onClick={() => setIsSortedReversed(!isSortedReversed)}
              className={s.sortBtn}
            >
              Sort by Date
              <ArrowForwardIosIcon
                className={`${s.arrow} ${
                  isSortedReversed ? s.rotated : s.notRotated
                }`}
                fontSize="small"
              />
            </Button>
            {/* <Typography className={s.sortText}>Sort by Logged</Typography>
            <IconButton
              className={s.logsButton}
              onClick={() => setIsSortedReversed(!isSortedReversed)}
            >
              <ArrowForwardIosIcon
                className={`${s.arrow} ${
                  isSortedReversed ? s.rotated : s.notRotated
                }`}
                fontSize="small"
              />
            </IconButton> */}
          </Box>
          <AllHymns
            filter={searchBarValue}
            hymnData={allHymns}
            setHymns={setAllHymns}
            sortedReversed={isSortedReversed}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hymns;
