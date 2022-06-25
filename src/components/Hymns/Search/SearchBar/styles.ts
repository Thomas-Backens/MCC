import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  searchBar: {
    backgroundColor: theme.palette.surface.black,
    color: theme.palette.surface.white,
    width: "100%",
    height: "100%",
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(1),
    },
  },
}));

export default useStyles;
