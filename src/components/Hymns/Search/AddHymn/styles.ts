import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
  },
  addButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.surface.white,
    width: 130,
    height: "100%",
    borderRadius: 0,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "rgba(58, 208, 118, 0.8)",
    },
  },
}));

export default useStyles;
