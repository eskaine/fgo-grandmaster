import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Zoom } from "@material-ui/core";
import makeStyles from "../../../styles/cardStyles";

function ServantCard(props) {
  const styles = makeStyles();
  const { region, servant, handleMouseEnter, handleMouseOut, openModal } = props;
  const [checked, setChecked] = useState(false);
  const servantID = `portrait-${servant.collectionNo}`; 

  // Check and retrieve available image
  let imageCard = Object.keys(servant.extraAssets.charaGraph.ascension);
  imageCard = servant.extraAssets.charaGraph.ascension[imageCard[0]];

  function handleClick(e) {
    openModal(servant.collectionNo);
  }

  useEffect(() => {
    window.requestAnimationFrame(() => {
        setChecked(true);
    });
  }, []);

  useEffect(() => {
      setTimeout(() => {
        window.requestAnimationFrame(() => {
          setChecked(true);
      });
     }, 2000);
   
    return() => {
          setChecked(false);   
    }
  }, [region]);

  return (
    <Zoom in={checked} timeout={{enter: 1000, exit: 500}}>
       <Card variant="outlined" id={servantID} className={`${styles.portraitCard} ${styles.card} card`} onMouseEnter={() => handleMouseEnter(servantID)} onMouseOut={() => handleMouseOut(servantID)} onClick={handleClick}>
          <CardActionArea>
            <CardMedia className={styles.portraitImage} image={imageCard} />
            <CardContent className={styles.portraitContent} >
              <Typography className={styles.portraitName}>{servant.name}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </Zoom>
  );
};

ServantCard.propTypes = {
  region: PropTypes.string,
  servant: PropTypes.object,
  handleMouseEnter: PropTypes.func,
  handleMouseOut: PropTypes.func,
  openModal: PropTypes.func,
};

export default ServantCard;