var arrayOfClasses = ["firstScreen", "editDeck", "editScreen"];
function hide() {
    for (var i = 0; i < arrayOfClasses.length; i++) {
        document.querySelector('.' + arrayOfClasses[i]).style.display = 'none';
    }
 
}
 
function show(classIt) {
    document.querySelector("." + classIt).style.display = 'block';
}

// =============================


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
function addBoxesToHTML
(indexOfBoxes, questionText, answerText){
    // adding Q/As boxes - with delete button
 
    $('.addingCards').html($('.addingCards').html()+['<div class="gridMe centerHorizontally3 marginBottom">','<div class="questionText"><textarea class="widthFull ',indexOfBoxes,'">', questionText, '</textarea></div>','<div class="answerText"><textarea class="widthFull">', answerText, '</textarea></div>','<div class="deleteButton ', indexOfBoxes,'"><button>x</button></div></div>'].join(''));
}

// =================
function editDeck(){
    $('.deckHeaderEditScreen').html(myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][1][1]);

    
    $('.tagsEditScreen').html(myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][4][0][1][0].join(', '));

    $('.scorePercent').html(myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][3][1]);



}
// =============================
// making divs editable
var tmp;
// REMEBER
// await prepForPullingJSON()
// editDeck()
// makeThemEditable()

var holding1;
function makeThemEditable(){
    
    //DeckNAME and Outside Click

    // var savedHeader = $('.deckHeaderEditScreen').text();

    // $('.deckHeaderEditScreen').on('click', (event)=>{
    //     event.stopPropagation();
    //     // var tmp = $('.deckHeaderEditScreen').html();
    //     $('.deckHeaderEditScreen').html('<textarea class="deckNameEdit">'+savedHeader+'</textarea>')
    //     tmp = $('.deckNameEdit').text();
    //     // $('.deckHeaderEditScreen').on('click', );
    //     $('.deckHeaderEditScreen').off(); 
        
    // });        
    // // =============================
    // $('body').on('click', (event) => {
    //     if (!$(event.target).closest('.deckNameEdit').length) {
    //         // the click occured outside '#element'
    //         console.log('i ran out of the box');
    //         $('.deckHeaderEditScreen').html();
    //         $('.deckHeaderEditScreen').html('<div>'+ tmp + '</div>');
    //         makeThemEditable();
    //     }        
    // });

    // // =============================
    // //TEXT and Outside Click
    // var TagTextArray = [];

    // var TagTextArray = $('.tagsEditScreen').text();


    // $('.tagsEditScreen').on('click', (event)=>{
    //     event.stopPropagation();
    //     // var tmp = $('.deckHeaderEditScreen').html();
    //     $('.tagsEditScreen').html('<textarea class="tags">'+TagTextArray+'</textarea>')
    // });

    // $('body').on('click', (event) => {
    //     if (!$(event.target).closest('.tagsEditScreen').length) {
    //         // the click occured outside '#element'
    //         console.log('i ran out of the box');
    //         $('.tagsEditScreen').html();
    //         $('.tagsEditScreen').html('<div>'+ TagTextArray + '</div>');
    //         makeThemEditable();
    //     }        
    //     });




    // $('window').on('focus', ()=>{
    //     $('.deckHeaderEditScreen').html('<div>'+ tmp + '</div>');
    //     makeThemEditable();
    // });

    var savedDeckNameFrontScreen = $('.deckNameText').text();           //saving text before edit
    $('.deckNameText').on('click', (event)=>{                           //setting up DOM eventlistener
        event.stopPropagation();
        // var tmp = $('.deckHeaderEditScreen').html();
        $('.deckNameText').html('<textarea class="deckNameTextArea">'+savedDeckNameFrontScreen+'</textarea>')       //transfer to NEW HTML
        // holding1 = $('.deckNameTextArea').html();
        // console.log('holding1', holding1);
        $('.deckNameText').off();
        // $('.deckHeaderEditScreen').on('click', );
    });        

    $('.deckNameTextArea').on('keypress', (event)=>{
        deckName(event);
    });
    $('.TAGChange').on('keypress', (event)=>{
        TAGS(event);
    });

    $('body').on('click', (event) => {                          
        deckName(event);
        TAGS(event);
        //event for, clicking outside
        // if (!$(event.target).closest('.deckNameTextArea').length) {                     // if click is outside
        //     // the click occured outside '#element'
        //     console.log('i ran out of the box');     
        //     holding1 = $('.deckNameTextArea').val(); 
        //     $('.deckNameText').html();                                          //reset html
        //     // $('.deckNameText').html('<div>'+ holding1 + '</div>');
        //     $('.deckNameText').text(holding1);
        //     makeThemEditable();
        // }        
    });
    // ==============Clicking TAG array===============
    var holdingTAGS;
    var savedTAGS = $('.TAGS').text();
    $('.TAGS').on('click', (event)=>{
        event.stopPropagation();

        $('.TAGS').html('<textarea class="TAGChange">' + savedTAGS + '</textarea>');

        $('.TAGS').off();
    });
    $('window').on('click', (event)=>{
        
    });
    
}
function TAGS(event){
    if (!$(event.target).closest('.TAGChange').length) {
        holdingTAGS = $('.TAGChange').val();
        $('.TAGS').html();
        // $('.TAGS').html('<div>'+ holdingTAGS + '</div>');
        $('.TAGS').text(holdingTAGS);
        makeThemEditable();
    }
}

function deckName(event){
    if (!$(event.target).closest('.deckNameTextArea').length) {                     // if click is outside
        // the click occured outside '#element'
        console.log('i ran out of the box');     
        holding1 = $('.deckNameTextArea').val(); 
        $('.deckNameText').html();                                          //reset html
        // $('.deckNameText').html('<div>'+ holding1 + '</div>');
        $('.deckNameText').text(holding1);
        makeThemEditable();
    }      
}

// =============================
// DONE - edit Deck obj info - logic works
// TODO - edit Deck obj info - tap to edit
// TODO - edit Deck obj info - CSS styling