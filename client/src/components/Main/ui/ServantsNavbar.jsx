import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import makeStyles from "../../../styles/styles";

function ServantsNavbar({ title, pageLength, setPage, genClassBadge }) {
  const styles = makeStyles();

  function pageClick(e) {
    setPage(Number(e.target.innerText) - 1);
  }

  return (
    <Box className={`${styles.header} ${styles.mb4}`}>
      <Box className={styles.servantsUpperNav}>
        <Typography variant="h4" color="secondary">
          {title}
        </Typography>
        <Pagination className={styles.pagination} count={pageLength}
          shape="rounded" hideNextButton={true} 
          hidePrevButton={true} onClick={pageClick} />
      </Box>
      <Box className={styles.flexRowBetween}>
        {genClassBadge()}
      </Box>
    </Box>
  );
}

ServantsNavbar.propTypes = {
  title: PropTypes.string,
  pageLength: PropTypes.number,
  setPage: PropTypes.func,
  genClassBadge: PropTypes.func
};

export default ServantsNavbar;
