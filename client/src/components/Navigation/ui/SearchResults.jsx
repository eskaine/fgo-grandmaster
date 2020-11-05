import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { MenuList, MenuItem, Paper, Grow, Popper } from "@material-ui/core";

function SearchResults({ search, open, anchorEl, handlers }) {
  const { openModal, handleClose, handleListKeyDown } = handlers;

  function handleResultClick(e, servantID) {
    search.searchChange({target: {value: ""}});
    handleClose(e);
    openModal({
      path: "/servants",
      itemID: servantID
    });
  }

  function showResults() {
    return search.results.map((servant, i) => (
      <MenuItem key={i} className="search-result" onClick={(e) => handleResultClick(e, servant.id)}>
        {servant.name}
      </MenuItem>
    ));
  }

  useEffect(() => {
    if (search.searchValue === "" && open) {
      handleClose(false);
    }
  }, [search.searchValue]);

  return (
    <Popper open={open} anchorEl={anchorEl} role={undefined} placement="top-start" transition disablePortal>
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList onKeyDown={handleListKeyDown}>
                {showResults()}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

SearchResults.propTypes = {
  search: PropTypes.object,
  open: PropTypes.bool,
  anchorEl: PropTypes.object,
  handlers: PropTypes.object
};

export default SearchResults;


