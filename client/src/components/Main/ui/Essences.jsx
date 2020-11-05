import React, { useState, useEffect } from "react";
import { withData } from "../../helpers/helperComponents";


function Essences(props) {
    const { region, pageTitle, showList, pageLength } = props;
    const [ page, setPage ] = useState(0);

    const newProps = {
        showList,
        title: pageTitle,
        page: {
          page,
          setPage,
          pageLength,
        }
      }

  useEffect(() => {
    setPage(0);

    return () =>{
      window.location.reload();
    }
  }, [region]);

    return (
        <React.Fragment>
            {withData(newProps)}
        </React.Fragment>
    )
};

export default Essences;
