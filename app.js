var btnTranslate = document.querySelector("#translate-button");
let textInput = document.querySelector("#translate-input");
let textOutput = document.querySelector("#translate-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedUrl(text){
    return serverUrl + "?" + "text=" + text; 

}

function errorHandler(error){
    console.log("there is error :" + error);
    alert("request time out try again after siome time");    
}
function clickHandler(){
    var inputText = translateInput.value;//Taking Input
    fetch(getTranslatedUrl(inputText))
        .then(response => response.json())
        .then(json =>{
            let translatedText = console.log(json.contents.translate);
            translateOutput.innerText = translatedText; 
        })
        .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler);