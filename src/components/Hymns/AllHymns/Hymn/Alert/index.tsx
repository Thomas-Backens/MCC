import React, { ReactElement } from "react";
import {
  Box,
  Paper,
  Typography,
  Modal,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

interface AlertDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  handleClose,
}: AlertDialogProps): ReactElement => {
  const s = useStyles();

  return (
    <Modal className={s.dialog} open={open} onClose={handleClose}>
      <Paper className={s.dialogBackground}>
        <Box padding={4} boxShadow={4}>
          <Box marginBottom={2}>
            <Typography className={s.title}>
              Sorry
            </Typography>
          </Box>
          <Box>
            <Typography className={s.content}>
              Someone has already logged this Hymn for this date.
            </Typography>
          </Box>
          <Box
            margin={1}
            marginTop={6}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              className={s.okButton}
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};

export default AlertDialog;
