import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from './styles.module.css'
import {Box} from "@material-ui/core";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Container>
      <Grid container className={styles.loginWrapper}>
        <Grid className={styles.loginForm} container>
          <Box p={5}>
            <Button variant={'outlined'}>Sign in with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
