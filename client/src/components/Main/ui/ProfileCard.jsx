import React from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { capitalize} from "../../../utilities/helpers";
import makeStyles from "../../../styles/cardStyles";

function ProfileCard(props) {
  const styles = makeStyles();
  const { servant, region, handleMouseEnter, handleMouseOut } = props;
  const servantID = `profile-${servant.id}`; 

  return (
    <Card variant="outlined" id={servantID} className={`${styles.profileCard} ${styles.card}`} onMouseEnter={() => handleMouseEnter(servantID)} onMouseOut={() => handleMouseOut(servantID)}>
      <CardActionArea className={styles.profileLayout}>
        <CardMedia className={styles.profileImage} image={servant.face} title={servant.name} />
        <CardContent className={styles.profileContent}>
          <Typography className={styles.profileHeader}>
            <span>{servant.collectionNo}</span>
            <span className={styles.textRight}>{capitalize(servant.className)}</span>
          </Typography>
          <Typography className={`${styles.profileName} ${styles[region]}`}>
          {servant.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProfileCard.propTypes = {
  servant: PropTypes.object,
  region: PropTypes.string,
};

export default ProfileCard;
