import React from "react";
import PropTypes from "prop-types";
import RegionContainer from "../RegionContainer";
import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import makeStyles from "../../../styles/navStyles";

function Navi({ lang, title, regionList, genRoutes }) {
  const styles = makeStyles();

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography className={styles.navTitle}>{title}</Typography>
          {genRoutes()}
          <RegionContainer lang={lang} regionList={regionList} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Navi.propTypes = {
  lang: PropTypes.object,
  title: PropTypes.string,
  regionList: PropTypes.array,
  genRoutes: PropTypes.func
};

export default Navi;
