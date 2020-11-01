import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/AppContainer";
import "./styles/styles.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import "fontsource-roboto";

require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
