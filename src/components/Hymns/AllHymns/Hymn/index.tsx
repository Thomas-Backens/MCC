import React, { ReactElement } from "react";
import { Box, Typography, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";

interface HymnProps {
  name: string;
  number: number;
  logs: { logged: string; by: string }[];
}

const Hymn: React.FC<HymnProps> = ({
  name,
  number,
  logs,
}: HymnProps): ReactElement => {
  const s = useStyles();
  const canSing = Math.round(Math.random() * 1);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className={s.root}
    >
      <Box style={{ width: "30%" }}>
        <Typography className={s.title}>{name}</Typography>
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
        <IconButton className={s.quickAdd}>
          <AddIcon className={s.quickAddPlus} />
        </IconButton>
        <Button className={s.editButton}>EDIT</Button>
      </Box>
    </Box>
  );
};

export default Hymn;
