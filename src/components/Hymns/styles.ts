import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  search: {
    width: "70%",
    height: 40,
    marginBottom: theme.spacing(4),
  },
  hymns: {
    width: "70%",
  },
}));

export default useStyles;
