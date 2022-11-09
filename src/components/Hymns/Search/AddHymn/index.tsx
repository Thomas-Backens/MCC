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
  hymn_name: string;
  hymn_number: number;
  log: { logged: string; by: string };
}

interface AddHymnProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  createMutation: (values: Values) => void;
}

const AddHymn: React.FC<AddHymnProps> = ({
  open,
  handleClose,
  handleOpen,
  createMutation,
}: AddHymnProps): ReactElement => {
  const s = useStyles();

  const initialValues: {
    hymn_name: string;
    hymn_number: number;
    log: { logged: string; by: string };
  } = {
    hymn_name: "",
    hymn_number: 0,
    log: { logged: moment().format("MM/DD/YY"), by: "" },
  };

  return (
    <>
      <Box marginLeft={4} className={s.root}>
        <Button className={s.addButton} onClick={handleOpen}>
          ADD
        </Button>
      </Box>
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
                    hymn_name: string;
                    hymn_number: string;
                    log: { logged: string; by: string };
                  }> = {};

                  if (!values.hymn_name) {
                    errors.hymn_name = "Hymn Name is required";
                  }
                  if (!values.hymn_number) {
                    errors.hymn_number = "Hymn Number is required";
                  }
                  if (!values.log) {
                    errors.log = {
                      logged: "Date is required",
                      by: "Anonymous",
                    };
                  }
                  return errors;
                }}
                onSubmit={(values: Values) => {
                  createMutation(values);
                  handleClose();
                }}
              >
                {({ submitForm }) => (
                  <Form>
                    <Box>
                      <Typography className={s.title}>Add Hymn</Typography>
                    </Box>
                    <Box marginTop={4}>
                      <Field
                        className={s.field}
                        component={TextField}
                        placeholder="Your name"
                        type="text"
                        name="log.by"
                      />
                    </Box>
                    <Box marginTop={2}>
                      <Field
                        className={s.field}
                        component={TextField}
                        placeholder="Hymn name"
                        type="text"
                        name="hymn_name"
                      />
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="centers"
                      marginTop={2}
                    >
                      <Field
                        className={s.smallField}
                        // style={{ width: 242 }}
                        component={TextField}
                        placeholder="Hymn number"
                        type="number"
                        name="hymn_number"
                      />
                      <Field
                        className={s.smallField}
                        // style={{ width: 242 }}
                        component={TextField}
                        placeholder="Date"
                        type="text"
                        name="log.logged"
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
                        className={s.addHymnButton}
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
    </>
  );
};

export default AddHymn;
