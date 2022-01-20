var savedCSSArray = [];
function makeCSS(element, style, value, minOrMax, screenSize){
  savedCSSArray.push([element, style, value, minOrMax, screenSize]);
}

function applyCSS(){
    savedCSSArray.forEach((item, index)=>{
        enquire.register("screen and ("+savedCSSArray[index][3]+"-width: "+savedCSSArray[index][4]+")", ()=>{ 
       document.querySelector(savedCSSArray[index][0]).style[savedCSSArray[index][1]] = savedCSSArray[index][2];
      });
    });
}


// use instead $('body').width();