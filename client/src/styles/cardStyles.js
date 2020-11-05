import { makeStyles } from "@material-ui/core/styles";

const cardStyles = makeStyles((theme) => ({
  card: {
    boxShadow: `5px 5px 10px 0px rgba(0,0,0,0.2)`,
    borderRadius: "10px",
  },
  profileCard: {
    maxWidth: 380,
  },
  profileLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    justifyItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    pointerEvents: "none",
  },
  profileHeader: {
    padding: "5px 1em",
    backgroundColor: theme.palette.common.lightblue,
    color: theme.palette.common.white,
    pointerEvents: "none",
  },
  profileContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pointerEvents: "none",
  },
  profileName: {
    paddingTop: "2em",
    height: "100%",
    width: "100%",
    fontWeight: "bold",
    color: theme.palette.common.darknavy,
    textAlign: "center",
    pointerEvents: "none",
  },
  portraitCard: {
    maxWidth: 240,
  },
  portraitImage: {
    height: 311,
    width: 220,
  },
  portraitContent: {
      position: "absolute",
      padding: "15px 0",
      margin: 0,
      bottom: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      pointerEvents: "none",
  },
  portraitName:{
    fontSize: "0.8em",
    color: theme.palette.common.white,
    pointerEvents: "none",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCardBase: {
    maxWidth: 354,
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      maxWidth: 885,
      display: "grid",
      gridTemplateColumns: "2fr 3fr",
    },
  },
  modalCardTab1: {
    height: 500,
    [theme.breakpoints.up('md')]: {
      height: 500,
    },
  },
  modalCardTab2: {
    height: "fit-content",
    [theme.breakpoints.up('md')]: {
      height: 500,
    },
  },
  mobileModalNav: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.up('md')]: {
      display: "none",
    },
  },
  disabledBtn: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: `${theme.palette.common.white} !important`
  },
  primaryBtn: {
    backgroundColor: `${theme.palette.common.white} !important`,
    color: `${theme.palette.secondary.main} !important`
  },
  modalImage: {
    height: 500,
    width: 354,
  },
  modalImageBox: {
    border: "none",
    borderRadius: "10px",
  },
  modalAction: {
    height: 500,
    width: 354,
    position: "relative",
    height: "inherit",
    zIndex: 3,
  },
  modalContent: {
    backgroundColor: "white",
    zIndex: 5,
    padding: 0,
    marginLeft: 1,
    paddingBottom: "0 !important",
    [theme.breakpoints.up('md')]: {
      height: "inherit",
    },
  },
  imageScrollFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 250,
    transform: "translateY(-50%)",
  },
  imageScrollPos: {
    position: "absolute",
    top: 0,
    height: 500,
    width: 354,
  },
  NA: {
    fontSize: "1.1em",
  },
  JP: {
    fontSize: "0.9em",
  },
  textRight: {
    position: "absolute",
    right: "1em",
  },
  textCenter: {
    textAlign: "center"
  },
}));

export default cardStyles;
