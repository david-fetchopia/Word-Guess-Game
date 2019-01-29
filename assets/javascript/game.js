var numWins = 0;
var numGuesses = 12;
var randomWord = "";
var possibleWords = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Nine"];
var foundPosition = [];
//randomWord = possibleWords[(Math.floor(Math.random() * possibleWords.length))];
//document.getElementById("currentPlanet").innerHTML = randomWord;
function getPrintWord() {
    var randomWord = possibleWords[(Math.floor(Math.random() * possibleWords.length))];
    document.getElementById("currentPlanet").innerHTML = randomWord;
    for(var i=0;i<randomWord.length;i++) {
        document.getElementById("currentPlanet").innerHTML += '<element id="letter' + i + '">';
        document.getElementById("letter" + i).innerHTML = "_ ";
    }
    return randomWord;
}
randomWord = getPrintWord();
document.onkeydown = function (e) {
    document.getElementById("currentPlanet").innerHTML = randomWord;
    document.getElementById("soFar").innerHTML += e.key + ", ";

    document.getElementById("log").innerHTML = randomWord.indexOf(e.key);

}