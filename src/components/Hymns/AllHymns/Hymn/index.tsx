import React, { useState, ReactElement } from "react";
import { Box, Typography, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useStyles from "./styles";
import moment from "moment";

interface HymnProps {
  name: string;
  number: number;
  logs: { logged: string; by: string }[];
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

  const canSing = moment().isAfter(
    moment(logs[logs.length - 1].logged).add(2, "weeks")
  );

  const Moment = require("moment");
  const sortedLogs = logs.sort(
    (a, b) => new Moment(b.logged) - new Moment(a.logged)
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
        <Box style={{ width: "10%" }}>
          <Typography className={s.number}>{number}</Typography>
        </Box>
        <Box style={{ width: "20%" }}>
          <Typography className={s.lastSang}>
            {`Last sang: ${logs[logs.length - 1].logged}`}
          </Typography>
        </Box>
        <Box style={{ width: "25%" }}>
          <Typography className={canSing ? s.canSing : s.cantSing}>
            {canSing ? "It's been awhile!" : "Sang recently"}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          style={{ width: "15%" }}
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
          <Box display="flex" alignItems="center">
            <Box width={300}>
              <Typography
                className={s.log}
              >{`Logged: ${log.logged}`}</Typography>
            </Box>
            <Box>
              <Typography className={s.log}>{`By: ${log.by}`}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Hymn;
