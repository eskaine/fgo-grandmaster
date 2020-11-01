import React, { useState } from "react";
import PropTypes from "prop-types";
import { MenuItem } from "@material-ui/core";
import Region from "./ui/Region";

function RegionContainer({ regions, setRegion }) {
  const [anchorEl, setAnchorEl] = useState(null);
  
  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  };

  function handleClose(e) {
    if(e.target.id !== "" ) {
      setRegion(e.target.id);
    }
    setAnchorEl(null);
  }

  function genRegions() {
    return regions.list.map((region) => (
      <MenuItem id={region} key={region} onClick={handleClose}>
        {region}
      </MenuItem>
    ));
  }

  return (
      <Region region={{regions, genRegions}} anchorEl={anchorEl} handlers={{handleClick, handleClose}} />
  );
}

RegionContainer.propTypes = {
  regions: PropTypes.object,
  setRegion: PropTypes.func
};

export default RegionContainer;