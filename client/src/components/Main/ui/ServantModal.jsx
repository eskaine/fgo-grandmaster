import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Modal, Backdrop, Fade, Zoom, ButtonGroup, Button } from "@material-ui/core";
import ModalCard from "./cards/ModalCard";
import makeStyles from "../../../styles/cardStyles";

function ServantModal({ region, state, closeModal, servantData }) {
  const styles = makeStyles();
  const [isArtBtnActive, setIsArtBtnActive] = useState(false);
  const [isInfoBtnActive, setIsInfoBtnActive] = useState(true);
  const anchorRef = useRef(null);

  function handleClick() {
    setIsArtBtnActive(!isArtBtnActive);
    setIsInfoBtnActive(!isInfoBtnActive);
  }

  function modalTabs(state, tabText) {
    let classes = state ?  { root: styles.primaryBtn } : { root: styles.disabledBtn };


  return state ? <Button classes={classes} onClick={handleClick}>{tabText}</Button> : <Button disabled classes={classes} onClick={handleClick}>{tabText}</Button>;
  }

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={state}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={state} timeout={{ enter: 1200, exit: 1000 }}>
          <Box>
            <Zoom in={state} timeout={1200}>
              <Box>
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  ref={anchorRef}
                  className={styles.mobileModalNav}
                  aria-label="contained primary button group"
                >
                  {modalTabs(isArtBtnActive, "Ascension Art")}
                  {modalTabs(isInfoBtnActive, "Servant Info")}

                </ButtonGroup>
                <ModalCard region={region} anchorEl={anchorRef.current} tabs={{isArtBtnActive, isInfoBtnActive}} servant={servantData} />
              </Box>
            </Zoom>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

ServantModal.propTypes = {
  region: PropTypes.string,
  state: PropTypes.bool,
  closeModal: PropTypes.func,
  servantData: PropTypes.object,
};

export default ServantModal;
