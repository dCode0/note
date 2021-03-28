import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, Text } from "react-native";
import styled from "styled-components/native";
import firestore from "../storage/firestore";
import dayjs from "dayjs";
import useAuthentication from "../api/useAuthentication";

const StyledView = styled.View`
    flex: 1;
`
const StyledTitle = styled.Text`
  font-size: 32px;
  color: black;
  font-weight: bold;
`;

const StyledText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  margin-left: 15px;
  font-weight: bold;
  color: orange;
`;

const StyledContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 15px 15px 0;
  margin-top: 25px;
  align-items: center;
`;

const NotePadView = () => {

    const [text, setText] = React.useState(null);
    const [characters, setCharacters] = React.useState(null);
    const currentUser = useAuthentication();

    const handleSave = (title, content) => {
        if (currentUser) {
            firestore.setItem({
                title,
                characters: content,
                timestamp: dayjs().unix(),
                userId: currentUser.uid
            }).then(()=>{
                
            })
        }
        
      };

     const clear = () => {
        // return the initial state
        setText("")
        setCharacters("")
            // React.useState(null)
      };

  return (
    <StyledView>
      <StyledContainer>
        <StyledTitle>NotePad</StyledTitle>

        <TextInput
            style={styles.title}
            onChangeText={setText}
            value={text}
            placeholder="Title your note"
            autoCapitalize='sentences'
        />

       <TextInput
            style={styles.input}
            onChangeText={setCharacters}
            value={characters}
            placeholder="Start typing...."
            autoCapitalize='sentences'
            multiline={true}
        />

        <Button style={styles.button} onPress={()=>handleSave(text, characters)} title="Save"> </Button>
        <Button onPress={()=>clear()} title="New note"> </Button>
      </StyledContainer>
    </StyledView>
  );
};

  
const styles = StyleSheet.create({

    title: {
      paddingTop: 5,
      justifyContent: "center",
      alignItems: "center",
      borderRightWidth: 3,
      borderTopWidth: 3,
      borderLeftWidth: 3,
      borderBottomWidth:3,
      height: 50,
      width: 300,      
      borderColor: "black",
    },
    input: {
        paddingTop: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 3,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderBottomWidth:3,
        height: 500,
        width: 300,
        borderColor: "black",
      },
      button: {
        alignItems: "center",
        backgroundColor: "black",
        padding: 10
      }
    })

const StyledButton = styled.TouchableOpacity`
    border-radius: 20px;
    width: 50%;
    font-size: 35px;
    background-color: black;
    padding: 5px;
   
  `;


export default NotePadView;