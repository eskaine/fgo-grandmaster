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
    height: "inherit",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  tableHeader:{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(1.8),
      paddingBottom: theme.spacing(1.8),
    },
  },
  tableHeaderCE:{
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
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
    fontSize: 12,
    height: 96,
    [theme.breakpoints.up('md')]: {
      height: 80
    },
  },
  tableNPTypeRow:{
    height: 61
  },
  tableNPType: {
    fontSize: 11
  },
  textCenter: {
    textAlign: "center"
  },
}));

export {
    StyledTableCell,
    tableStyles
};
