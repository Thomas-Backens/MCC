import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    marginTop: 160,
    [theme.breakpoints.down("md")]: {
      marginTop: 50,
    },
  },
  search: {
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    height: 40,
    marginBottom: theme.spacing(2),
  },
  hymns: {
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
}));

export default useStyles;
