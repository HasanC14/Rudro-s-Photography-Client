import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_KRicLmcBBQlPEy-Cy1AHgrCG-J4IuvA",
  authDomain: "roudro-photography.firebaseapp.com",
  projectId: "roudro-photography",
  storageBucket: "roudro-photography.appspot.com",
  messagingSenderId: "706408125349",
  appId: "1:706408125349:web:b6879dc263305e11cb8e4c",
};

const app = initializeApp(firebaseConfig);
export default app;
