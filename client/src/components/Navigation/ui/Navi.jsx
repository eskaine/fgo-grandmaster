import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import RegionContainer from "../RegionContainer";
import { Box, Container, AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from "../../../styles/styles";
import navStyles from "../../../styles/navStyles";
import SearchResults from  "./SearchResults";

function Navi(props) {
  const styles = makeStyles();
  const nStyles = navStyles();
  const { lang, title, regionList, search, openModal, genRoutes } = props;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  function handleToggle(e) {
    search.searchChange(e);
    setOpen(search.results.length > 0 ? true : false);
  };

  function handleClose(e) {
    if (anchorRef.current && anchorRef.current.contains(e.target) && e) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      setOpen(false);
    }
  }

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar className={styles.topbar}>
      <Container>
        <Toolbar className={styles.flexRowBetween}>
          <Box className={styles.mainNav}>
            <Typography className={nStyles.navTitle}>{title}</Typography>
            <Box className={styles.inline}>
              {genRoutes()}
            </Box>
          </Box>
          <Box className={styles.inline}>
            <div className={nStyles.search}>
              <div className={nStyles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Servant..."
                type="string"
                ref={anchorRef}
                classes={{
                  root: nStyles.inputRoot,
                  input: nStyles.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleToggle}
                value={search.searchValue}
              />
              <SearchResults search={search} open={open} anchorEl={anchorRef.current} handlers={{openModal, handleClose, handleListKeyDown}}  />
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
  openModal: PropTypes.func,
  genRoutes: PropTypes.func
};

export default Navi;