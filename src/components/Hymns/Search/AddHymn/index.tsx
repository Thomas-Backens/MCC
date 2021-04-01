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
  hymn_name: string;
  hymn_number: number;
  date: string;
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
    name: string;
    hymn_name: string;
    hymn_number: number;
    date: string;
  } = {
    name: "",
    hymn_name: "",
    hymn_number: 0,
    date: moment().format("MM/DD/YY"),
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
                    name: string;
                    hymn_name: string;
                    hymn_number: string;
                    date: string;
                  }> = {};

                  if (!values.name) {
                    errors.name = "Your name is required";
                  }
                  if (!values.hymn_name) {
                    errors.hymn_name = "Hymn Name is required";
                  }
                  if (!values.hymn_number) {
                    errors.hymn_number = "Hymn Number is required";
                  }
                  if (!values.date) {
                    errors.date = "Date is required";
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
                        name="name"
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
                        className={s.field}
                        style={{ width: 242 }}
                        component={TextField}
                        placeholder="Hymn number"
                        type="number"
                        name="hymn_number"
                      />
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
