import React, { FC, useEffect, useState } from "react";
import firestore from "../storage/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import HistoryList from "../components/HistoryList";
import useAuthentication from "../api/useAuthentication";


const NoteList = ({
  navigation,
}) => {
  const [notesHistory, setnotesHistory] = useState([]);

  const currentUser = useAuthentication()

  useEffect(() => {
    const onFocus = () => {
      if (currentUser) {
        firestore.getItem(currentUser.uid).then((querySnapshot) => {
          const historyObjects = [];
          querySnapshot.forEach((doc) => {
            historyObjects.push(doc.data());

            //console.log(historyObjects)
          });
  
          setnotesHistory(historyObjects);
        });
      }
    };

    navigation.addListener("focus", onFocus);

    return () => {
      navigation.removeListener("focus", onFocus);
    };
  }, [currentUser]);

  return (
    <HistoryList
    notesHistory={notesHistory}
      title={"Cloud History"}
    />
  );
};

export default NoteList;