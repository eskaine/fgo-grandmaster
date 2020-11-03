import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import Navi from "./ui/Navi";
import { Button } from "@material-ui/core";
import { searchServants } from "../../utilities/helpers";
import navStyles from "../../styles/navStyles";
import styles from "../../styles/styles";

function NaviContainer({lang, params, mainData}) {
    const nStyles = navStyles();
    const primaryStyles = styles();
    const location = useLocation();

    const { baseParams } = params;
    const [ currentRoute, setCurrentRoute ] = useState(location.pathname);
    const [ searchValue, setSearchValue ] = useState("");
    const [ results, setResults ] = useState([]);

    function searchChange(e) {
      setSearchValue(e.target.value);
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

    useEffect((res) => {
      setResults(searchServants(searchValue, mainData));
    }, [searchValue]);

    return <Navi title={baseParams.title} lang={lang} regionList={baseParams.regions.list} search={{results, searchValue, searchChange}} genRoutes={genRoutes} />
};

NaviContainer.propTypes = {
  lang: PropTypes.object,
  params: PropTypes.object,
  modal: PropTypes.object,
  servantData: PropTypes.object,
  mainData: PropTypes.array,
};

export default NaviContainer;
