import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./styles.module.css";

const Loader = () => {
  return (
    <Container>
      <Grid container className={styles.loaderWrapper}>
        <Grid className={styles.loader} container>
          <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
