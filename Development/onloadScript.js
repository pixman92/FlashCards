window.onload = ()=>{
    firebaseInit(); 
    collectionName = 'flashCards'; 
    
    makeInstanceFlashCards();
    // firstIndex();
    // addQuestionAddAnswer('how tall are you?' , 'very tall')
    // addQuestionAddAnswer('time of day?', 'noon')
    // addQuestionAddAnswer('favorite hobby?', 'programming')
    runMyCSS();
    hide();
    show('firstScreen');

    pushingToDeckArray('Spanish', 'language, understanding, awesomeness')
    pushingToDeckArray('math', 'hard')
    pushingToDeckArray('science', 'hard, disappointing')
    makeMoreDecks();
    // makeThemEditable(0);


};