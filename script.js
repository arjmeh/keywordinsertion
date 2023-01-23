var link = 'http://127.0.0.1:5000/'
var baseContent = document.getElementById('baseContent');
var mainKeywords = document.getElementById('mainKeywords');
var secondaryKeywords = document.getElementById('secondaryKeywords');
var submitButton = document.getElementById('submitButton');
var numberOfContent = document.getElementById('numberOfContent');
var amountOfMainKeywords = document.getElementById('mainKeywordAmount');
var amountOfSecondaryKeywords = document.getElementById('secondaryKeywordAmount');

function submit() {
    var baseContentValue = baseContent.value;
    var mainKeywordsValue = mainKeywords.value;
    var secondaryKeywordsValue = secondaryKeywords.value;
    var numberOfContentValue = parseInt(numberOfContent.value);
    var mainKeywordsArray = mainKeywords.value.split(',');
    var secondaryKeywordsArray = secondaryKeywords.value.split(',');
    var amountOfMainKeywordsValue = parseInt(amountOfMainKeywords.value);
    var amountOfSecondaryKeywordsValue = parseInt(amountOfSecondaryKeywords.value);
    fetch('http://127.0.0.1:5000/post', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        body: JSON.stringify({
            mainKeywords: mainKeywordsArray,
            secondaryKeywords: secondaryKeywordsArray,
            amount: numberOfContentValue,
            mainKeywordsAmount: amountOfMainKeywordsValue,
            secondaryKeywordsAmount: amountOfSecondaryKeywordsValue,
            baseContent: baseContentValue
        })
    })
    .then(response => response.text())
    .then(data => {
        var responseData = JSON.parse(data)
        var responseText = document.getElementById('responseText');
        console.log(responseData[0])

        let text = "";
        responseData.forEach(function (element) {
        text += element + "<br><hr>";
        });
        responseText.innerHTML = text;
    })
}