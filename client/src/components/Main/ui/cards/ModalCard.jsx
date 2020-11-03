import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, IconButton, Box, Slide } from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import CardTable from "./CardTable";
import makeStyles from "../../../../styles/cardStyles";

function ModalCard({ region, servant }) {
  const styles = makeStyles();
  const imageKeys = Object.keys(servant.extraAssets.charaGraph.ascension);
  const [key, setKey] = useState(0);
  const [checked, setChecked] = useState(true);
  const [direction, setDirection] = useState("left");

  function setSlide(inDir, outDir) {
    setDirection(outDir);
    setChecked(false);
    setTimeout(() => {
      setDirection(inDir);
      setChecked(true);
    }, 1200);   
  }

  function backward(e) {
    e.preventDefault();
    let keyValue = key - 1;
    keyValue = keyValue < 0 ? imageKeys.length - 1 : keyValue;
    setKey(keyValue);
    setSlide("right", "left");
  }

  function forward(e) {
    e.preventDefault();
    let keyValue = key + 1;
    keyValue = keyValue === imageKeys.length ? 0 : keyValue;
    setKey(keyValue);
    setSlide("left", "right");
  }

  return (
    <Card variant="outlined" className={styles.modalCard}>
      <Box className={styles.modalAction}>
        <Slide direction={direction} in={checked} mountOnEnter unmountOnExit>
          <CardMedia className={styles.modalImage}
            image={servant.extraAssets.charaGraph.ascension[imageKeys[key]]} />
        </Slide>
        <Box display={imageKeys.length === 1 && "none"}
          className={`${styles.imageScrollPos} arrows-overlay`} >
          <Box className={styles.imageScrollFlex}>
            <IconButton className="arrows-btn" onClick={backward}>
              <ArrowBackIosRoundedIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton className="arrows-btn" onClick={forward}>
              <ArrowForwardIosRoundedIcon style={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <CardContent className={styles.modalContent}>
        <CardTable region={region} servant={servant} />
      </CardContent>
    </Card>
  );
}

ModalCard.propTypes = {
  region: PropTypes.string,
  servant: PropTypes.object,
};

export default ModalCard;
