import React from "react";
import PropTypes from "prop-types";
import { TableContainer, Table, TableCell, TableBody, TableRow, Paper  } from "@material-ui/core";
import { StyledTableCell, tableStyles } from "../../../../styles/tableStyles";
import { capitalize } from "../../../../utilities/helpers";

function ServantInfoTable(servant) {
  const styles = tableStyles();
  let np = servant.noblePhantasms;
  np = np[np.length - 1];

  function printCards(cardList) {
    return cardList.reduce((string, value) => {
      return `${string} ${capitalize(value)}`;
    }, "");
  }

  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table size="small">
        <TableBody>

          <TableRow className={styles.tableServantNameRow}>
            <TableCell colSpan={4} className={styles.tableServantName}>
              {servant.name}
            </TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={1}>ID</StyledTableCell>
            <StyledTableCell colSpan={1}>{servant.collectionNo}</StyledTableCell>
            <StyledTableCell colSpan={1}>Class</StyledTableCell>
            <StyledTableCell colSpan={1}>
              {capitalize(servant.className)}
            </StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={1}>Rarity</StyledTableCell>
            <StyledTableCell colSpan={1}>{servant.rarity}</StyledTableCell>
            <StyledTableCell colSpan={1}>Cost</StyledTableCell>
            <StyledTableCell colSpan={1}>{servant.cost}</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={1}>Gender</StyledTableCell>
            <StyledTableCell colSpan={1}>
              {capitalize(servant.gender)}
            </StyledTableCell>
            <StyledTableCell colSpan={1}>Type</StyledTableCell>
            <StyledTableCell colSpan={1}>
              {servant.type === "enemyCollectionDetail" ? "Enemy" : capitalize(servant.type)}
            </StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={1}>Max Level</StyledTableCell>
            <StyledTableCell colSpan={1}>{servant.lvMax}</StyledTableCell>
            <StyledTableCell colSpan={1}>Attribute</StyledTableCell>
            <StyledTableCell colSpan={1}>
              {capitalize(servant.attribute)}
            </StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={1}>Max Attack</StyledTableCell>
            <StyledTableCell colSpan={1}>{servant.atkMax}</StyledTableCell>
            <StyledTableCell colSpan={1}>Max HP</StyledTableCell>
            <StyledTableCell colSpan={1}>{servant.hpMax}</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={1}>Cards</StyledTableCell>
            <StyledTableCell colSpan={3}>
              {printCards(servant.cards)}
            </StyledTableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={4} className={styles.tableNPHeader}>
              Noble Phantasm
            </TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={4} className={styles.tableNPName}>
              {np.name}
            </StyledTableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={4} className={styles.tableNPDetails}>
              Details
            </TableCell>
          </TableRow>
        
          <TableRow>
            <StyledTableCell colSpan={4} className={styles.tableDetails}>
              {np.detail}
            </StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={1}>Card</StyledTableCell>
            <StyledTableCell colSpan={1}>{capitalize(np.card)}</StyledTableCell>
            <StyledTableCell colSpan={1}>Type</StyledTableCell>
            <StyledTableCell colSpan={1}>
              {`${np.rank} ${np.type}`}
            </StyledTableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

ServantInfoTable.propTypes = {
  servant: PropTypes.object,
};

export default ServantInfoTable;
