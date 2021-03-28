import React from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import styled from "styled-components/native";

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

    const [text, onChangeText] = React.useState(null);
    const [characters, onChangeCharacters] = React.useState(null);

  return (
    <StyledView>
      <StyledContainer>
        <StyledTitle>NotePad</StyledTitle>

        <TextInput
        style={styles.title}
        onChangeText={onChangeText}
        value={text}
        placeholder="Title your note"
        autoCapitalize='sentences'
        
      />

       <TextInput
        style={styles.input}
        onChangeCharacters={onChangeCharacters}
        value={characters}
        placeholder="Start typing...."
        autoCapitalize='sentences'
        multiline={true}
      />

        <FlatList
          style={styles.flatList}
          keyExtractor={(_, index) => String(index)}
          data={[]}
          renderItem={({ item, index }) => (
            <StyledNotePadItem key={index}>
              <StyledText>NotePad: {item.equation}</StyledText>
            </StyledNotePadItem>
          )}
        />
      </StyledContainer>
    </StyledView>
  );
};

// const styles = StyleSheet.create({
//   flatList: {
//     padding: 5,
//     borderRadius: 5,
//     width: "100%",
//   },
// });

// const styles = StyleSheet.create({
//     input: {
//       height: 40,
//       margin: 12,
//     },
//   });
  
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
      }
  })

export default NotePadView;