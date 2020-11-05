import React, { useState, useEffect } from "react";
import App from "./App";
import params from "../utilities/params";
import {retrieveData} from "../utilities/helpers";
import data_NA from "../data/na_fgo_nice.json";
import data_JP from "../data/jp_fgo_nice.json";

function AppContainer() {
  const { REACT_APP_API_NICE } = process.env;
  const localRegion = localStorage.getItem("region");
  const [mainData] = useState({"JP": data_JP, "NA": data_NA });
  const [baseParams, setBaseParams] = useState(params);
  const [region, setRegion] = useState(localRegion ? localRegion : params.regions.default);
  
  const [ item, setItem ] = useState({});
  const [ modalData, setModalData ] = useState({});
  const [ modal, setModal ] = useState(false);

  if(localRegion === undefined) {
    localStorage.setItem("region", params.regions.default);
  }

  function itemType() {
    return item.path === "/servants" ? "servant" : "equip";
  }

  function openModal(newItem) {
    if(newItem.path === item.path && newItem.itemID === item.itemID) {
      setModal(true);
    } else {
      setItem(newItem);
    }
  };

  function closeModal() {
    setModal(false);
  };

  useEffect(() => {
    if(item.itemID > 0) {
      const url = `${REACT_APP_API_NICE}${region}/${itemType()}/${item.itemID}`;
      retrieveData(url, (res) => {
        if(res.status === 200) {
          setModalData(res.data);   
        } else if (item.path === "/servants") {
          setModalData(mainData[region][item.itemID - 1]);
        }
        setModal(true); 
      });
    }
  }, [item]);

  return (
    <App 
      lang={{region, setRegion}} 
      params={{baseParams, setBaseParams}} 
      modal={{modal, openModal, closeModal}} 
      modalData={{type: item.path, data: modalData}} 
      mainData={mainData[region]} 
    />
  );
}

export default AppContainer;