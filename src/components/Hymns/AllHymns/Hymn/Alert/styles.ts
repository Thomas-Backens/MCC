import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
  },
  dialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      outline: "none",
    },
  },
  dialogBackground: {
    backgroundColor: theme.palette.background.default,
    top: "50%",
    left: "50%",
    outline: "none",
    maxHeight: "100%",
    overflowY: "auto",
    maxWidth: "100%",
  },
  title: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 700,
  },
  content: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 400,
  },
  okButton: {
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
