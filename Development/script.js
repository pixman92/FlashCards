

var myJSONFlashCards;


//creates the myJSONFlashCards instance
function makeInstanceFlashCards(){
  myJSONFlashCards = new JSON_Instance();
}

function makingEmail(){
    pushToEmail('sam@gmail.com');
}
function firstIndex(title){
    myJSONFlashCards.addMoreToIndex(0, [[[0], [['email', 'sam@gmail.com'],['title', title]]]]);
}

function addQuestionAddAnswer(question, answer){
    myJSONFlashCards.addToObj([[[0], [['question', question], ['answer', answer], ['score', -1]]]])
    myJSONFlashCards.print();

}

async function pushFlashCardData(){
    await pullEmailGetUID('sam@gmail.com')
    // saves title and data
    // to be pushed to Firebase
    addToFirebaseBasedOnUID(myJSONFlashCards.JSONobj.innerArray[0][0][1][1], myJSONFlashCards.stringMe())

}

// =================
var values = [];
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

// =================

async function tmp(){}
var myJSONFlashCardsPULLED = {};
async function makeFlashCardPulledInstance(){
    myJSONFlashCardsPULLED = new JSON_Instance();

}
async function totalEmailSearch(emailSearch){
    await tmp().then(async()=>{
        await searchForEmailGetUID(emailSearch);
        await pullDataBasedOnUID();
        await makeFlashCardPulledInstance();
        await pushToRetrieveLocalVariable('math');    
    });

}

// =================

async function getDataFromFirebaseToAddToJSONInstance(emailSearch, deckName){
    // function to make a new instance OBJ, that will hold pulled JSON Data
    
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
    
}
