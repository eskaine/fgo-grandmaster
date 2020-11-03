import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { containerComponent, withMouseHandlers } from "../helpers/helperComponents";
import ProfileCard from "./ui/ProfileCard";
import Servants from "./ui/Servants";
import axios from "axios";

function ServantsContainer(props) {
  const { region, params, pageTitle, openModal} = props;
  const { baseParams } = params;
  const { REACT_APP_API_BASIC, REACT_APP_API_BASIC_FILE } = process.env;
  const [ allServantsData, setAllServantsData ] = useState([]);
  const [ filteredList, setFilteredList ] = useState([]);

  function showFilteredList(activeChip) {
    return allServantsData.filter(
      (servant) => servant.className.toLowerCase() === activeChip.toLowerCase()
    );
  }

  function setList(filter) {
    let filteredList = filter === "All" ? allServantsData : showFilteredList(filter);
    setFilteredList(filteredList);
  }

  function numOfPages() {
    let pages = Math.round(filteredList.length / baseParams.maxPerPage);
    return pages > 1 ? pages : 0;
  }

  function showList(page) {
    let start = page * baseParams.maxPerPage;
    let end = (page + 1) * baseParams.maxPerPage;
    end = end > filteredList.length ? filteredList.length : end;

    return filteredList.slice(start, end).map((servant, i) => {
      let props = { servant, page, region: region, openModal };
      return withMouseHandlers(ProfileCard, props);
    });
  }

  function triggerResponse(res) {
    if(res.status === 200) {
      setAllServantsData(res.data);
      setFilteredList(res.data);
    }
  }

  async function retrieveData() {
    try {
      const url = `${REACT_APP_API_BASIC}${region}${REACT_APP_API_BASIC_FILE}`;
      let res = await axios.get(url);
      triggerResponse(res);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    retrieveData();
  }, [region]);

  return (
    <React.Fragment>
      {containerComponent(
        <Servants region={region} title={pageTitle} showList={showList} setList={setList}
          pageLength={numOfPages()} baseParams={baseParams} />
      )}
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
