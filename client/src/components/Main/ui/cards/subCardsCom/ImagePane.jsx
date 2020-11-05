import React from 'react';
import PropTypes from "prop-types";
import { Box, CardMedia, Slide } from "@material-ui/core";
import makeStyles from "../../../../../styles/cardStyles";

function ImagePane({i, index, image, direction}) {
    const styles = makeStyles();

    return (
        <Box key={i} role="tabpanel" hidden={index !== i}> 
        {index === i && (
          <Slide direction={direction} in={true}>
            <CardMedia key={i} className={styles.modalImage} image={image} />
          </Slide>
        )}
      </Box>
    )
};

ImagePane.propTypes = {
    i: PropTypes.number,
    index: PropTypes.number,
    image: PropTypes.string,
    direction: PropTypes.string,
  };

export default ImagePane;