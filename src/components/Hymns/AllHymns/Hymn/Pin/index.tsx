import React, { ReactElement } from "react";
import { Formik, Field, Form } from "formik";
import {
  Box,
  Button,
  Modal,
  Paper,
  Backdrop,
  Fade,
  Typography,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import useStyles from "./styles";

interface Values {
  password: string;
}

interface EditModalProps {
  open: boolean;
  handleClose: () => void;
  isCorrect: (values: Values) => void;
}

const PinModal: React.FC<EditModalProps> = ({
  open,
  handleClose,
  isCorrect,
}: EditModalProps): ReactElement => {
  const s = useStyles();

  const initialValues: {
    password: string;
  } = {
    password: "",
  };

  return (
    <Modal
      className={s.modal}
      BackdropComponent={Backdrop}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
      onClose={handleClose}
      open={open}
    >
      <Fade in={open}>
        <Paper className={s.modalBackground}>
          <Box padding={4} boxShadow={4}>
            <Formik
              initialValues={initialValues}
              validate={(values) => {
                const errors: Partial<{
                  password: string;
                }> = {};

                if (!values.password) {
                  errors.password = "password is required";
                }
                return errors;
              }}
              onSubmit={(values: Values) => {
                isCorrect(values);
                handleClose();
              }}
            >
              {({ submitForm }) => (
                <Form>
                  <Box>
                    <Typography className={s.title}>Password</Typography>
                  </Box>
                  <Box marginTop={4}>
                    <Field
                      className={s.field}
                      component={TextField}
                      placeholder="Password"
                      type="text"
                      name="password"
                    />
                  </Box>
                  <Box
                    margin={1}
                    marginTop={8}
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <Button
                      className={s.cancelButton}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      className={s.enterPinButton}
                      variant="contained"
                      color="primary"
                      onClick={submitForm}
                    >
                      Enter
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default PinModal;
