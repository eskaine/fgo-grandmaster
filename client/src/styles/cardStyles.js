import { makeStyles } from "@material-ui/core/styles";

const portraitStyle = makeStyles((theme) => ({
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
}));

export default portraitStyle;
