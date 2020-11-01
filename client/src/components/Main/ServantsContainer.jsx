import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { containerComponent, withMouseHandlers } from "../helpers/helperComponents";
import ProfileCard from "./ui/ProfileCard";
import Servants from "./ui/Servants";
import axios from "axios";

function ServantsContainer({ params, pageTitle }) {
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
      let props = { servant, region: baseParams.regions.default };
      return withMouseHandlers(ProfileCard, props);
    });
  }

  async function retrieveData() {
    try {
      const url = `${REACT_APP_API_BASIC}${baseParams.regions.default}${REACT_APP_API_BASIC_FILE}`;
      let data = await axios.get(url);
      setAllServantsData(data.data);
      setFilteredList(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    retrieveData();
  }, [baseParams.regions.default]);

  return (
    <React.Fragment>
      {containerComponent(
        <Servants title={pageTitle} showList={showList} setList={setList}
          pageLength={numOfPages()} baseParams={baseParams} />
      )}
    </React.Fragment>
  );
}

ServantsContainer.propTypes = {
  params: PropTypes.object,
  pageTitle: PropTypes.string
};

export default ServantsContainer;
