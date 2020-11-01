import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import { wrapBoxComponent } from "../../helpers/helperComponents";
import makeStyles from "../../../styles/styles";

function Home({ pageTitle, genServants }) {
  const styles = makeStyles();

  return (
    <React.Fragment>
      <Box className={styles.mb5}>
        <Typography variant="h4" color="secondary">
          {pageTitle}
        </Typography>
      </Box>
      {wrapBoxComponent(genServants())}
    </React.Fragment>
  );
}

Home.propTypes = {
  pageTitle: PropTypes.string,
  genServants: PropTypes.func,
};

export default Home;
