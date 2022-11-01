import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      outline: "none",
    },
  },
  modalBackground: {
    backgroundColor: theme.palette.background.default,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    maxHeight: "100%",
    overflowY: "auto",
    maxWidth: "100%",
  },
  field: {
    backgroundColor: theme.palette.surface.black,
    color: theme.palette.surface.white,
    width: 500,
    padding: theme.spacing(1),
    borderRadius: 0,
    border: "none",
    "& > *": {
      color: theme.palette.surface.white,
    },
    [theme.breakpoints.down("md")]: {
      width: 300,
    },
  },
  title: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 700,
  },
  cancelButton: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.surface.white,
    borderRadius: 0,
    border: "1px solid #6A6A6A",
    width: 100,
    height: 40,
    "& > *": {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 400,
    },
    "&:hover": {
      backgroundColor: theme.palette.surface.lightGrey,
    },
  },
  saveHymnButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.surface.white,
    width: 100,
    height: 40,
    borderRadius: 0,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 400,
    marginLeft: theme.spacing(2),
    "&:hover": {
      backgroundColor: "rgba(58, 208, 118, 0.8)",
    },
  },
}));

export default useStyles;
