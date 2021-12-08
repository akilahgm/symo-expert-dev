import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA1zwjxoGy8Y17prH7bAsBo9IVvEeD01Z8",
  authDomain: "symo-expert.firebaseapp.com",
  projectId: "symo-expert",
  storageBucket: "symo-expert.appspot.com",
  messagingSenderId: "653997544539",
  appId: "1:653997544539:web:faa66386272b2031fc5b7e",
  measurementId: "G-HEQXW2X5E6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of cities from your database
async function getSymbols() {
  try {
    const symbolCol = collection(db, "symbols");
    const symbolSnapshot = await getDocs(symbolCol);
    const symbolList = symbolSnapshot.docs.map((doc) => doc.data());
    return symbolList;
  } catch (error) {
    console.log("**********ERROR*********", error);
  }
}

export { getSymbols };
