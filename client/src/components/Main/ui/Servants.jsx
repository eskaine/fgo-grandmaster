import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Chip } from "@material-ui/core";
import { withData } from "../../helpers/helperComponents";
import makeStyles from "../../../styles/styles";

function Servants(props) {
  const { region, pageTitle, showList, pageLength, params} = props;
  const setList = props.list.setList;
  const [ activeChip, setActiveChip ] = useState(params.baseParams.class.default);
  const [ page, setPage ] = useState(0);
  const styles = makeStyles();
  
  function setChip(chip) {
    setPage(0);
    setList(chip);
    setActiveChip(chip);
  }

  function genClassBadge() {
    return params.baseParams.class.list.map((servantClass, i) => {
      let color = servantClass === activeChip ? "secondary" : "default";

      return (
        <Chip key={i} id={servantClass} clickable className={styles.chip}
          label={servantClass} color={color} onClick={() => setChip(servantClass)} />
      );
    });
  }

  useEffect(() => {
    setActiveChip("All");
    setPage(0);
    return () =>{
      // window.location.reload();
    }
  }, [region]);

  const newProps = {
    showList,
    title: pageTitle,
    callback: genClassBadge,
    page: {
      page,
      setPage,
      pageLength,
    }
  }

  return (
      <React.Fragment>
        {withData(newProps)}
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
