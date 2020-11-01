import { makeStyles } from "@material-ui/core/styles";

const navStyles = makeStyles((theme) => ({
  navTitle: {
    fontFamily: ["Lato", "sans-serif"],
    fontSize: "1.5em",
    marginRight: "1em",
  },
  navLink: {
    textDecoration: "none",
  },
  navButton: {
    textTransform: "none",
    fontSize: "1.2em",
    fontWeight: "bold",
  },
  region: {
    position: "absolute",
    right: 0,
  },
  regionText: {
    textTransform: "none",
    color: theme.palette.common.white,
    fontSize: "1.2em",
  },
  active: {
    color: theme.palette.secondary.main,
  },
}));

export default navStyles;
