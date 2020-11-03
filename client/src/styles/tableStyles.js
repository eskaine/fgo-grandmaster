import { TableCell } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.common.lightblue,
          color: theme.palette.common.white
        },
        '&:nth-of-type(even)': {
            textAlign: "center",
        },
    },
    body: {
      width: "25%",
      fontSize: 14,
    },
}))(TableCell);

const tableStyles = makeStyles((theme) => ({
  tableContainer: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  tableServantName:{
    padding: "15px 0",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  tableNPHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  tableNPName: {
    backgroundColor: `${theme.palette.common.white}  !important`,
    color: `${theme.palette.common.black}  !important`,
    textAlign: "center",
  },
  tableNPDetails: {
    backgroundColor: theme.palette.common.lightblue,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  tableDetails: {
    backgroundColor: `${theme.palette.common.white}  !important`,
    color: `${theme.palette.common.black}  !important`,
    fontSize: 14,
    height: 120
  },
  textCenter: {
    textAlign: "center"
  },
}));

export {
    StyledTableCell,
    tableStyles
};
