import React from "react";
import PropTypes from "prop-types";
import { Box, Menu, Button} from "@material-ui/core";
import makeStyles from "../../../styles/navStyles";

function Region({ region, anchorEl, handlers }) {
  const { regions, genRegions } = region;
  const { handleClick, handleClose } = handlers;
  const styles = makeStyles();  

  return (
    <Box className={styles.region}>
      <Button className={styles.regionText} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Region: {regions.default}
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {genRegions()}
      </Menu>
    </Box>
  );
}

Region.propTypes = {
  region: PropTypes.object,
  anchorEl: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.bool,
  ]),
  handlers: PropTypes.object
};

export default Region;