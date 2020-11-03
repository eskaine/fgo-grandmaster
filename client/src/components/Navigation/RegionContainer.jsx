import React, { useState } from "react";
import PropTypes from "prop-types";
import { MenuItem } from "@material-ui/core";
import Region from "./ui/Region";

function RegionContainer({ lang, regionList }) {
  const [anchorEl, setAnchorEl] = useState(null);
  
  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  };

  function handleClose(e) {
    if(e.target.id !== "" ) {
      lang.setRegion(e.target.id);
      localStorage.setItem("region", e.target.id);
    }
    setAnchorEl(null);
  }

  function genRegions() {
    return regionList.map((region) => (
      <MenuItem id={region} key={region} onClick={handleClose}>
        {region}
      </MenuItem>
    ));
  }

  return (
      <Region region={lang.region} genRegions={genRegions} anchorEl={anchorEl} handlers={{handleClick, handleClose}} />
  );
}

RegionContainer.propTypes = {
  lang: PropTypes.object,
  regionList: PropTypes.array
};

export default RegionContainer;