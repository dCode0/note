import * as firebase from "firebase";
import { firestore } from "firebase";
import { BASE_COLLECTION, FIREBASE_APP } from "../value";

class Firestore {
  key;

  constructor(key) {
    this.key = key;
  }

  getItem(
    userId
  ) {
    const app = firebase.app(FIREBASE_APP);

    return firestore(app)
      .collection(this.key)
      .where("userId", "==", userId)
      .get();
  }

  setItem(value) {
    const app = firebase.app(FIREBASE_APP);

    return firestore(app).collection(this.key).add(value);
  }
}

export default new Firestore(BASE_COLLECTION);