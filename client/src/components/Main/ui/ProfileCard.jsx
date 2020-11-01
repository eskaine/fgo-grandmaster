import React, {useEffect, createRef, useState} from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Slide, Fade, Box } from '@material-ui/core';
import { capitalize} from "../../../utilities/helpers";
import makeStyles from "../../../styles/cardStyles";

function ProfileCard(props) {
  const styles = makeStyles();
  const { servant, region, page, handleMouseEnter, handleMouseOut } = props;
  const servantID = `profile-${servant.id}`; 
  const [checked, setChecked] = useState(false);

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
          <Card variant="outlined" id={servantID} className={`${styles.profileCard} ${styles.card} card`} onMouseEnter={() => handleMouseEnter(servantID)} onMouseOut={() => handleMouseOut(servantID)}>
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
        </Fade>
      </Box>
    </Slide>
  );
};

ProfileCard.propTypes = {
  servant: PropTypes.object,
  region: PropTypes.string,
  handleMouseEnter: PropTypes.object,
  handleMouseOut: PropTypes.object,
};

export default ProfileCard;