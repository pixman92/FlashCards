function exchange(){
    str = holdingPullArray[0].stringMe()        //pulls a String cast of the JSONobj

    makeInstanceFlashCards()        //to make a new global FlashCard obj

    myJSONFlashCards.insertJSON(str)        //push the 'str' variable to the new instance
    myJSONFlashCards.parseMe()              //make it into objs

    pushFlashCardsManipulateTAGS(['time will tell', 'nope', 'peace'])
}