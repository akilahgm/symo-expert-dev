import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  setDoc,
  getFirestore,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";

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
async function getSymbols(value) {
  try {
    console.log("------STARTING------");
    const symbolCol = collection(db, "symbols");
    const symbolSnapshot = query(
      symbolCol,
      orderBy("name", "asc"),
      limit(value ? 300 : 20)
    );

    const querySnapshot = await getDocs(symbolSnapshot);
    const symbolList = querySnapshot.docs.map((doc) => doc.data());
    console.log("------RESPONSE------", symbolList.length);
    if (value) {
      const flitteredSymbol = symbolList.filter((obj) => {
        if (
          obj.name &&
          obj.name.toLowerCase().trim().startsWith(value.toLowerCase())
        ) {
          return obj;
        }
      });
      return flitteredSymbol;
    }
    return symbolList;
  } catch (error) {
    console.log("**********ERROR*********", error);
  }
}

export { getSymbols };
