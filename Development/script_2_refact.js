window.onload = ()=>{
    makeInstance();   
    state();
}

// =================

var myJSON;


//creates the myJSON instance
function makeInstance(){
  myJSON = new JSON_Instance();
}

// =================
// creates a deck with certain properites
function state(){
    myJSON.replaceByIndex(0, [['emails',[['sam@gmail.com', 'tim@gmail.com', 'tom@gmail.com']]]]);

    makeMoreCardData(1, [['time?'], ['noon!']]);   
    makeMoreCardData(2, [['place?'], ['home!']]);   
    makeMoreCardData(29, [['people?'], ['just me!']]);
}

// pulls emails from the 'shared Emails list'
function pullEmails(){
    console.log('emails', myJSON.JSONobj.innerArray[0]["emails"]);

    return myJSON.JSONobj.innerArray[0]["emails"];
}


// =================
var index = -1;
var highestIndex = -1;

var parseArray = [1, 3, 8, 29, 129];

function indexParsedFromArray(){
    parseArray.forEach((item, index)=>{
      addToHTML(item);
    });
  }


// =================

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

//   =================

function getDataFormHTML(index){
    //pulls data from a <insert index> card
    var question = $('.questionCount'+index).val();
    var answer = $('.answerCount'+index).val();
    console.log('question: ', question);
    console.log('answer: ', answer);   
}
// =================
//Pulls either Question or Answer data based on <insert index>
function pullQuestionFromHTML(index){
    var question = $('.questionCount'+index).val();
    return question;
  }
  
function pullAnswerFromHTML(index){
var answer = $('.answerCount'+index).val();
return answer;
}

// =================

// this is THE WAY to make array and index-findable Q&A
function makeMoreCardData(index, data){
    myJSON.replaceByIndex(index, [[0, data]]);
    parseArray.push(index);
}

//   =================

function pullQuestionFromData(index){
    var question = myJSON.JSONobj.innerArray[index][0][0];
    return question;
}

function pullAnswerFromData(index){
    var answer = myJSON.JSONobj.innerArray[index][0][1];
    return answer;
}
// =================

var pulledIndexesArray = [];
function pullAllIndexes(printMeOUt){
    // pulls all indexes (no matter the empties)
    myJSON.JSONobj.innerArray.forEach((item, index)=>{
        printMeOUt == true ? console.log(index): undefined; 
        pulledIndexesArray.push(index);
    });
}

// =================
function deleteFromParseArray(numberToDelete){
    //TODO - this function used to delete parseArray data, changed to myJSON.JSONobj.innerArray

    //deletes the 'searched' number
    // var place = parseArray.indexOf(numberToDelete);
    // if(place == -1){
    //     console.log('could not find ', numberToDelete, '!' );
    // }else{
    //     parseArray.splice(place, 1);
    // }

    pullAllIndexes(false);       //run this to populate the Array, then indexOf it, and delete - using that index
    var place = pulledIndexesArray.indexOf(numberToDelete);
    if(place == -1){
        console.log('could not find ', numberToDelete, '!' );
    }else{
        myJSON.JSONobj.innerArray .splice(place, 1);
        myJSON.print();
    }
}

// =================