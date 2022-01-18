
// =================
// adding Firebase to project
// import Afirebase from 'firebase';

const firebase = {
    apiKey: "AIzaSyBYD67JqdmGaAJpDyj8iLy1e5xXjB4rp-c",
    authDomain: "flashcards-ca11e.firebaseapp.com",
    projectId: "flashcards-ca11e",
    storageBucket: "flashcards-ca11e.appspot.com",
    messagingSenderId: "686642076264",
    appId: "1:686642076264:web:94d5224c8cf76aeb4779dd"
  };

 
// const firebaseApp = firebase.initializeApp(firebaseConfig);


// // for database 
// const db = firebaseApp.firestore();

// =================

 
window.onload = ()=>{ 
      init(); 
      collectionName = 'flashCards'; 
}; 
var db; 
function init(){ 
//   var firebaseApp = firebase.initializeApp(firebaseConfig); 
    
    var db = firebase.firestore(); 
}

// =================
// Firebase functions
 
function pullData(){ 
  // your standard - pulling data from Firebase 
  db.collection(collectionName).get().then((querySnapshot) => { 
    querySnapshot.forEach((doc) => { 
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`); 
    }); 
}); 
} 

function pushData(data){ 
  // data should be JSONstring, for beginning a data push to a new record 
  db.collection(collectionName).add(data).then((docRef) => { 
      console.log("Document written with ID:", docRef.id); 
  }) 
  .catch((error) => { 
      console.error("Error adding document: ", error); 
// =================
// adding Firebase to project
// import firebase from 'firebase';
 
// const firebaseConfig = {
//     apiKey: "AIzaSyBYD67JqdmGaAJpDyj8iLy1e5xXjB4rp-c",
//     authDomain: "flashcards-ca11e.firebaseapp.com",
//     projectId: "flashcards-ca11e",
//     storageBucket: "flashcards-ca11e.appspot.com",
//     messagingSenderId: "686642076264",
//     appId: "1:686642076264:web:94d5224c8cf76aeb4779dd"
//   };
 
 
// const firebaseApp = firebase.initializeApp(firebaseConfig);
 
 
// // for database 
// const db = firebaseApp.firestore();
 
// =================
 

