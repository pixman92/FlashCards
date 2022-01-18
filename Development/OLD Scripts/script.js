window.onload = ()=>{

  makeInstance();
  
//   addSomeData([['0', [{'author':'sam'}, {'sharedWith': 'timmy'}]], ['1', {'name?':'timmy Jones'}]]);  
//   makeMoreCard({'live here?': 'nope!!'});
//   makeMoreCard({'do you believe?': 'nope!'});

  
  //  0th index - saved for Author and Email list - of shared 
//   addSomeData([['author', 'sam'], ['sharedWith',  'timmy']]);
  
//   makeMoreCard(['live here?',  'nope!!']);

//   makeMoreCard(['do you believe?',  'nope!']);
  
  state();

}
// ======== Making A Dynamic Deck=========
function state(){
  makeInstanceWithAuthor('leo', ['sam@gmail.com', 'tim@gmail.com', 'tom@gmail.com']);
  makeMoreCard(['space?', 'none left']);
  
}

// ========Making Decks=========

var myJSON;

function makeInstance(){
  myJSON = new JSON_Instance();
}


// creates new myJSON Instance - and makes 0th index - author and Shared email (array)
function makeInstanceWithAuthor(author, sharedWidthList){
  myJSON = new JSON_Instance();
  // var author_and_list_data = [];
  // author_and_list_data.push(['author', [author]]);
  // author_and_list_data.push(['sharedWith', [sharedWidthList]]);
  // addSomeData(author_and_list_data);
  addSomeData([[0, [['author', author], ['sharedWidthList', sharedWidthList]]]]);
}


//Basic add data function
function addSomeData(data){
  myJSON.addToObj(data);
}


// adds more data to Existina Deck - for all index(es) after Oth index
// data: <insert [] array here> | only 1 bracket, surronding <data>
function makeMoreCard(data){

  // var keyPair = myJSON.JSONobj.innerArray.length-1;
  // console.log(keyPair);
  myJSON.addToObj([[0, data]]);
}

// addSomeData([['author', 'sam'], ['1', {'name?':'timmy Jones'}]]);




// ========= Getting Questions from Deck ========
// function pullQuestion(questionNumber){
//   // pull questions based on number
//   // console.log("?",myJSON.JSONobj.innerArray[questionNumber][1][0]);
//   console.log(myJSON.JSONobj.innerArray[questionNumber][0][0]);


// }

function printAll(){
 
  // printAll! even wtih Gaps!
    myJSON.JSONobj.innerArray.forEach((item, index)=>{
    console.log(index);
//     myJSON.JSONobj.innerArray[index][1]    
    console.log(item[1]);
});
}

// DONE - correct question [indexing]
function printQuestionIndex(index){
  console.log(myJSON.JSONobj.innerArray[index][0][0]);
}

// DONE - correct answering
function printAnswerIndex(index){
  console.log(myJSON.JSONobj.innerArray[index][0][1]); 
}

// ========= Deleting Decks, array and Local Storage ========

function deleteWithSplice(index){
  myJSON.JSONobj.innerArray.splice(index, 1);

}
function deleteLocalStorage(name){
  localStorage.removeItem(name);
}


// =================
// TODO - make localStorage per deck name
// TOOD - delete a localStorage name <key>
// TODO - remove from <key> list
// localStorage.removeItem(keyname)

// ======== Saving and PUlling Decks =========
//TOOD - run = makeDeckNameSaver(<insert deck name>)
// TODO - run = pullFromLocal();
var deckArrayName=[];
function makeDeckNameSaver(deckName){
  deckArrayName.push(deckName);
  deckObj = JSON.stringify(deckArrayName);
  localStorage.setItem('deckObj', deckObj);
}

function pullFromLocal(){
  deckArrayName = JSON.parse(localStorage.getItem('deckObj'));
  console.log(deckArrayName);
}

