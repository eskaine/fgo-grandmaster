import React from "react";
import { Box, Container, Typography, Link } from "@material-ui/core";
import makeStyles from "../../../styles/styles";

function Footer() {
  const styles = makeStyles();

  return (
    <Box className={styles.footer}>
      <Container className={styles.flexRowBetween}>
        <Typography display="inline" className={styles.textWhite}>
          <Link href="https://github.com/eskaine/fgo-grandmaster" className={`${styles.textWhite} ${styles.cursor}`}>
          eskaine
          </Link>
          &nbsp;© FGO Grandmaster 2020
        </Typography>
        <Typography display="inline" className={styles.textWhite}>
          <Link href="https://www.fate-go.jp/" className={`${styles.textWhite} ${styles.cursor}`}>
            Fate/Grand Order
          </Link>
           &nbsp;© TYPE-MOON
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; //