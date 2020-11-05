import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { Container, Box, Typography } from "@material-ui/core";
import makeStyles from "../../styles/styles";
import ProfileCard from "../Main/ui/cards/ProfileCard";
import { Pagination } from "@material-ui/lab";

function routedComponent(route, i, component) {
  return (
    <Route exact key={i} path={route}>
      {component}
    </Route>
  );
}

function containerComponent(component) {
  const styles = makeStyles();
  return <Container className={styles.container}>{component}</Container>;
}

function wrapBoxComponent(content) {
  const styles = makeStyles();

  return (
    <Box key={content} className={styles.wrapBox}>
      {content}
    </Box>
  );
}

function withMouseHandlers(Component, props) {
  function handleMouseEnter(id) {
    document.getElementById(id).classList.remove("contract-card");
    document.getElementById(id).classList.add("expand-card");
  }

  function handleMouseOut(id) {
    document.getElementById(id).classList.remove("expand-card");
    document.getElementById(id).classList.add("contract-card");
  }

  return (
    <Component
      key={props.dataItem.collectionNo}
      {...props}
      handleMouseEnter={handleMouseEnter}
      handleMouseOut={handleMouseOut}
    />
  );
}

function withDataContainer(Component, props) {
   const { region, params, data, openModal} = props;
  const { baseParams } = params;

  function numOfPages() {
    let pages = Math.round(data.length / baseParams.maxPerPage);
    return pages > 1 ? pages : 0;
  }

  function showList(page) {
    let start = page * baseParams.maxPerPage;
    let end = (page + 1) * baseParams.maxPerPage;
    end = end > data.length ? data.length : end;

    return data.slice(start, end).map((dataItem, i) => {
      let props = { dataItem, page, region: region, openModal };
      return withMouseHandlers(ProfileCard, props);
    });
  }

  return(
    containerComponent( <Component {...props} pageLength={numOfPages()} showList={showList} />)
  );
}

function withData(props) {
  const { title, showList, callback} = props;
  const { page, setPage, pageLength} = props.page;
  const styles = makeStyles();

  function pageClick(e) {
    setPage(Number(e.target.innerText) - 1);
  }

  return (
    <React.Fragment>
        <Box className={styles.servantsUpperNav}>
        <Typography variant="h4" color="secondary">
          {title}
        </Typography>
        <Pagination className={styles.pagination} count={pageLength}
          shape="rounded" hideNextButton={true} 
          hidePrevButton={true} onClick={pageClick} />
      </Box>
      <Box className={`${styles.flexRowBetween} ${styles.mb4}`}>
        {callback && callback()}
      </Box>
        {wrapBoxComponent(showList(page))}
      </React.Fragment>
  );
}

routedComponent.propTypes = {
  route: PropTypes.string,
  i: PropTypes.number,
  component: PropTypes.element,
};

containerComponent.propTypes = {
  component: PropTypes.element,
};

wrapBoxComponent.propTypes = {
  component: PropTypes.array,
};

withMouseHandlers.propTypes = {
  component: PropTypes.elementType,
  props: PropTypes.object,
};

withDataContainer.propTypes = {
  component: PropTypes.elementType,
  props: PropTypes.object,
};

withData.propTypes = {
  props: PropTypes.object,
};

export {
  routedComponent,
  containerComponent,
  wrapBoxComponent,
  withMouseHandlers,
  withDataContainer,
  withData
};
