

var myJSONFlashCards;


//creates the myJSONFlashCards instance
function makeInstanceFlashCards(){
  myJSONFlashCards = new JSON_Instance();
}

function makingEmail(){
    pushToEmail('sam@gmail.com');
}
function firstIndex(){
    myJSONFlashCards.JSONobj.innerArray[0] = '';
    myJSONFlashCards.addMoreToIndex(0, [['email', 'sam@gmail.com'],['title', 'spanish']]);
}

function addQuestionAddAnswer(question, answer){
    myJSONFlashCards.addToObj([['question', question], ['answer', answer]]);

}

// function

