import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { routedComponent } from "../helpers/helperComponents";
import { Container } from "@material-ui/core";

function MainContainer(props) {
  const { params, mainData } = props;

  function createRoutes() {
    return params.baseParams.routes.map(
      ({ Component, route, linkName, pageTitle }, i) => {
        return routedComponent(
          route, i, <Component linkName={linkName} pageTitle={pageTitle} params={params} mainData={mainData} />
        );
      }
    );
  }

  return (
    <Container>
      <Switch>
        {createRoutes()}
      </Switch>
    </Container>
  );
}

MainContainer.propTypes = {
  params: PropTypes.object,
  mainData: PropTypes.object,
};

export default MainContainer;
