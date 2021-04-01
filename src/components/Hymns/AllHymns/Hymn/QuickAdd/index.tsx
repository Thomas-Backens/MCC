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
import moment from "moment";

interface Values {
  name: string;
  date: string;
}

interface QuickAddModalProps {
  open: boolean;
  handleClose: () => void;
  quickAddMutation: (values: Values) => void;
}

const QuickAddModal: React.FC<QuickAddModalProps> = ({
  open,
  handleClose,
  quickAddMutation,
}: QuickAddModalProps): ReactElement => {
  const s = useStyles();

  const initialValues: {
    name: string;
    date: string;
  } = {
    name: "",
    date: moment().format("MM/DD/YY"),
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
                  name: string;
                  date: string;
                }> = {};

                if (!values.name) {
                  errors.name = "Hymn Name is required";
                }
                if (!values.date) {
                  errors.date = "Date is required";
                }
                return errors;
              }}
              onSubmit={(values: Values) => {
                quickAddMutation(values);
                handleClose();
              }}
            >
              {({ submitForm }) => (
                <Form>
                  <Box>
                    <Typography className={s.title}>Quick Add</Typography>
                  </Box>
                  <Box marginTop={4}>
                    <Field
                      className={s.field}
                      component={TextField}
                      placeholder="Your name"
                      type="text"
                      name="name"
                    />
                  </Box>
                  <Box marginTop={2}>
                    <Field
                      className={s.field}
                      style={{ width: 242 }}
                      component={TextField}
                      placeholder="Date"
                      type="text"
                      name="date"
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
                      className={s.quickAddHymnButton}
                      variant="contained"
                      color="primary"
                      onClick={submitForm}
                    >
                      Add
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

export default QuickAddModal;
