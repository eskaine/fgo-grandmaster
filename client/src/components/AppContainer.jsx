import React, { useState } from "react";
import App from "./App";
import params from "../utilities/params";
import data_NA from "../data/na_fgo_nice.json";
import data_JP from "../data/jp_fgo_nice.json";

function AppContainer() {
  const [mainData] = useState({"JP": data_JP, "NA": data_NA });
  const [baseParams, setBaseParams] = useState(params);

  return (
    <App params={{baseParams, setBaseParams}} mainData={mainData}/>
  );
}

export default AppContainer;
