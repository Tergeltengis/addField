const firebase = require("firebase/app");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDlPm8aGM1RyQwG1SkpMM2JztvrU4Gumu8",
  authDomain: "github-action-b3f15.firebaseapp.com",
  projectId: "github-action-b3f15",
  storageBucket: "github-action-b3f15.appspot.com",
  messagingSenderId: "543670318062",
  appId: "1:543670318062:web:8f7e4457573ec22b0094ff",
  measurementId: "G-YRGPGQN80T",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const addField = async () => {
  // change collection name before run
  const productsRef = db.collection("cities");
  const snapshot = await productsRef.get();
  await Promise.all(
    // change or add field name before run
    snapshot.docs.map((doc) => doc.ref.update({ createdAt: new Date() }))
  );
};
addField();
