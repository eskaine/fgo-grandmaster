import React, { useEffect, useState } from "react";
import { useLocation }from "react-router-dom";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Slide, Fade, Box } from '@material-ui/core';
import { capitalize} from "../../../../utilities/helpers";
import makeStyles from "../../../../styles/cardStyles";

function ProfileCard(props) {
  const loc = useLocation();
  const { dataItem, region, page, handleMouseEnter, handleMouseOut, openModal } = props;
  const dataItemID = `${loc.pathname.substr(1,)}-${dataItem.collectionNo}`; 
  const [checked, setChecked] = useState(false);
  const styles = makeStyles();
  const [textStyles] = useState(styles[region]);

  function handleClick(e) {
    openModal({
      path: loc.pathname,
      itemID: dataItem.collectionNo
    })
  };

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setChecked(true);
    });
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setChecked(true);
    });
  }, [region]);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setChecked(true);
    });
  }, [page]);

  return (
    <Slide direction="left" in={checked} timeout={1200} mountOnEnter unmountOnExit>
      <Box>
        <Fade in={checked} timeout={1200}>
          <Card variant="outlined" id={dataItemID} className={`${styles.profileCard} ${styles.card} card`} onMouseEnter={() => handleMouseEnter(dataItemID)} onMouseOut={() => handleMouseOut(dataItemID)} onClick={handleClick}>
            <CardActionArea className={styles.profileLayout}>
              <CardMedia className={styles.profileImage} image={dataItem.face} title={dataItem.name} />
              <CardContent className={styles.profileContent}>
                <Typography className={styles.profileHeader}>
                  <span>{dataItem.collectionNo}</span>
                  <span className={styles.textRight}>{dataItem.className && capitalize(dataItem.className)}</span>
                </Typography>
                <Typography className={`${styles.profileName} ${textStyles}`}>
                  {dataItem.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Fade>
      </Box>
    </Slide>
  );
};

ProfileCard.propTypes = {
  dataItem: PropTypes.object,
  region: PropTypes.string,
  page: PropTypes.number,
  handleMouseEnter: PropTypes.func,
  handleMouseOut: PropTypes.func,
  openModal: PropTypes.func,
};

export default ProfileCard;