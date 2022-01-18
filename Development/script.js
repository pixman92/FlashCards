

var myJSONFlashCards;


//creates the myJSONFlashCards instance
function makeInstanceFlashCards(){
  myJSONFlashCards = new JSON_Instance();
}

function makingEmail(){
    pushToEmail('sam@gmail.com');
}
function firstIndex(){
    myJSONFlashCards.addMoreToIndex(0, [[[0], [['email', 'sam@gmail.com'],['title', 'randoms']]]]);
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
var myJSONFlashCardsPULLED;
async function getDataFromFirebaseToAddToJSONInstance(){
    // function to make a new instance OBJ, that will hold pulled JSON Data
    
    // makeInstanceFlashCards();
    // myJSONFlashCardsPULLED = new JSON_Instance();
    // await pullEmailGetUID('sam@gmail.com').then(async ()=>{
    //     await pullDataBasedOnUID();   
        
    // }).then(async ()=>{
    //     await myJSONFlashCardsPULLED.insertJSON(wholeDocDataPull[0].randoms)

    // });

    // this errors out, BUT it works!!

    main();

    async function main (){
        try{
            let first = await one();
            let second = await two(first);        
            let third = await three(second);            
        }catch(e){
            console.log(e);
            throw e;
        }
    
    }
    
    async function one(){
        console.log('first');
        await pullEmailGetUID('sam@gmail.com')
    }
    
    async function two(){
        console.log('second');
        await pullDataBasedOnUID();   

    }
    async function three(){
        console.log('third');
        await myJSONFlashCardsPULLED.insertJSON(wholeDocDataPull[0].randoms)


    }
    
    
}
