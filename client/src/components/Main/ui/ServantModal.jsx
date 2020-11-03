import React from 'react';
import PropTypes from "prop-types";
import { Box, Modal, Backdrop, Fade, Zoom } from '@material-ui/core';
import ModalCard from "./cards/ModalCard";
import makeStyles from "../../../styles/cardStyles";

function ServantModal({ state, closeModal, servantData}) {
  const styles = makeStyles();

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={state} onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}} >
        <Fade in={state} timeout={{enter: 1200, exit: 1000}}>
          <Box>
            <Zoom in={state} timeout={1200}>
              <ModalCard servant={servantData} />
            </Zoom>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

ServantModal.propTypes = {
  state: PropTypes.bool,
  closeModal: PropTypes.func,
  servantData: PropTypes.object,
};

export default ServantModal;
