import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDubu4Ozdz_MmZgnV3i-eEm50dIFQAoWgs",
  authDomain: "catch-of-the-daisy.firebaseapp.com",
  databaseURL: "https://catch-of-the-daisy.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
