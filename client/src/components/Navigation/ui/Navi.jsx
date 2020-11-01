import React from "react";
import PropTypes from "prop-types";
import RegionContainer from "../RegionContainer";
import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import makeStyles from "../../../styles/navStyles";

function Navi({ baseParams, setRegion, genRoutes }) {
  const styles = makeStyles();

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography className={styles.navTitle}>{baseParams.title}</Typography>
          {genRoutes()}
          <RegionContainer regions={baseParams.regions} setRegion={setRegion} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Navi.propTypes = {
  baseParams: PropTypes.object,
  setRegion: PropTypes.func,
  genRoutes: PropTypes.func
};

export default Navi;
