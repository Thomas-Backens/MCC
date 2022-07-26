import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.surface.black,
    height: 70,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  title: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.bodyXXSmall.fontSize,
    },
  },
  number: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.bodyXXSmall.fontSize,
    },
    textAlign: "center",
  },
  lastSang: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.bodyXXSmall.fontSize,
    },
    fontWeight: 200,
    textAlign: "center",
  },
  canSing: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.bodyXXSmall.fontSize,
    },
    textAlign: "center",
  },
  cantSing: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.bodyXXSmall.fontSize,
    },
    textAlign: "center",
  },
  quickAdd: {
    backgroundColor: theme.palette.primary.main,
    width: 30,
    height: 30,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(1),
    },
    "&:hover": {
      backgroundColor: "rgba(58, 208, 118, 0.8)",
    },
  },
  quickAddPlus: {
    color: theme.palette.surface.white,
  },
  editButton: {
    backgroundColor: theme.palette.surface.black,
    color: theme.palette.surface.white,
    borderRadius: 0,
    border: "1px solid #6A6A6A",
    width: 100,
    [theme.breakpoints.down("md")]: {
      width: 30,
    },
    height: 30,
    "& > *": {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 400,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.bodyXSmall.fontSize,
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.surface.lightGrey,
    },
  },
  logsButton: {
    width: 40,
    height: 40,
  },
  arrow: {
    width: 15,
    height: 15,
    color: "white",
    transition: "0.2s",
  },
  rotated: {
    transform: "rotate(90deg)",
  },
  logs: {
    backgroundColor: theme.palette.surface.black,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(1),
    },
    overflow: "hidden",
  },
  logSize: {
    width: 300,
    [theme.breakpoints.down("md")]: {
      width: 150,
    },
  },
  log: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 200,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.bodyXXSmall.fontSize,
    },
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  closed: {
    height: 0,
  },
  boxW10: {
    width: "10%",
    [theme.breakpoints.down("md")]: {
      width: "5%",
    },
  },
  boxW15: {
    width: "15%",
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
  },
  boxW20: {
    width: "20%",
  },
  boxW25: {
    width: "25%",
    [theme.breakpoints.down("md")]: {
      width: "5%",
    },
  },
}));

export default useStyles;
