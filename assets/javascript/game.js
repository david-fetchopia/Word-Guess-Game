var numWins = 0;
var numGuesses = 12;
var randomWord = "";
var possibleWords = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Nine"];
var foundLetters = [];
//randomWord = possibleWords[(Math.floor(Math.random() * possibleWords.length))];
//document.getElementById("currentPlanet").innerHTML = randomWord;
function getPrintWord() {
    var randomWord = possibleWords[(Math.floor(Math.random() * possibleWords.length))];
    document.getElementById("currentPlanet").innerHTML = randomWord;
    for (var i = 0; i < randomWord.length; i++) {
        document.getElementById("currentPlanet").innerHTML += '<element id="letter' + i + '">';
        document.getElementById("letter" + i).innerHTML = "_ ";
    }
    return randomWord;
}
randomWord = getPrintWord().toLowerCase();
document.onkeydown = function (e) {
    var currentKey = e.key;
    if (foundLetters.indexOf(currentKey) !== -1) {
        //do nothing because its already a guessed letter
    }
    else if (randomWord.indexOf(currentKey) !== -1) {
        //match letter case
        document.getElementById("soFar").innerHTML += currentKey + ", ";
        //update foundLetters
        for (var i = 0; i < randomWord.length; i++) {
            //loop through the word and detect for recurring matches of that letter
            if (randomWord[i] === currentKey) {
                //replacing "_" with found letter
                document.getElementById("letter" + i).innerHTML = currentKey + " ";
                foundLetters.push(currentKey);
                //win condition
                if (randomWord.length === foundLetters.length) {
                    //reset game
                    numWins++;
                    numGuesses = 12;
                    foundLetters = [];
                    randomWord = getPrintWord().toLowerCase();
                    document.getElementById("soFar").innerHTML = "";
                    document.getElementById("numWins").innerHTML = numWins;
                    document.getElementById("numGuesses").innerHTML = numGuesses;
                    

                    
                    console.log("EVERYTHING FOUND");
                }
            }
        }
        console.log(foundLetters);
    }
    else {
        //not a match case
        numGuesses--;
        document.getElementById("soFar").innerHTML += currentKey + ", ";
        document.getElementById("numGuesses").innerHTML = numGuesses;
    }


}