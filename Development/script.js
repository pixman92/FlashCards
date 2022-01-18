

var myJSONFlashCards;


//creates the myJSONFlashCards instance
function makeInstanceFlashCards(){
  myJSONFlashCards = new JSON_Instance();
}

function makingEmail(){
    pushToEmail('sam@gmail.com');
}
function firstIndex(){
    myJSONFlashCards.addMoreToIndex(0, [[[0], [['email', 'sam@gmail.com'],['title', 'spanish']]]]);
}

function addQuestionAddAnswer(question, answer){
    myJSONFlashCards.addToObj([[[0], [['question', question], ['answer', answer], ['score', -1]]]])
    myJSONFlashCards.print();

}

function pushFlashCardData(){
    // saves title and data
    // to be pushed to Firebase
    addToFirebaseBasedOnUID(myJSONFlashCards.JSONobj.innerArray[0][0][1][1], myJSONFlashCards.stringMe())

}

