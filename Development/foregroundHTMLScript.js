var arrayOfClasses = ["firstScreen", "editDeck", "comboParent"];
function hide() {
    for (var i = 0; i < arrayOfClasses.length; i++) {
        document.querySelector('.' + arrayOfClasses[i]).style.display = 'none';
    }
 
}
 
function show(classIt) {
    document.querySelector("." + classIt).style.display = 'block';
}



async function makeDeckNameHTML(){
    // MAKE Sure to pull myJSONFlCardPULLED data

    //pushes TITLE to HTML header
    // await $('.deckNameText').html(myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][1][1])
    document.getElementsByClassName('deckNameText')[0].innerHTML = myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][1][1];
    console.log('myJSON',   );
} 

async function makeTagsHTML(){
    // MAKE Sure to pull myJSONFlCardPULLED data
    $('.TAGS').html(myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][3][0][1][0]);
}

function makeEditMode(){

}

//=============================
var indexOfBoxes;
function addBoxesToHTML(indexOfBoxes, questionText, answerText){
    $('.addingCards').html($('.addingCards').html()+['<div class="gridMe centerHorizontally3 marginBottom">','<div class="questionText"><textarea class="widthFull ',indexOfBoxes,'">', questionText, '</textarea></div>','<div class="answerText"><textarea class="widthFull">', answerText, '</textarea></div>','<div class="deleteButton ', indexOfBoxes,'"><button>x</button></div></div>'].join(''));
}


