function runMyCSS(){

    changeCSS('box', ['none'])
    
    
    if($('body').width()>=760){

        changeCSS('BIGDiv', ['centerHorizontally4', 'width300px']);
        // =============================

        changeCSS('firstScreen', ['centerHorizontally4']);
    
        //header
        changeCSS('editDecknameScreenSize', ['headerFont', 'centerHorizontally4']); // deckName on editScreen - size
    
        //boxes for deckNames
        changeCSS('boxMeCards', ['marginTop']); //big outer DIV to box car
    
        changeCSS('cardExample', ['marginAllAround', 'greyBorder']);    //card on Home Screen
        changeCSS('deckNameText', ['headerFont']);      //header Naem size
    

        changeCSS('QText', ['widthAuto']);  //Question textbox
        changeCSS('AText', ['widthAuto']);  //Answer textbox

        // changeCSS('boxComboDynamic', ['gridMe', 'centerHorizontally4', 'widtth45em'])
        changeCSS('meToFlex', ['flexMiddle', 'centerHorizontally4', 'notEvenSmall']);

        // changeCSS('flexMeHere', ['flexMiddle', 'width300px']);

        // changeCSS('deleteButton', ['deleteSetup']);

    }

    if($('body').width()<=760){
        changeCSS('BIGDiv', ['width300px', 'centerHorizontally4']);
        changeCSS('comboParent', ['width300px']);
        changeCSS('headerQAs', ['width300px']);
        // =============================
        changeCSS('addingCards', ['width300px']);
        changeCSS('addButton', ['smallFont']);


        // =============================
        changeCSS('editDecknameScreenSize', ['smallFont', 'centerHorizontally4']);
        changeCSS('QText', ['width45em']);
        changeCSS('AText', ['width45em']);

        // changeCSS('boxComboDynamic', ['flexMiddle', 'centerHorizontally4', 'smallButWide']);

        // changeCSS('meToFlex', ['flexMiddle', 'centerHorizontally4', 'notEvenSmall']);
        
        changeCSS('middleDiv', ['flexMiddle']);

    }
    if($('body').width()<=600){
        changeCSS('BIGDiv', ['width300px', 'centerHorizontally4']);
        changeCSS('meToFlex', ['flexMiddle3', 'centerHorizontally4', 'notEvenSmall']);
        changeCSS('rightDiv', ['fromRight']);
        // =============================
        changeCSS('QText', ['width50P']);
        changeCSS('AText', ['width50P']);

        changeCSS('middleDiv', ['flexMiddle']);
    }

}


function runCSS2(){
    changeCSS('BIGDiv', ['width450px', 'center']);
    changeCSS('editCardsParentDiv', ['widthFull', 'center']);

    if($('body').width()>=740){       
        changeCSS('addingCards', ['grid1']);
        changeCSS('middleDiv', ['flexGridQA']);

        changeCSS('addButton', ['rightMeFurther']);
    }
    if($('body').width()<=739){
        // changeCSS('editCardsParentDiv', ['widthFull', 'center']);


        changeCSS('addingCards', ['grid1']);
        changeCSS('middleDiv', ['flexGridQA']);
        
        changeCSS('addButton', ['rightMe']);

    }
}


window.addEventListener('resize', function(event){
    runCSS2();
});