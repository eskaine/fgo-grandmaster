import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withDataContainer } from "../helpers/helperComponents";
import Servants from "./ui/Servants";
import {retrieveData } from "../../utilities/helpers";

function ServantsContainer(props) {
  const {region } = props;
  const api = { url: process.env.REACT_APP_API_BASIC, dataset: process.env.REACT_APP_API_BASIC_SERVANT};
  const [ allServantsData, setAllServantsData ] = useState([]);
  const [ filteredList, setFilteredList ] = useState([]);
  const newProps = {...props, data: { list: filteredList, setList, setAllServantsData}};


  function showFilteredList(activeChip) {
    return allServantsData.filter(
      (servant) => servant.className.toLowerCase() === activeChip.toLowerCase()
    );
  }

  function setList(filter) {
    let filteredList = filter === "All" ? allServantsData : showFilteredList(filter);
    setFilteredList(filteredList);
  }

  useEffect(() => {
    retrieveData(region, api, (data) => {
      setAllServantsData(data);
      setFilteredList(data);
    });
  }, [region]);

  return (
    <React.Fragment>
      {withDataContainer(Servants, newProps)}
    </React.Fragment>
  );
}

ServantsContainer.propTypes = {
  region: PropTypes.string,
  params: PropTypes.object,
  pageTitle: PropTypes.string,
  openModal: PropTypes.func
};

export default ServantsContainer;
