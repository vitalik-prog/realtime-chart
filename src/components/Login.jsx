import React, {useContext} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from './styles.module.css'
import {Box} from "@material-ui/core";
import Button from "@mui/material/Button";
import {Context} from "../index";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const  { auth } = useContext(Context)

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider)
  }

  return (
    <Container>
      <Grid container className={styles.loginWrapper}>
        <Grid className={styles.loginForm} container>
          <Box p={5}>
            <Button onClick={handleLogin} variant={'outlined'}>Sign in with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
