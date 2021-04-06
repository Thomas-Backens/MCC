import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.surface.black,
    height: 70,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h6.fontSize,
  },
  number: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h6.fontSize,
    textAlign: "center",
  },
  lastSang: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 200,
    textAlign: "center",
  },
  canSing: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h6.fontSize,
    textAlign: "center",
  },
  cantSing: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h6.fontSize,
    textAlign: "center",
  },
  quickAdd: {
    backgroundColor: theme.palette.primary.main,
    width: 30,
    height: 30,
    marginRight: theme.spacing(2),
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
    height: 40,
    "& > *": {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 400,
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
    overflow: "hidden",
  },
  log: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 200,
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  closed: {
    height: 0,
  },
}));

export default useStyles;
