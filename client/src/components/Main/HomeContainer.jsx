import React from "react";
import PropTypes from "prop-types";
import {randomServants} from "../../utilities/helpers";
import { containerComponent, withMouseHandlers } from "../helpers/helperComponents";
import ServantCard from "./ui/ServantCard";
import Home from "./ui/Home";

function HomeContainer({ params, pageTitle, mainData }) {
  const {baseParams} = params;

  function randomList() {
    let length = mainData[baseParams.regions.default].length;
    return randomServants(length);
  };

  function genServants() {
    return randomList().map((value, i) => {
      let servant = mainData[baseParams.regions.default][value];
      return withMouseHandlers(ServantCard, {servant})
    });
  };

  return (
    <React.Fragment>
      {containerComponent(<Home pageTitle={pageTitle} genServants={genServants} />)}
    </React.Fragment>
  );
};

HomeContainer.propTypes = {
  params: PropTypes.object,
  pageTitle: PropTypes.string,
  mainData: PropTypes.object
};

export default HomeContainer;
