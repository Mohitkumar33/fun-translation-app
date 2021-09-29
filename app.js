const inputText = document.querySelector("#input-txt")
const outputText = document.querySelector("#output-txt")
const checkButton = document.querySelector("#check-button")

var serverURL = "https://api.funtranslations.com/translate/yoda.json?";

function getTranslationUrl(text){
    return serverURL+"text="+text;
}

function errorHandler(){

    alert("something wrong with server : try after some time")
}

function onClickHandler(){
var txt = inputText.value;
    fetch(getTranslationUrl(txt))
        .then(response =>response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler);
}




checkButton.addEventListener("click",onClickHandler)