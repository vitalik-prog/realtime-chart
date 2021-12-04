import React, {useContext, useEffect, useState} from 'react';
import { collection, Timestamp, onSnapshot, query, addDoc, orderBy  } from 'firebase/firestore';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Grid from "@mui/material/Grid";
import styles from "./styles.module.css";
import {Box} from "@material-ui/core";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";

const Chat = () => {
  const { auth, db } = useContext(Context)
  const [ user ] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    let newMessages = []
    const q = query(collection(db, "messages"), orderBy('createdAt'))
    const getSnapShot = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        newMessages.push({ id: doc.id, ...doc.data() })
      })
      setMessages(newMessages)
      newMessages=[]
    })

    return () => getSnapShot()
  }, []);

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      userId: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: Timestamp.now()
    })
    setValue('')
  }

  return (
    <Container>
      <Grid container className={styles.loginWrapper}>
        <Box className={styles.messages}>
          {messages.map(message =>
            <Box
              className={user.uid === message.userId ? styles.owner : styles.notOwner}
              key={message.id}
            >
              <Grid container>
                <Avatar src={message.photoURL}/>
                <Box>{message.displayName}</Box>
              </Grid>
              <Box>{message.text}</Box>
            </Box>
          )}
        </Box>
        <Grid container className={styles.inputArea}>
          <TextField
            variant={'outlined'}
            rowsMax={2}
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} variant={'outlined'}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
