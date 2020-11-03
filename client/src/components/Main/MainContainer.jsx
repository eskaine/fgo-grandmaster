import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import { routedComponent } from "../helpers/helperComponents";

function MainContainer({lang, params, modal, mainData}) {

  function createRoutes() {
    return params.baseParams.routes.map(
      ({ Component, route, linkName, pageTitle }, i) => {
        return routedComponent(
          route, i, <Component region={lang.region} linkName={linkName} pageTitle={pageTitle} 
          params={params} mainData={mainData} openModal={modal.openModal} />
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
  lang: PropTypes.object,
  params: PropTypes.object,
  modal: PropTypes.object,
  mainData: PropTypes.array,
};

export default MainContainer;
