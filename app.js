let translateButton = document.querySelectorer("#translate-button");
let traslateInput = documnet.querySelectorer("#translate-input");
let tralateOutput = documnet.querySelectorer("#translate-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedUrl(text){
    return serverUrl + "?" + "text" + text; 

}

function errorHandler(error){
    console.log("there is error :" + error);
    alert("request time out try again after siome time");    
}
function clickHandler(){
    var inputText = traslateInput.value;//Taking Input
    fetch(getTranslatedUrl).then(
        function response(inputText) {
            return response.json()
        }). then(function logJson(json){
            return
            var translateText = console.log(json.contents.translated);
            translateOutput.inputText = translateText;
        })
        .catch(errorHandler)

}

translateButton.addEventListener("click", clickHandler);