import React from "react";
import PropTypes from "prop-types";
import { TableContainer, Table, TableCell, TableBody, TableRow, Paper  } from "@material-ui/core";
import { StyledTableCell, tableStyles } from "../../../../../styles/tableStyles";

function EssenceCardTable({ region, ce }) {
  const styles = tableStyles();

  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table size="medium">
        <TableBody>

          <TableRow>
            <TableCell colSpan={4} className={`${styles.tableHeader} ${styles.tableHeaderCE}`}>
              {ce.name}
            </TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>{ce.collectionNo}</StyledTableCell>
            <StyledTableCell>Rarity</StyledTableCell>
            <StyledTableCell>{ce.rarity}</StyledTableCell>
          </TableRow>

          <TableRow>
          <StyledTableCell>Max Level</StyledTableCell>
            <StyledTableCell>{ce.lvMax}</StyledTableCell>
            <StyledTableCell>Cost</StyledTableCell>
            <StyledTableCell>{ce.cost}</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Base Attack</StyledTableCell>
            <StyledTableCell>{ce.atkBase}</StyledTableCell>
            <StyledTableCell>Base HP</StyledTableCell>
            <StyledTableCell>{ce.hpBase}</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Max Attack</StyledTableCell>
            <StyledTableCell>{ce.atkMax}</StyledTableCell>
            <StyledTableCell>Max HP</StyledTableCell>
            <StyledTableCell>{ce.hpMax}</StyledTableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

EssenceCardTable.propTypes = {
  region: PropTypes.string,
  ce: PropTypes.object,
};

export default EssenceCardTable;