var arrayOfClasses = ["firstScreen", "editDeck"];
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