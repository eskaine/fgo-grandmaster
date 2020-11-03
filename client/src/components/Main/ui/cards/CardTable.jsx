import React from "react";
import PropTypes from "prop-types";
import { TableContainer, Table, TableCell, TableBody, TableRow, Paper  } from "@material-ui/core";
import makeStyles from "../../../../styles/styles";
import { StyledTableCell, tableStyles } from "../../../../styles/tableStyles";
import { capitalize } from "../../../../utilities/helpers";

function ServantInfoTable(servant) {
  const styles = tableStyles();
  const gStyles =makeStyles();
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

          <TableRow>
            <TableCell colSpan={4} className={styles.tableServantName}>
              {servant.name}
            </TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>{servant.collectionNo}</StyledTableCell>
            <StyledTableCell>Class</StyledTableCell>
            <StyledTableCell>
              {capitalize(servant.className)}
            </StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Rarity</StyledTableCell>
            <StyledTableCell>{servant.rarity}</StyledTableCell>
            <StyledTableCell>Cost</StyledTableCell>
            <StyledTableCell>{servant.cost}</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>
              {capitalize(servant.gender)}
            </StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>
              {servant.type === "enemyCollectionDetail" ? "Enemy" : capitalize(servant.type)}
            </StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Max Level</StyledTableCell>
            <StyledTableCell>{servant.lvMax}</StyledTableCell>
            <StyledTableCell>Attribute</StyledTableCell>
            <StyledTableCell>
              {capitalize(servant.attribute)}
            </StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Max Attack</StyledTableCell>
            <StyledTableCell>{servant.atkMax}</StyledTableCell>
            <StyledTableCell>Max HP</StyledTableCell>
            <StyledTableCell>{servant.hpMax}</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Cards</StyledTableCell>
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
            <StyledTableCell>Card</StyledTableCell>
            <StyledTableCell>{capitalize(np.card)}</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>{np.rank}<br />{np.type}</StyledTableCell>
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
