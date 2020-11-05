import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import App from "./App";
import params from "../utilities/params";
import data_NA from "../data/na_fgo_nice.json";
import data_JP from "../data/jp_fgo_nice.json";

function AppContainer() {
  const { REACT_APP_API_NICE } = process.env;
  const localRegion = localStorage.getItem("region");
  const [mainData] = useState({"JP": data_JP, "NA": data_NA });
  const [baseParams, setBaseParams] = useState(params);
  const [region, setRegion] = useState(localRegion ? localRegion : params.regions.default);
  
  const [ servantID, setServantID ] = useState(0);
  const [ servantData, setServantData ] = useState({});
  const [ modal, setModal ] = useState(false);

  if(localRegion === undefined) {
    localStorage.setItem("region", params.regions.default);
  }

  function openModal(toOpenID) {
    if(toOpenID === servantID && toOpenID === servantData.collectionNo) {
      setModal(true);
    } else {
      setServantID(toOpenID);
    }
  };

  function closeModal() {
    setModal(false);
  };

  function triggerResponse(res) {
    if(res.status === 200) {
      setServantData(res.data);   
    } else {
      setServantData(mainData[region][servantID - 1]);
    }
    setModal(true);
  }

  async function retrieveData() {
    try {
      const url = `${REACT_APP_API_NICE}${region}/servant/${servantID}`;
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
    <App lang={{region, setRegion}} params={{baseParams, setBaseParams}} modal={{modal, openModal, closeModal}} servantData={servantData} mainData={mainData[region]} />
  );
}

export default AppContainer;
