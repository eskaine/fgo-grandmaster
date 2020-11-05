import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, IconButton, Box } from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ServantCardTable from "./subCardsCom/ServantCardTable";
import EssenceCardTable from "./subCardsCom/EssenceCardTable";
import makeStyles from "../../../../styles/cardStyles";
import ImagePane from "./subCardsCom/ImagePane";

function ModalCard({ region, anchorEl, tabs, modalData }) {
  const {type, data} = modalData;
  const { isArtBtnActive, isInfoBtnActive } = tabs;
  const images = type === "/servants" ? data.extraAssets.charaGraph.ascension: data.extraAssets.charaGraph.equip;
  const imageKeys =  images && Object.keys(images);
  const [ index, setIndex ] = useState(0);
  const [ direction, setDirection ] = useState("left");
  const styles = makeStyles();

  function setSlide(inDir, outDir) {
    setDirection(outDir);
    setTimeout(() => {
      setDirection(inDir);
    }, 1200);   
  }

  function backward(e) {
    e.preventDefault();
    let indexTab = index - 1;
    indexTab = indexTab < 0 ? imageKeys.length - 1 : indexTab;
    setIndex(indexTab);
    setSlide("right", "left");
  }

  function forward(e) {
    e.preventDefault();
    let indexTab = index + 1;
    indexTab = indexTab === imageKeys.length ? 0 : indexTab;
    setIndex(indexTab);
    setSlide("left", "right");
  }

  function genImageTabs() {
    return images && imageKeys.map((key, i) => (
      <ImagePane i={i} key={i} index={index} image={images[key]} direction={direction} /> 
    ));
  }

  return (
    <Card variant="outlined" className={`${styles.modalCardBase} ${isArtBtnActive ? styles.modalCardTab2 : styles.modalCardTab1}`}>
      <Box display={(isArtBtnActive && anchorEl) && "none" } className={styles.modalAction}>
        <Box>
        {genImageTabs()}
        </Box>
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
      <CardContent display={(isInfoBtnActive && anchorEl) && "none" } className={styles.modalContent}>
        {type !== "/craftessences" ? 
          <ServantCardTable region={region} servant={data} /> : <EssenceCardTable region={region} ce={data} />
        }
      </CardContent>
    </Card>
  );
}

ModalCard.propTypes = {
  region: PropTypes.string,
  anchorEl: PropTypes.object,
  tabs: PropTypes.object,
  servant: PropTypes.object,
};

export default ModalCard;
