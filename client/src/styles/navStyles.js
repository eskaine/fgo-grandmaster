import { makeStyles, fade } from "@material-ui/core/styles";

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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
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
