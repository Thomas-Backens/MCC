import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";
import Hymn from "./Hymn";
import hymnsList from "./hymnsList";

const AllHymns = (): ReactElement => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      {hymnsList.map((hymn) => (
        <Hymn
          name={hymn.name}
          number={hymn.number}
          logs={hymn.logs}
          key={hymn.number}
        />
      ))}
    </Box>
  );
};

export default AllHymns;
