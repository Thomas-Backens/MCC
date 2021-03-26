import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

export default useStyles;
