import React, { FC, useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import * as firebase from "firebase";
import { FIREBASE_APP } from "../value";
import {StyleSheet, View} from 'react-native'
import styled from 'styled-components/native'



function HomeScreen() {

    // const currentUser = useAuthentication();
  
    useEffect(() => {
      //   load data
    
    }, []);
  
    useEffect(() => {
      // save data
      
    },);

  
    // return (
    //   <View style={styles.container}>
    //     <StyledButton onPress={() => getRandomNumber()}>
    //       <StyledText>Get a new random number</StyledText>
    //     </StyledButton>
  
    //     <StyledRandomText>{numbers[0]}</StyledRandomText>
  
    //     <StyledPreviousResults>
    //       <StyledRandomText>Previous Numbers</StyledRandomText>
  
    //       {numbers.slice(0, 10).map((n, index) => (
    //         <Text key={index}>{n}</Text>
    //       ))}
    //     </StyledPreviousResults>
  
    //     <StatusBar style="auto" />
    //   </View>
    // );


const StyledText = styled.Text`
color: orange;
text-align: center;
font-weight: bold;
font-size: 18px;
`;

    return <View style={styles.container}><StyledText>Get started</StyledText></View>
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default HomeScreen;
