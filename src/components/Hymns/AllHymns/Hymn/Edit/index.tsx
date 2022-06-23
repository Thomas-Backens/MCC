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
  name: string;
  number: number;
}

interface HymnValues {
  name: string;
  number: number;
  // logs: { logged: string; bywho: string }[];
}

interface EditModalProps {
  open: boolean;
  handleClose: () => void;
  data: HymnValues;
  editMutation: (values: Values) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  open,
  handleClose,
  data,
  editMutation,
}: EditModalProps): ReactElement => {
  const s = useStyles();

  const initialValues: {
    name: string;
    number: number;
  } = {
    name: data.name,
    number: data.number,
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
                  number: string;
                }> = {};

                if (!values.name) {
                  errors.name = "Hymn Name is required";
                }
                if (!values.number) {
                  errors.number = "Hymn Number is required";
                }
                return errors;
              }}
              onSubmit={(values: Values) => {
                editMutation(values);
                handleClose();
              }}
            >
              {({ submitForm }) => (
                <Form>
                  <Box>
                    <Typography className={s.title}>Edit Hymn</Typography>
                  </Box>
                  <Box marginTop={4}>
                    <Field
                      className={s.field}
                      component={TextField}
                      placeholder="Hymn name"
                      type="text"
                      name="name"
                    />
                  </Box>
                  <Box marginTop={2}>
                    <Field
                      className={s.field}
                      style={{ width: 242 }}
                      component={TextField}
                      placeholder="Hymn number"
                      type="number"
                      name="number"
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
                      className={s.saveHymnButton}
                      variant="contained"
                      color="primary"
                      onClick={submitForm}
                    >
                      Save
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

export default EditModal;
