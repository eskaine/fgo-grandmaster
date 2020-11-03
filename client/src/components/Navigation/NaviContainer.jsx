import React, { useState } from 'react';
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import Navi from "./ui/Navi";
import { Button } from "@material-ui/core";
import navStyles from "../../styles/navStyles";
import styles from "../../styles/styles";

function NaviContainer({lang, params}) {
    const nStyles = navStyles();
    const primaryStyles = styles();
    const location = useLocation();

    const { baseParams } = params;
    const [ currentRoute, setCurrentRoute ] = useState(location.pathname);

    function genRoutes() {
      return baseParams.routes.map((route, i) => {
        let textColor = route.route === currentRoute ? nStyles.active : primaryStyles.textWhite;
    
        return (<NavLink key={`route-${i}`} to={route.route} className={nStyles.navLink} 
          onClick={() => setCurrentRoute(route.route)}>
          <Button className={`${nStyles.navButton} ${textColor}`}>{route.linkName}</Button>
        </NavLink>)
      });
    }

    return <Navi title={baseParams.title} lang={lang} regionList={baseParams.regions.list} genRoutes={genRoutes} />
};

NaviContainer.propTypes = {
  lang: PropTypes.object,
  params: PropTypes.object
};

export default NaviContainer;
