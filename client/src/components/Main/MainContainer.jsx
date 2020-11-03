import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import axios from "axios";
import { routedComponent } from "../helpers/helperComponents";
import ServantModal from "./ui/ServantModal";

function MainContainer({lang, params, mainData}) {
  const { REACT_APP_API_NICE } = process.env;
  const [ modal, setModal ] = useState(false);
  const [ servantID, setServantID ] = useState(0);
  const [ servantData, setServantData ] = useState({});

  function openModal(id) {
    if(id === servantID && id === servantData.collectionNo) {
      setModal(true);
    } else {
      setServantID(id);
    }
  };

  function closeModal() {
    setModal(false);
  };

  function createRoutes() {
    return params.baseParams.routes.map(
      ({ Component, route, linkName, pageTitle }, i) => {
        return routedComponent(
          route, i, <Component region={lang.region} linkName={linkName} pageTitle={pageTitle} 
          params={params} mainData={mainData} openModal={openModal} />
        );
      }
    );
  }
  
  function triggerResponse(res) {
    if(res.status === 200) {
      setServantData(res.data);
      setModal(true);
    }
  }

  async function retrieveData() {
    try {
      const url = `${REACT_APP_API_NICE}${lang.region}/servant/${servantID}`;
      let res = await axios.get(url);
      triggerResponse(res);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if(servantID > 0) {
      retrieveData();
    }
  }, [servantID]);

  return (
    <Container>
      <ServantModal servantData={servantData} closeModal={closeModal} state={modal} />
      <Switch>
        {createRoutes()}
      </Switch>
    </Container>
  );
}

MainContainer.propTypes = {
  lang: PropTypes.object,
  params: PropTypes.object,
  mainData: PropTypes.array,
};

export default MainContainer;
