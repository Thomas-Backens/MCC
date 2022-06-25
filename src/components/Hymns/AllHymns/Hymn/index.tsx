import React, { useState, ReactElement } from "react";
import { Box, Typography, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useStyles from "./styles";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

interface HymnProps {
  name: string;
  number: number;
  logs: { logged: string; bywho: string }[];
  handleEdit: () => void;
  handleQuickAdd: () => void;
}

const Hymn: React.FC<HymnProps> = ({
  name,
  number,
  logs,
  handleEdit,
  handleQuickAdd,
}: HymnProps): ReactElement => {
  const s = useStyles();

  const [logsOpen, setLogsOpen] = useState<boolean>(false);

  let canSing = false;
  const soonLogs = logs.filter((log) =>
    moment().isBefore(moment(log.logged, "MM/DD/YY").add(2, "weeks"))
  );
  if (soonLogs.length <= 0) {
    canSing = true;
  }

  const Moment = require("moment");
  const sortedLogs = logs.sort(
    (a, b) =>
      new Moment(b.logged, "MM/DD/YY") - new Moment(a.logged, "MM/DD/YY")
  );

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={s.root}
      >
        <Box display="flex" alignItems="center" style={{ width: "30%" }}>
          <Typography className={s.title}>{name}</Typography>
          <IconButton
            className={s.logsButton}
            onClick={() => setLogsOpen(!logsOpen)}
          >
            <ArrowForwardIosIcon
              className={`${s.arrow} ${logsOpen ? s.rotated : ""}`}
              fontSize="small"
            />
          </IconButton>
        </Box>
        <Box className={s.boxW10}>
          <Typography className={s.number}>{number}</Typography>
        </Box>
        <Box className={s.boxW20}>
          <Typography className={s.lastSang}>
            {`Last sang: ${logs[0].logged}`}
          </Typography>
        </Box>
        <Box className={s.boxW25}>
          <Typography className={canSing ? s.canSing : s.cantSing}>
            {canSing ? "It's been awhile!" : "Sang recently"}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          className={s.boxW15}
        >
          <IconButton className={s.quickAdd} onClick={handleQuickAdd}>
            <AddIcon className={s.quickAddPlus} />
          </IconButton>
          <Button className={s.editButton} onClick={handleEdit}>
            EDIT
          </Button>
        </Box>
      </Box>
      <Box className={`${s.logs} ${logsOpen ? "" : s.closed}`}>
        {sortedLogs.map((log) => (
          <Box display="flex" alignItems="center" key={uuidv4()}>
            <Box width={300}>
              <Typography
                className={s.log}
              >{`Logged: ${log.logged}`}</Typography>
            </Box>
            <Box>
              <Typography className={s.log}>{`By: ${log.bywho}`}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Hymn;
