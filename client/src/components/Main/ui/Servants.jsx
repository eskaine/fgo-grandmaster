import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Chip } from "@material-ui/core";
import ServantsNavbar from "./ServantsNavbar";
import { wrapBoxComponent } from "../../helpers/helperComponents";

function Servants(props) {
  const { region, title, showList, setList, pageLength, baseParams} = props;
  const [ activeChip, setActiveChip ] = useState(baseParams.class.default);
  const [ page, setPage ] = useState(0);

  function setChip(chip) {
    setPage(0);
    setList(chip);
    setActiveChip(chip);
  }

  function genClassBadge() {
    return baseParams.class.list.map((servantClass, i) => {
      let color = servantClass === activeChip ? "secondary" : "default";

      return (
        <Chip key={i} id={servantClass} clickable
          label={servantClass} color={color} onClick={() => setChip(servantClass)} />
      );
    });
  }

  useEffect(() => {
    setActiveChip("All");
    setPage(0);
    return () =>{
      window.location.reload();
    }
  }, [region]);

  return (
      <React.Fragment>
        <ServantsNavbar title={title} pageLength={pageLength} setPage={setPage} genClassBadge={genClassBadge} />
        {wrapBoxComponent(showList(page))}
      </React.Fragment>
  );
}

Servants.propTypes = {
  region: PropTypes.string,
  title: PropTypes.string,
  showList: PropTypes.func,
  setList: PropTypes.func,
  pageLength: PropTypes.number,
  baseParams: PropTypes.object,
};

export default Servants;
