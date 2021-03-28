import { useEffect, useState } from "react";
import * as firebase from "firebase";
import { FIREBASE_APP } from "../value";

export const useAuthentication = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const app = firebase.app(FIREBASE_APP);
    const user = firebase.auth(app).currentUser;

    if (user) {
      setCurrentUser(user);
    }
  }, []); 

  return currentUser;
};

export default useAuthentication;
