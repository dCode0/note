import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, Text } from "react-native";
import styled from "styled-components/native";
import firestore from "../storage/firestore";
import dayjs from "dayjs";
import useAuthentication from "../api/useAuthentication";
import { useEffect } from 'react';


const StyledButton = styled.TouchableOpacity`
color: white;
font-size: 16px;
padding: 10px;
width: 100px;
border-radius: 50px;
align-items: center;
margin: 10px 0;
background-color: orange;
   
  `;

const StyledView = styled.View`
    flex: 1;
    background-color: grey;

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
  background-color: grey;
`;

const NotePadView = ({navigation, route}) => {

    const [text, setText] = React.useState(null);
    const [content, setContent] = React.useState(null);
    const currentUser = useAuthentication();

    const {title, characters: characters_} = route.params || {}

    useEffect(()=> {
        if (title && characters_) {
            setText(title)
            setContent(characters_)
        }
    }, [title, characters_])

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
        setContent("")
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
            placeholderTextColor="orange"
            autoCapitalize='sentences'
        />

       <TextInput
            style={styles.input}
            onChangeText={setContent}
            value={content}
            placeholder="Start typing...."
            placeholderTextColor="orange"
            autoCapitalize='sentences'
            multiline={true} 
        />

        <StyledButton onPress={()=>handleSave(text, content)}>
        <Text style={styles.baseText}>
        Save
        </Text>
        </StyledButton>
        <StyledButton onPress={()=>clear()} title="New note"> 
        <Text style={styles.baseText}>
        New note
        </Text>
        </StyledButton>
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
      color:"orange",     
      borderColor: "orange",
      backgroundColor: "black",
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
        color:"orange",
        width: 300,
        borderColor: "orange",
        backgroundColor: "black",
      },
      baseText: {
        fontSize: 15,
        fontWeight: "bold",
      }
    })




export default NotePadView;