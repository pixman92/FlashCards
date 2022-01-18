
// =================


// const firebaseApp = firebase.initializeApp(firebaseConfig);



// =================
var db; 
function firebaseInit(){ 
        //   var firebaseApp = firebase.initializeApp(firebaseConfig); 
        
        // adding Firebase to project
// import Afirebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYD67JqdmGaAJpDyj8iLy1e5xXjB4rp-c",
    authDomain: "flashcards-ca11e.firebaseapp.com",
    projectId: "flashcards-ca11e",
    storageBucket: "flashcards-ca11e.appspot.com",
    messagingSenderId: "686642076264",
    appId: "1:686642076264:web:94d5224c8cf76aeb4779dd"
  };
  // // for database
  var firebaseApp = firebase.initializeApp(firebaseConfig)
  db = firebaseApp.firestore();
    // var db = firebase.firestore(); 
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
    });
}   
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
 
// =================
// basic adding email
function pushToEmail(newEmail){
    //use this function to push new Email to Firebase 
    pushData({'email': newEmail});
}
 
var userUID = "";
var savedUIDstr ="";
async function pullEmailGetUID(emailSearch){
    //pull - that uses ALL method
    // async function pull(_callback){
    var savedArrayUID = []; var savedArrayEmails = [];
    await db.collection(collectionName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            savedArrayUID.push(doc.id);
            savedArrayEmails.push(doc.data());
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    }).then(()=>{
        runningThroughSavedArrays(savedArrayEmails, savedArrayUID, emailSearch)
    });
}
 
function pullEmailGetUIDWhere(emailSearch){
    //pull that uses "WHERE" method
    var savedArrayUID = []; var savedArrayEmails = [];  
    db.collection(collectionName).where('email', '==', emailSearch).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            savedArrayUID.push(doc.id);
            savedArrayEmails.push(doc.data());
            // doc.data() is never undefined for query doc snapshots
 
            console.log(doc.id, " => ", doc.data());
        });
    }).then(()=>{
        runningThroughSavedArrays(savedArrayEmails, savedArrayUID, emailSearch)
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
 
var foundMe = false;
//helper function
function runningThroughSavedArrays(savedArrayEmails, savedArrayUID, emailSearch){
    //function that takes the arrays, and runs through them
    //to find the corresponding email
    savedArrayEmails.forEach((item, index)=>{
        // console.log(item) 
        // console.log(item.email)
        // console.log('index', index);
        
        if(item.email==emailSearch){
            console.log('Found at ', index, ' index');
            console.log( '=====\n', savedArrayUID[index]);
 
            savedUIDstr = savedArrayUID[index];
            foundMe = true;
        }
        if(index>=savedArrayEmails.length-1 && foundMe==false){
            console.log('not found');
        }
    });
}
 
 
//=================
var wholeDocDataPull = [];
function pullDataBasedOnUID(){
    //pulls based on a found 'savedUIDstr'
    try{
        db.collection(collectionName).doc(savedUIDstr).get().then(doc =>{
            console.log(doc.data());
            wholeDocDataPull.push(doc.data());
            console.log('...saved to wholeDocDataPull...');
        });
    }catch(err){
        console.log('Errored out at, ', err);
    }
}
 
function addToFirebaseBasedOnUID(objName, dataString){
    //pushes custom obj - using <objName> & <dataString>
    // to make custom obj, that is pushed to a record - found by UID
    // using previous <pullEmailGetUID()> function


    // NOTE: merge:false - meaning - donwload WHOLE string, update it and push again, as in new string
    var obj = {};
    // obj[0] = objName;
    obj[objName.toString()] = dataString;
    
    // obj['test'] = JSON.stringify(obj['test']);
    try{
        db.collection(collectionName).doc(savedUIDstr).set(obj, {merge: true});
 
    }catch(err){
        console.log('Errored out, ', err);
    }
 
}
 
// ==================================
var arrayMe = ["mainHomePage", "dynamicURLPage"];
function hide() {
    for (var i = 0; i < arrayMe.length; i++) {
        document.querySelector('.' + arrayMe[i]).style.display = 'none';
    }
 
}
 
function show(classIt) {
    document.querySelector("." + classIt).style.display = 'block';
}
 
