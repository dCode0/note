import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import firebase from "firebase";
import "./firebase";
import { FIREBASE_APP } from "./value";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen";
import NoteScreen from "./screen/NoteScreen";
import NoteListScreen from "./screen/NoteListScreen";
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const app = firebase.app(FIREBASE_APP);

    console.log(app.name)
    firebase
      .auth(app)
      .signInAnonymously()
      .then(() => {
        setIsAuthenticated(true);
      });
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Home"}
        tabBarOptions={{
          activeTintColor: "orange",
          inactiveTintColor: "white",
          style: { backgroundColor: "#121212", borderTopColor: "#121212" },
          labelStyle: {
            fontSize: 10,
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Note Pad" component={NoteScreen} />
        <Tab.Screen name="Note List" component={NoteListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
