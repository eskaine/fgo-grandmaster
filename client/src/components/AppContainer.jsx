import React, { useState } from "react";
import App from "./App";
import params from "../utilities/params";
import data_NA from "../data/na_fgo_nice.json";
import data_JP from "../data/jp_fgo_nice.json";

function AppContainer() {
  const localRegion = localStorage.getItem("region");
  const [mainData] = useState({"JP": data_JP, "NA": data_NA });
  const [baseParams, setBaseParams] = useState(params);
  const [region, setRegion] = useState(localRegion ? localRegion : params.regions.default);
  if(localRegion === undefined) {
    localStorage.setItem("region", params.regions.default);
  }

  return (
    <App lang={{region, setRegion}} params={{baseParams, setBaseParams}} mainData={mainData[region]} />
  );
}

export default AppContainer;
