var arrayOfClasses = ["firstScreen", "editDeck", "editScreen"];
function hide() {
    for (var i = 0; i < arrayOfClasses.length; i++) {
        document.querySelector('.' + arrayOfClasses[i]).style.display = 'none';
    }
 
}
 
function show(classIt) {
    document.querySelector("." + classIt).style.display = 'block';
}

// ==========================================================
//SUPER important Function - with SUPER important 'deckArray'
// var deckArray = [];
// function pushingToDeckArray(name, TAGS){
//     deckArray.push([['name', name], ['TAGS', TAGS]]);
// }

var decksArray = []; 
var keyMe;  var tmpPull; var tmpPull2;
async function pullAllDecksToHTML(){
    await prepForPullingJSON();
    decksArray = wholeDocDataPull;
    keyMe = Object.keys(wholeDocDataPull[0]);
    // decksArray = Object.values(wholeDocDataPull[0]);

    tmpPull = new JSON_Instance();
    tmpPull2 = new JSON_Instance();    
    
    decksArray.forEach((item, index)=>{
        if(item!='email'){
            console.log('item', decksArray[0][keyMe[index]]);
            
            tmpPull.insertJSON(decksArray[0][keyMe[index]]); 
            tmpPull2.insertJSON(decksArray[0][keyMe[index]])
        
            console.log('tmpPull', tmpPull);
            // debugger;
            tmpPull.parseMe();
            tmpPull2.parseMe();
            // var holdTmpPull = tmpPull.parseMe(); 
            // var holdTmpPull2 = tmpPull2.parseMe();
            makeMoreDecks(tmpPull.JSONobj.innerArray[0][0][1][1], );       //sending DECKName and DECK TAGS
            // tmp="";
        }
    });
}
// ==========================================================


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

var keepingArray = [];
function clickable(index){
    $('.deckNameText'+index).on('click', ()=>{
        keepingArray.push($('.deckNameText'+index).text());;           //saving text before edit
        console.log('keepingArray', keepingArray);
    });
}



// =============================
// making divs editable
var tmp;
// REMEBER
// await prepForPullingJSON()
// editDeck()
// makeThemEditable()

var holding1; var holdingTAGS; var savedDeckNameFrontScreen; var savedTAGS;
var globalIndex = 0;
function makeThemEditable(indexMe){
    //REM

    console.log('indexMe', indexMe);
    globalIndex = indexMe;

    //DeckNAME and Outside Click

    // deckArray.forEach((item, indexMe)=>{

        savedDeckNameFrontScreen = $('.deckNameText'+indexMe).text();           //saving text before edit
        // debugger;
        console.log('savedDeckNameFrontScreen', savedDeckNameFrontScreen);
        $('.deckNameText'+indexMe).on('click', (event)=>{                           //setting up DOM eventlistener
            event.stopPropagation();
            // var tmp = $('.deckHeaderEditScreen').html();
            $('.deckNameText'+indexMe).html('<textarea class="deckNameTextArea'+indexMe+'">'+savedDeckNameFrontScreen+'</textarea>')       //transfer to NEW HTML
            // holding1 = $('.deckNameTextArea'+indexMe+'").html();
            // console.log('holding1', holding1);
            $('.deckNameText'+indexMe).off();
            // $('.deckHeaderEditScreen').on('click', );
        });        
    
        // var holdingTAGS;
        savedTAGS = $('.TAGS'+indexMe).text();
        $('.TAGS'+indexMe).on('click', (event)=>{
            event.stopPropagation();
    
            $('.TAGS'+indexMe).html('<textarea class="TAGChange'+indexMe+'">' + savedTAGS + '</textarea>');
    
            $('.TAGS'+indexMe).off();
        });
        // $('window').on('click', (event)=>{
            
        // });
    
    
    
        // ==========On clicks for DeckName and TAGS=================
        $(".deckNameTextArea"+indexMe).on('keypress', (event)=>{
            deckName(event, indexMe);
            // debugger;
        });
        $('.TAGChange'+indexMe).on('keypress', (event)=>{
            TAGS(event, indexMe);
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
            makeThemEditable(globalIndex);        
        });
        // ==============Clicking TAG array===============
    // });
}
function TAGS(event){
    if (!$(event.target).closest('.TAGChange'+globalIndex).length) {
        console.log('TAG clicked away, at globalIndex, ', globalIndex);
        holdingTAGS = $('.TAGChange'+globalIndex).val();
        $('.TAGS'+globalIndex).html();
        // $('.TAGS'+globalIndex).html('<div>'+ holdingTAGS + '</div>');
        $('.TAGS'+globalIndex).text(holdingTAGS);
        // makeThemEditable();
    }
}

function deckName(event){
    if (!$(event.target).closest('.deckNameTextArea'+globalIndex).length) {                     // if click is outside
        // the click occured outside '#element'
        console.log('Deck clicked away, at globalIndex, ', globalIndex);     
        holding1 = $('.deckNameTextArea'+globalIndex).val(); 
        $('.deckNameText'+globalIndex).html();                                          //reset html
        // $('.deckNameText'+globalIndex).html('<div>'+ holding1 + '</div>');
        $('.deckNameText'+globalIndex).text(holding1);
        // makeThemEditable();
    }      
}


// =============================
// DONE - edit Deck obj info - logic works
// TODO - edit Deck obj info - tap to edit
// TODO - edit Deck obj info - CSS styling

// =============================
// Making More Decks!!!
// TODO - deck colors! if be

var sendingHTMLSTring = "";
function makeMoreDecks(deckName, deckTags, index){
    // deckArray.forEach((item, index)=>{
        sendingHTMLSTring = ['<div class="cardExample marginTop w3-card-2 ">',
        '            <div class="w3-container w3-blue">',
        '              <div class="deckNameAndButtonsGrid">',
        '                <div class="title centerHorizontally ">',
        '                  <div class="paddingUp paddingDown">',
        '                    <div class="deckNameText',index,'">',deckName,'</div>',
        '                  </div>',
        '                </div>',
        '                <div class="area1 paddingUp"><button id="edit1">Edit</button></div>',
        '                <div class="area2 paddingDown"><button id="study1">Study</button></div>',
        '              </div>',
        '              </div>',
        '            </div>',
        '            <div class="w3-container greyBorder">',
        '              <div class="tagsAndEmailsGrid marginUpAndDown">',
        '                <div class="TAGS',index,'">', deckTags ,'</div>',
        '                <div class="EmailsSharedButton">',
        '                  <button class="emailsSharedList">Shared With</button>',
        '                </div>',
        '              </div>',
        '            </div>',
        '          </div>',
        ].join('');
    // });




    $('.boxMeCards').html($('.boxMeCards').html()+ sendingHTMLSTring);
}

