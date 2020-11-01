import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom"; 
import MainContainer from "./Main/MainContainer";
import NaviContainer from "./Navigation/NaviContainer";
import Footer from "./Main/ui/Footer";
import makeStyles from "../styles/styles";

function App({params, mainData}) {
  const styles = makeStyles();
  
  return (
    <BrowserRouter>
      <NaviContainer params={params} />
      <MainContainer params={params} mainData={mainData} />
      <Footer className={styles.MainContainer} />
    </BrowserRouter>
  );
}

App.propTypes = {
  params: PropTypes.object,
  mainData: PropTypes.object,
};

export default App;