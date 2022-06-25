import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.surface.black,
    height: 70,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  title: {
    marginLeft: theme.spacing(2),
    width: 500,
    fontSize: 30,
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
    color: theme.palette.surface.white,
  },
  tabs: {
    width: "100%",
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  tabButton: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 300,
    width: 200,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.bodyXXSmall.fontSize,
      width: 100,
    },
    height: 70,
    color: theme.palette.surface.white,
    "& > *": {
      marginTop: 0,
      transition: "0.3s",
    },
    "&:hover": {
      "& > *": {
        marginTop: -10,
      },
    },
  },
}));

export default useStyles;
