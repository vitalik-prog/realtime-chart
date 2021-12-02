import React from 'react';
import {NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styles from './styles.module.css'
import Grid from "@material-ui/core/Grid";
import {LOGIN_ROUTE} from "../helpers/constants";

const Navbar = () => {
  const user = false
  return (
    <AppBar position="static" color={"secondary"}>
      <Toolbar variant="dense" >
        <Grid className={styles.navbarWrapper} container justifyContent={"flex-end"}>
          {user
            ? (<Button className={styles.navbarButton} variant="outlined">Logout</Button>)
            : (
              <NavLink className={styles.navbarLink} to={LOGIN_ROUTE}>
                <Button className={styles.navbarButton} variant="outlined">Sign In</Button>
              </NavLink>
              )
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
