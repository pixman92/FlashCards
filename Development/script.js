var myJSONFlashCards;


//creates the myJSONFlashCards instance
function makeInstance(){
  myJSONFlashCards = new JSON_Instance();
}

function makingEmail(){
    pushToEmail('sam@gmail.com');
}

function firstIndex(){
    myJSONFlashCards.addMoreToIndex(0, [[0, ['email', 'sam@gmail.com']]]);
}

function addQuestionAddAnswer(question, answer){
    myJSONFlashCards.addToObj([['question', question], ['answer', answer]]);
    
}