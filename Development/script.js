

var myJSONFlashCards;


//creates the myJSONFlashCards instance
function makeInstanceFlashCards(){
  myJSONFlashCards = new JSON_Instance();
}

function makingEmail(){
    pushToEmail('sam@gmail.com');
}
function firstIndex(){
    myJSONFlashCards[0] = '';
    myJSONFlashCards.addMoreToIndex(0, [[0, ['email', 'sam@gmail.com']], [0, ['title', 'spanish']]]);
}

function addQuestionAddAnswer(question, answer){
    myJSONFlashCards.addToObj([['question', question], ['answer', answer]]);

}

// function

