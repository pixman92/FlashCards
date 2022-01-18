window.onload = ()=>{
 makeInstance();   
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

function addToHTML(index){
  //adds HTML card to current HTML
  // index++;
  var questionCard = ['<div','class="w3-card-2','>', '<textarea', ' class="marginMe  questionCount', index, '">','</textarea>', '</div>'].join('');
    var answerCard = ['<div','class="w3-card-2','>', '<textarea', ' class="marginMe  answerCount', index, '">','</textarea>', '</div>'].join('');
  // console.log(HTMLCard);
  
  $('.questionBox').html(  $('.questionBox').html() + questionCard);
  $('.answerBox').html(  $('.answerBox').html() + answerCard);
  // highestIndex = index;   //saves higsest index

}

function getData(index){
  //pulls data from a <insert index> card
  var question = $('.questionCount'+index).val();
  var answer = $('.answerCount'+index).val();
  console.log('question: ', question);
  console.log('answer: ', answer);
  
}
// =================
//Pulls either Question or Answer data based on <insert index>
function pullQuestion(index){
  var question = $('.questionCount'+index).val();
  return question;
}

function pullAnswer(index){
  var answer = $('.answerCount'+index).val();
  return answer;
}

// =================
//OLD
function run(){
  $('.questionBox').html("");
  $('.answerBox').html("");

  indexParsedFromArray();
//   for(var i=0; i<3; i++){
//     addToHTML();
//   }  
}

// =================
var myJSON;
function makeInstance(){
  myJSON = new JSON_Instance();
  
}
function pullAllDataQuestonAndAnswer(index){ 
  myJSON.addToObj([['question'+index, pullQuestion(index)], ['anwer'+index, pullAnswer(index)]]);
  myJSON.print();
}

function pullAll(){
  parseArray.forEach((item, index)=>{
    myJSON.replaceByIndex(item, [['question'+item, pullQuestion(item)], ['anwer'+item, pullAnswer(item)]]);  
  });
  
  myJSON.print();
  
}
// =================
function deleteFromParseArray(numberToDelete){
  //deletes the 'searched' number
  var place = parseArray.indexOf(numberToDelete);
  parseArray.splice(place, 1);
}
// =================


// =================
// pull digits - from ending of t -> to end of string
// lastIndexOf('t') = 12;
// substring(13, <to length of str>);