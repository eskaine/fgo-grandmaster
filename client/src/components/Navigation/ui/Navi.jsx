import React from "react";
import PropTypes from "prop-types";
import RegionContainer from "../RegionContainer";
import { Box, Container, AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from "../../../styles/styles";
import navStyles from "../../../styles/navStyles";

function Navi({ lang, title, regionList, search, genRoutes }) {
  const styles = makeStyles();
  const nStyles = navStyles();

  return (
    <AppBar>
      <Container>
        <Toolbar className={styles.flexRowBetween}>
          <Box className={styles.inline}>
            <Typography className={nStyles.navTitle}>{title}</Typography>
            {genRoutes()}
          </Box>
          <Box className={styles.inline}>
            <div className={nStyles.search}>
              <div className={nStyles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Servant..."
                type="string"
                classes={{
                  root: nStyles.inputRoot,
                  input: nStyles.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={search.searchChange}
                value={search.searchValue}
              />
            </div>
            <RegionContainer lang={lang} regionList={regionList} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Navi.propTypes = {
  lang: PropTypes.object,
  title: PropTypes.string,
  regionList: PropTypes.array,
  search: PropTypes.object,
  genRoutes: PropTypes.func
};

export default Navi;