var foundIndex;
function getLocalFromArray(name){
  pullFromLocal();
  deckArrayName.forEach((item, index)=>{
    if(item == name){
      console.log('matched! at: ', index);
      foundIndex = index;
      return deckArrayName[foundIndex];
    }
  });
  if(deckArrayName.indexOf(name)==-1){
    console.log('-1, not found!');
    return -1;
  }
}

function pullDeckLocalStorage(name){
  getLocalFromArray(name);
  localStorage.getItem(deckArrayName[foundIndex]);
}

// DONE - this gets the localStorage, getItem,
// getLocalFromArray(<insert deckName>)
// name, from searched deckArrayName[foundIndex]
// localStorage.getItem(deckArrayName[foundIndex])



// =================
// TO Get to the data!
// myJSON.JSONobj.innerArray[0][1]["name?"]

// adding more cards!
// myJSON.addMoreToIndex(0, [['2', {'date?': 'today!'}]])

// pulling keys from OBJ
// Object.keys(myJSON.JSONobj.innerArray[0])

// =================
// pull author from Deck
// myJSON.JSONobj.innerArray[0][0][0].author

// pull 'shared list' from Deck
// myJSON.JSONobj.innerArray[0][0][1].sharedWith

// =================

function pullTestQuote(){
  //using input => eliminates bad \'
  // <input class="testQuotes"></input>
  console.log($('.testQuotes').val().toString());
}

// =================

 // save a Deck to localStorage
function saveToLocalStorage(name){
  myJSON.saveToLocalStorage(name);
}


// pull A deck - from localStorage, <insert deckName>
function pullADeck(nameOfDeck){
  var pulled = localStorage.getItem(nameOfDeck);
  
  myJSON = new JSON_Instance();
  myJSON.insertJSON(pulled);
  myJSON.parseMe();
  myJSON.print();
}

// edits an index'd question
function editQuestion(index, newQuestion){
  myJSON.JSONobj.innerArray[index][0][0] = newQuestion;
}

// edits an index'd answer
function editAnswer(index, newAnswer){
  myJSON.JSONobj.innerArray[index][0][1] = newAnswer;
}

// =================
 // author list found at - myJSON.JSONobj.innerArray[0][0][1][1]
function addShareEmail(email){
  myJSON.JSONobj.innerArray[0][0][1][1].push(email);
}

function removeEmail(email){
  var emailIndex = myJSON.JSONobj.innerArray[0][0][1][1].indexOf(email);
  console.log(emailIndex);
  if(emailIndex==-1){
    console.log('Not found!');
  }else{
    myJSON.JSONobj.innerArray[0][0][1][1].splice(emailIndex, 1);
  }
}

function printAllSharedEmails(){
  console.log(myJSON.JSONobj.innerArray[0][0][1][1]);
}


// =================
// Making HTML - Q & As & Xs - Columns
function addToHTML(index){
  //adds HTML card to current HTML
  // index++;
  var questionCard = ['<div','class="w3-card-2','>', '<textarea', ' class="marginMe  questionCount', index, '">','</textarea>', '</div>'].join('');
  var answerCard = ['<div','class="w3-card-2','>', '<textarea', ' class="marginMe  answerCount', index, '">','</textarea>', '</div>'].join('');

  var deleteButton = ['<div', 'class="marginUpAndDown"', '>', '<button class="deleteMe', index, '>', 'X', '</button>', '</div>'].join('');
  // console.log(HTMLCard);
  
  $('.questionBox').html(  $('.questionBox').html() + questionCard);
  $('.answerBox').html(  $('.answerBox').html() + answerCard);
  $('.deleteColumn').html( $('.deleteColumn').html() + deleteButton);
  // highestIndex = index;   //saves higsest index

}


// =================
// TODO - make Q & As (boxes)
// TODO - save Boxes
// TODO - study Boxes - Yes / No 
// TODO - Make Decks

// DONE - localStorage - pull and add new Cards!


// TODO - share decks
// DONE (almost) - add Author to each deck - That stays forever
// TODO - add shared with List
// TODO - add / remove shared list

// TOOD - scores

// TODO - decks score - YES & NO

// TOOD - show question - show question

