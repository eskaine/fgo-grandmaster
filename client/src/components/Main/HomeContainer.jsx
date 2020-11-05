import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {randomServants} from "../../utilities/helpers";
import { containerComponent, withMouseHandlers } from "../helpers/helperComponents";
import ServantCard from "./ui/cards/ServantCard";
import Home from "./ui/Home";

function HomeContainer({ region, pageTitle, mainData, openModal }) {
  const [randList, setRandList] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(region);

  function genServants() {
    let list = randList;
    if(currentRegion !== region) {
      list = randomServants(mainData.length);
      setRandList(list);
      setCurrentRegion(region);
    }
    
    return list.map((value, key) => {
      let servant = mainData[value];
      return withMouseHandlers(ServantCard, {dataItem: servant, openModal, region})
    });
  };

  useEffect(() => {
    setRandList(randomServants(mainData.length));
  }, []);

  return (
    <React.Fragment>
      {containerComponent(<Home pageTitle={pageTitle} genServants={genServants} />)}
    </React.Fragment>
  );
};

HomeContainer.propTypes = {
  region: PropTypes.string,
  params: PropTypes.object,
  pageTitle: PropTypes.string,
  mainData: PropTypes.array
};

export default HomeContainer;
