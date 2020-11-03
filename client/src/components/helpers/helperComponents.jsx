import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { Container, Box } from "@material-ui/core";
import makeStyles from "../../styles/styles";

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
      key={props.servant.collectionNo}
      {...props}
      handleMouseEnter={handleMouseEnter}
      handleMouseOut={handleMouseOut}
    />
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

export {
  routedComponent,
  containerComponent,
  wrapBoxComponent,
  withMouseHandlers,
};
