import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import Navi from "./ui/Navi";
import { Button } from "@material-ui/core";
import { searchServants } from "../../utilities/helpers";
import navStyles from "../../styles/navStyles";
import styles from "../../styles/styles";

function NaviContainer({lang, params, modal, mainData}) {
    const nStyles = navStyles();
    const primaryStyles = styles();
    const location = useLocation();
    const history = useHistory();

    const { baseParams } = params;
    const [ currentRoute, setCurrentRoute ] = useState(location.pathname);
    const [ searchValue, setSearchValue ] = useState("");
    const [ results, setResults ] = useState([]);

    const props = {
      lang,
      title: baseParams.title,  
      regionList: baseParams.regions.list,
      search: {results, searchValue, searchChange},
      openModal: modal.openModal,
      genRoutes
    };

    function searchChange(e) {
      setSearchValue(e.target.value);
    }

    function genRoutes() {
      return baseParams.routes.map((route, i) => {
        let textColor = route.route === currentRoute ? nStyles.active : (history.action === "REPLACE" && route.linkName === "Home" ? nStyles.active : primaryStyles.textWhite);

        return (<NavLink key={`route-${i}`} to={route.route} className={nStyles.navLink} 
          onClick={() => setCurrentRoute(route.route)}>
          <Button className={`${nStyles.navButton} ${textColor}`}>{route.linkName}</Button>
        </NavLink>)
      });
    }

    useEffect(() => {
      if(searchValue === "") {
        setResults([]);
      }
      setResults(searchServants(searchValue, mainData));
    }, [searchValue]);

    return <Navi {...props} />
};

NaviContainer.propTypes = {
  lang: PropTypes.object,
  params: PropTypes.object,
  modal: PropTypes.object,
  servantData: PropTypes.object,
  mainData: PropTypes.array,
};

export default NaviContainer;
