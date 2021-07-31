//---using query selector using id selsector which target button,textarea and div 
var btnTranslate = document.querySelector("#translate-button");
let textInput = document.querySelector("#translate-input");
let textOutput = document.querySelector("#translate-output");

//minion api link 

var serverUrl = "https://api.funtranslations.com/translate/minion.json"


// constructing text (givin query to link)  to gettranslated function 
function getTranslatedUrl(text){
    return serverUrl + "?" + "text=" + text; 

}
// this section is for catching and alert clinte if get error 
function errorHandler(error){
    console.log("there is error :" + error);
    alert("request time out try again after siome time");    
}

// clickhandler function call when ever user click on translate button //

function clickHandler(){
    var inputText = textInput.value;//Taking Input
    fetch(getTranslatedUrl(inputText)) //using  fetch for caliing api 
        .then(response => response.json()) //changing response to response.json
        .then(json =>{                                    
            let translatedText = json.contents.translated; //selecte translated section and and store it in translateText variable      
            textOutput.innerText = translatedText; // using innertext method to show translated text on div section//
        })
        .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler);//function call whenever click event happen