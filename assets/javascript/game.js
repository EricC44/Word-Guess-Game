var words = ["caustic" , "lifeline" , "gibraltar" , "bloodhound" , "mirage" , "wraith" , "bangalore" , "pathfinder" , "apexlegends" , "mastiff" , "peacekeeper" , "spitfire" , "wingman" , "kraber" , "longbow" , "devotion" , "hemlok" , "havoc" , "flatline" , "tripletake" , "alternator" , "prowler" , "mozambique" , "syringe" , "medkit", "phoenixkit" , "shieldcell" , "shieldbattery" , "ultimateaccelerant" , "bodyshield" , "helmet" , "knockdownshield" , "backpack" , "slumlakes" , "thepit" , "runoff" , "cascades" , "artillery" , "bunker" , "airbase" , "relay" , "wetlands" , "bridges" , "swamps" , "hydrodam" , "repulsor" , "watertreatment" , "market" , "skulltown" , "thunderdome"];
var wrongLetters = [];
var guessingWord = [];
var rightword = [];
var wrongword = [];
var guessLeft = 0;
var gameOver = false;
var gamesWon = 0;
const maxGuess = 10;












function resetGame() {
    guessLeft = maxGuess;

    currentWordIndex = Math.floor(Math.random() * (words.length));

    guessedLetters = [];
    guessingWord = [];


    for(var i = 0; i < words[currentWordIndex].length; i++) {
        guessingWord.push('_');
    }

    document.getElementById("you-lose").style.cssText="display: none";
    document.getElementById("you-win").style.cssText="display: none";
    document.getElementById("play-again").style.cssText="display: none";

    updateDisplay();


};

function updateDisplay() {

    document.getElementById("totalWins").innerText = gamesWon;

    var guessingWordText = "";
    for(var i = 0; i < guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }

    document.getElementById("underscores").innerText = guessingWordText;
    document.getElementById("guessesLeft").innerText = guessLeft;
    document.getElementById("wrongLetters").innerText = wrongLetters;

}

function evaluateGuess(letter) {
    var positions = [];

    for(var i = 0; i < words[currentWordIndex].length; i++) {
        if(words[currentWordIndex][i] === letter) {
            positions.push(i);
            
        }
    }

    if(positions.length <=0) {
        guessLeft--;
    } else {

        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
}