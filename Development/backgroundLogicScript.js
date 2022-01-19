
// Account Setup:
// email: is the Account holder
// history/math/etc: deckNames
//

// 2 Functions - 1 goes up. 1 pulls down
function prepForSendingJSON(){
    makeInstanceFlashCards();
    firstIndex('history');
    addQuestionAddAnswerToPushFlashCards('WWII?', 'long time ago')
    addQuestionAddAnswerToPushFlashCards('Romans big success?', 'Trojan horse');
    // addQuestionAddAnswerToPushFlashCards(question, answer)
    pushFlashCardsManipulateTAGS(['lover', 'kind', 'royal', 'peace'])
    pushFlashCardData();

}

function prepForPullingJSON(){
    emailSearch = "sam@gmail.com"; deckName = 'history';
    getDataFromFirebaseToAddToJSONInstance(emailSearch, deckName);

        
}


//=============================

var myJSONFlashCards;       // global variable for 'pushed' variable


//creates the myJSONFlashCards instance
function makeInstanceFlashCards(){
  myJSONFlashCards = new JSON_Instance();
}

function makingEmail(){
    pushToEmail('sam@gmail.com');
}
function firstIndex(title){
    myJSONFlashCards.addMoreToIndex(0, [[[0], [['emailOwner', 'sam@gmail.com'],['title', title], ['sharedWithEmails', '-1']]]]);
}

function addQuestionAddAnswerToPushFlashCards(question, answer){
    myJSONFlashCards.addToObj([[[0], [['question', question], ['answer', answer], ['score', -1]]]])
    myJSONFlashCards.print();

}

var holdingArr = [];
function pushFlashCardsManipulateTAGS(tagsArray){
    // function to Edit tags!, take an Array, for 1st time creation
    if(myJSONFlashCards.JSONobj.innerArray[0]){
        run(tagsArray);
        function run(){
            holdingArr = Array.from(arguments);
        }
        myJSONFlashCards.JSONobj.innerArray[0][0].push([['TAGS', holdingArr]]);
        // myJSONFlashCards.addToObj([[[0], holdingArr]]);
    }else{
        console.log('Destination - undefined!');
    }
}

async function pushFlashCardData(){
    //function that pushes FlashCardData to Firebase
    await pullEmailGetUID('sam@gmail.com')
    // saves title and data
    // to be pushed to Firebase
    addToFirebaseBasedOnUID(myJSONFlashCards.JSONobj.innerArray[0][0][1][1], myJSONFlashCards.stringMe())

}



// =================

var values = [];
var myJSONFlashCardsPULLED = {}; 
async function getDataFromFirebaseToAddToJSONInstance(emailSearch, deckName){
    // function to make a new instance OBJ, that will hold pulled JSON Data
    // pushes out JSON data (my custom) - to myJSONFlashCardsPULLED
    
    totalEmailSearch(emailSearch, deckName);
    async function totalEmailSearch(emailSearch){
        await tmp().then(async()=>{
            await searchForEmailGetUID(emailSearch);        //found local
            await pullDataBasedOnUID();                     //found in script.js
            await makeFlashCardPulledInstance();            //found local
            await pushToRetrieveLocalVariable(deckName);    //found local
            myJSONFlashCardsPULLED.parseMe();
        });
    
    }

    // =============================
    async function tmp(){}
    async function makeFlashCardPulledInstance(){
        myJSONFlashCardsPULLED = new JSON_Instance();
    }
    // =============================
    
    // =============================
    async function pushToRetrieveLocalVariable(entryName){
        var keys = Object.keys(wholeDocDataPull[0]);
        values = Object.values(wholeDocDataPull[0]);
    
        console.log('keys', keys);
        console.log('values', values);
    
        var savedIndex = -1;
        keys.forEach((item, index)=>{
            console.log('item', item);
            if(item == entryName){
                savedIndex = index;
                console.log('found index', index);
            }
        });
    
        myJSONFlashCardsPULLED.insertJSON(values[savedIndex])
    }
    
}
async function searchForEmailGetUID(emailSearch){
    var savedArrayUID = []; var savedArrayEmails = [];
    await db.collection(collectionName).get().then(async (querySnapshot) => {
        await querySnapshot.forEach(async (doc) => {
            await savedArrayUID.push(doc.id);
            await savedArrayEmails.push(doc.data());
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    }).then(async ()=>{
        await savedArrayEmails.forEach(async (item, index)=>{
            // console.log(item) 
            // console.log(item.email)
            // console.log('index', index);
            
            if(item.email==emailSearch){
                console.log('Found at ', index, ' index');
                console.log( '=====\n', savedArrayUID[index]);
     
                savedUIDstr = savedArrayUID[index];
                foundMe = true;
            }
            if(index>=savedArrayEmails.length-1 && foundMe==false){
                console.log('not found');
            }
        });
    });

}
// ==========================================================
function addQuestionAddAnswerToPullFlashCards(question, answer){
    //function to add questions to PULLED OBJ
    myJSONFlashCardsPULLED.addToObj([[[0], [['question', question], ['answer', answer], ['score', -1]]]])
    myJSONFlashCardsPULLED.print();

    
    addToFirebaseBasedOnUID(myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][1][1], myJSONFlashCardsPULLED.stringMe())       //this code adds back, with NEW Q/As
}
function pullFlashCardsManipulateTAGS(TAGMe){
    //this is the Indexing - to get to TAGS within the first element of Flash Card data
    if(myJSONFlashCardsPULLED){
        myTagsArray = myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][3][0][1][0];
    
        myTagsArray.push(TAGMe);
        myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][3][0][1][0] = myTagsArray;
        
        pushFlashCardDataAfterEdit();
    }else{
        console.log('Destination - Undefined');
    }
}

function changeScore(index, newScore){
    if(index!=0){
        myJSONFlashCardsPULLED.JSONobj.innerArray[index][0][2][1] = newScore;
    
        pushFlashCardDataAfterEdit();
    }else{
        console.log('Cannot manipulate 0th index - RESTRICTED AREA -');
    }
}


function deleteAQuestion(index){
    if(index!=0){
        myJSONFlashCardsPULLED.JSONobj.innerArray.splice(index, 1);
        pushFlashCardDataAfterEdit();
    }else{
        console.log('Cannot delete 0th index, RESTRICTED AREA');
    }

}

//=============================
async function pushFlashCardDataAfterEdit(){
    await pullEmailGetUID('sam@gmail.com')
    // saves title and data
    // to be pushed to Firebase

    //title, JSON.stringMe() - my own JSON.stringify
    addToFirebaseBasedOnUID(myJSONFlashCardsPULLED.JSONobj.innerArray[0][0][1][1], myJSONFlashCardsPULLED.stringMe())
}

// =============================
async function pullAllDocData(emailSearch){
    //function to get ALL 'key' data from Firebase Decks
    // essentially DeckNames
    await searchForEmailGetUID(emailSearch);        //found local
    await pullDataBasedOnUID();  
    console.log('wholeDocDataPull', wholeDocDataPull);
    var keys = Object.keys(wholeDocDataPull[0]);
    console.log('keys!', keys);
}