import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    subtitle2: {
      fontSize: "1.8em",
      fontWeight: "bold"
    }
  },
    flexRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    flexJustSB: {
      justifyContent: "space-beween"
    },
  palette: {
    common: {
      lightblue: "#82B1FF"
    },
    primary: {
      main: "#2962FF",
    },
    secondary: {
      main: "#34495E",
    },
    background: {
      paper: "#ecf0f1"
    },
  },

});

export default theme;
