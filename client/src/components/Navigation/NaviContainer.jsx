import React, { useState } from 'react';
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import Navi from "./ui/Navi";
import { Button } from "@material-ui/core";
import navStyles from "../../styles/navStyles";
import styles from "../../styles/styles";

function NaviContainer({ params }) {
    const nStyles = navStyles();
    const primaryStyles = styles();
    const location = useLocation();

    const {baseParams, setBaseParams} = params;
    const [currentRoute, setCurrentRoute] = useState(location.pathname);

    function setRegion(region) {
        let {regions} = baseParams; 
        regions.default = region;
        setBaseParams( {...baseParams, regions});   
    }

    function genRoutes() {
      return baseParams.routes.map((route, i) => {
        let textColor = route.route === currentRoute ? nStyles.active : primaryStyles.textWhite;
    
        return (<NavLink key={`route-${i}`} to={route.route} className={nStyles.navLink} 
          onClick={() => setCurrentRoute(route.route)}>
          <Button className={`${nStyles.navButton} ${textColor}`}>{route.linkName}</Button>
        </NavLink>)
      });
    }

    return <Navi baseParams={baseParams} setRegion={setRegion} genRoutes={genRoutes} />
};

NaviContainer.propTypes = {
    params: PropTypes.object
};

export default NaviContainer;
