import React from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import makeStyles from "../../../styles/cardStyles";

function ServantCard(props) {
  const styles = makeStyles();
  const { servant, handleMouseEnter, handleMouseOut } = props;
  const servantID = `portrait-${servant.id}`; 

  // Check and retrieve available image
  let imageCard = servant.extraAssets.charaGraph.ascension[1];
  imageCard = !imageCard ? servant.extraAssets.charaGraph.ascension[0] : imageCard;

  return (
    <Card variant="outlined" id={servantID} className={`${styles.portraitCard} ${styles.card}`} onMouseEnter={() => handleMouseEnter(servantID)} onMouseOut={() => handleMouseOut(servantID)}>
      <CardActionArea>
        <CardMedia className={styles.portraitImage} image={imageCard} title={servant.name} />
        <CardContent className={styles.portraitContent} >
          <Typography className={styles.portraitName}>{servant.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ServantCard.propTypes = {
  servant: PropTypes.object
};

export default ServantCard;


