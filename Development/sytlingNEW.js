function runMyCSS(){
    changeCSS('BIGDiv', ['width450px', 'center']);
    changeCSS('editCardsParentDiv', ['widthFull', 'center']);

    changeCSS('editDecknameScreenSize', ['center']);

    
}


window.addEventListener('resize', function(event){
    runMyCSS();
});