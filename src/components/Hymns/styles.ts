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
    marginBottom: theme.spacing(1),
  },
  hymns: {
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
  sort: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(0),
    },
    marginBottom: theme.spacing(1),
  },
  sortBtn: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.bodyXXSmall.fontSize,
    },
  },
  logsButton: {
    width: 40,
    height: 40,
  },
  arrow: {
    marginLeft: theme.spacing(1),
    width: 15,
    height: 15,
    color: "white",
    transition: "0.2s",
  },
  notRotated: {
    transform: "rotate(-90deg)",
  },
  rotated: {
    transform: "rotate(90deg)",
  },
}));

export default useStyles;
