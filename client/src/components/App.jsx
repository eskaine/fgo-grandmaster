import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom"; 
import MainContainer from "./Main/MainContainer";
import NaviContainer from "./Navigation/NaviContainer";
import Footer from "./Main/ui/Footer";
import makeStyles from "../styles/styles";
import ServantModal from "./Main/ui/ServantModal";

function App(props) {
  const styles = makeStyles();
  
  return (
    <BrowserRouter>
      <ServantModal servantData={props.servantData} closeModal={props.modal.closeModal} state={props.modal.modal} />
      <NaviContainer {...props} />
      <MainContainer  {...props} />
      <Footer className={styles.MainContainer} />
    </BrowserRouter>
  );
}

App.propTypes = {
  lang: PropTypes.object,
  params: PropTypes.object,
  modal: PropTypes.object,
  servantData: PropTypes.object,
  mainData: PropTypes.array,
};

export default App;