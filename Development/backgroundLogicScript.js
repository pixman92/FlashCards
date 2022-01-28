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
async function tmp(){}

var emailSearch;

async function prepForPullingJSON(){
    emailSearch = "sam@gmail.com"; deckName = 'alegra';
    await tmp(()=>{}).then(async()=>{
        await getDataFromFirebaseToAddToJSONInstance(emailSearch, deckName).then(async()=>{
            await makeFlashCardPulledInstance().then(async()=>{
        })
        })});
// });
}

// ===========End of Send/Receive Decks functions==================

var myJSONFlashCards;       // global variable for 'pushed' variable

// =============================
function makeInstanceFlashCards(){
    //creates the myJSONFlashCards instance
    myJSONFlashCards = new JSON_Instance();
}

// =============================
function makingEmail(){
    //makes email UID path, first off - for creating a collection in Firebase
    pushToEmail('sam@gmail.com');
}
function firstIndex(title){
    myJSONFlashCards.addMoreToIndex(0, [[[0], [['emailOwner', 'sam@gmail.com'],['title', title], ['sharedWithEmails', '-1'], ['deckScore', '0']]]]);
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
        myJSONFlashCards.JSONobj.innerArray[0][0][4] =[['TAGS', holdingArr]];
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
// =============================
async function changeName(newName){
    //function that changes the name of give Deck
    //save same deck, new name/delete old Deck

    await pullEmailGetUID('sam@gmail.com')
    addToFirebaseBasedOnUID(newName, myJSONFlashCards.stringMe())
}

// TODO - delete old NAME
async function deleteMyKeyThenChangeToNewName(){
        //pulls all DECK data from a single USER

        await prepForPullingJSON();
        decksArray = wholeDocDataPull;
        keyMe = Object.keys(wholeDocDataPull[0]);
}
// =============================

// BIG list of functions that pull Firebase OBJ data
var values = [];
var myJSONFlashCardsPULLED = {}; 
var allDeckArrays = [];
async function getDataFromFirebaseToAddToJSONInstance(emailSearch, deckName){
    // function to make a new instance OBJ, that will hold pulled JSON Data
    // pushes out JSON data (my custom) - to myJSONFlashCardsPULLED
    
    await totalEmailSearch(emailSearch, deckName);
    async function totalEmailSearch(emailSearch){
        await tmp().then(async()=>{
            await searchForEmailGetUID(emailSearch);        //found local
            await pullDataBasedOnUID();                     //found in script.js
            await makeFlashCardPulledInstance();            //found local
            await pushToRetrieveLocalVariable(deckName);    //found local
            myJSONFlashCardsPULLED.parseMe();
        });
    
    }
    
}

    // =============================
async function tmp(){}
async function makeFlashCardPulledInstance(){
    myJSONFlashCardsPULLED = new JSON_Instance();
}
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