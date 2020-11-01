import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
    minHeight: "calc(100vh - 104px)",
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
  textWhite: {
    color: theme.palette.common.white,
  },
  cursor: {
    pointer: "cursor",
  },
  pagination: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "5px",
    padding: "6px 2px",
  },
  flexRowBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexRowSpread: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mb5: {
    marginBottom: theme.spacing(5),
  },
  mt2: {
    marginTop: theme.spacing(2),
  },
}));
