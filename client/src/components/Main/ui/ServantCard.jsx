import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Zoom } from "@material-ui/core";
import makeStyles from "../../../styles/cardStyles";

function ServantCard(props) {
  const styles = makeStyles();
  const { servant, handleMouseEnter, handleMouseOut } = props;
  const [checked, setChecked] = useState(false);
  const servantID = `portrait-${servant.id}`; 

  // Check and retrieve available image
  let imageCard = servant.extraAssets.charaGraph.ascension[1];
  imageCard = !imageCard ? servant.extraAssets.charaGraph.ascension[0] : imageCard;

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setChecked(true);
    });
  }, []);

  return (
    <Zoom in={checked} timeout={2000}>
      <Card variant="outlined" id={servantID} className={`${styles.portraitCard} ${styles.card} card`} onMouseEnter={() => handleMouseEnter(servantID)} onMouseOut={() => handleMouseOut(servantID)}>
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
  servant: PropTypes.object
};

export default ServantCard;


