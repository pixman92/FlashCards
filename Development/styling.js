function runMyCSS(){

    changeCSS('box', ['none'])
    
    
    if($('body').width()>=760){

        // changeCSS('comboParent', ['widthAuto']);
        // changeCSS('headerQAs', ['widthAuto']);
        // changeCSS('addingCards', ['widthAuto'])
        changeCSS('BIGDiv', ['width450px', 'centerHorizontally4']);
        // =============================

        changeCSS('firstScreen', ['centerHorizontally']);
    
        //header
        changeCSS('editDecknameScreenSize', ['headerFont', 'centerHorizontally']); // deckName on editScreen - size
    
        //boxes for deckNames
        changeCSS('boxMeCards', ['marginTop']); //big outer DIV to box car
    
        changeCSS('cardExample', ['marginAllAround', 'greyBorder']);    //card on Home Screen
        changeCSS('deckNameText', ['headerFont']);      //header Naem size
    

        changeCSS('QText', ['width20em']);  //Question textbox
        changeCSS('AText', ['width20em']);  //Answer textbox

        changeCSS('boxComboDynamic', ['gridMe', 'centerHorizontally4', 'widtth45em'])

        // changeCSS('deleteButton', ['deleteSetup']);

    }

    if($('body').width()<=760){
        changeCSS('BIGDiv', ['width450px', 'centerHorizontally4']);
        changeCSS('comboParent', ['width450px']);
        changeCSS('headerQAs', ['width450px']);
        // =============================
        changeCSS('addingCards', ['width450px']);
        changeCSS('addButton', ['smallFont']);


        // =============================
        changeCSS('editDecknameScreenSize', ['smallFont', 'centerHorizontally']);
        changeCSS('QText', ['widthFull']);
        changeCSS('AText', ['widthFull']);

        changeCSS('boxComboDynamic', ['gridMeSmall', 'centerHorizontally4', 'smallButWide'])

    }
    if($('body').width()<=500){
        changeCSS('BIGDiv', ['width450px', 'centerHorizontally4']);
        changeCSS('boxComboDynamic', ['gridMeSuperSmall', 'centerHorizontally4', 'notEvenSmall']);
        changeCSS('rightDiv', ['fromRight']);
    }

}

window.addEventListener('resize', function(event){
    runMyCSS();
});