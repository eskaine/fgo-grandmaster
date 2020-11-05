import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withDataContainer } from "../helpers/helperComponents";
import { retrieveData } from "../../utilities/helpers";
import Essences from "./ui/Essences";

function EssencesContainer(props) {
  const { region } = props;
  const url = `${process.env.REACT_APP_API_BASIC}${region}${process.env.REACT_APP_API_BASIC_EQUIP}`;
  const [ data, setData ] = useState([]);

  useEffect(() => {
    retrieveData(url, (res) => {
      if(res.status === 200) {
        setData(res.data);
      } 
    });
  }, [region]);

  return (
    <React.Fragment>
      {withDataContainer(Essences, {...props, data: data })}
    </React.Fragment>
  );
}

EssencesContainer.propTypes = {
  region: PropTypes.string,
  params: PropTypes.object,
  pageTitle: PropTypes.string,
  openModal: PropTypes.func
};

export default EssencesContainer;