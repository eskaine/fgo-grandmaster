import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(16),
    minHeight: "calc(100vh - 104px)",
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(12),
    },
  },
  header: {
    paddingTop: theme.spacing(7),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(0),
    },
  },
  mainNav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
    },
  },
  topbar: {
    [theme.breakpoints.down('md')]: {
      paddingTop: 10,
      paddingBottom: 20,
    },
  },
  wrapBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1em",
  },
  footer: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2.5),
    backgroundColor: theme.palette.primary.main,
  },
  servantsUpperNav: {
    display: "flex",
    marginTop: theme.spacing(7),
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(0),
    },
  },
  chip: {
    margin: ".5em 1em",
    [theme.breakpoints.up('md')]: {
      margin: 0,
    },
  },
  pagination: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "5px",
    padding: "6px 2px",
  },
  flexRowBetween: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.up('md')]: {
      justifyContent: "space-between",
    },
  },
  inline: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up('md')]: {
      width: "fit-content",
    },
  },
  textCenter: {
    textAlign: "center",
    [theme.breakpoints.up('md')]: {
      textAlign: "left"
    },
  },
  textWhite: {
    color: theme.palette.common.white,
  },
  cursor: {
    pointer: "cursor",
  },
  mb5: {
    marginBottom: theme.spacing(5),
  },
  mb4: {
    marginBottom: theme.spacing(4),
  },
  mt2: {
    marginTop: theme.spacing(2),
  },
}));