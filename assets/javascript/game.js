var words = ["CAUSTIC" , "LIFELINE" , "GIBRALTAR" , "BLOODHOUND" , "MIRAGE" , "WRAITH" , "BANGALORE" , "PATHFINDER" , "APEXLEGENDS" , "MASTIFF" , "PEACEKEEPER" , "SPITFIRE" , "WINGMAN" , "KRABER" , "LONGBOW" , "DEVOTION" , "HEMLOK" , "HAVOC" , "FLATLINE" , "TRIPLETAKE" , "ALTERNATOR" , "PROWLER" , "MOZAMBIQUE" , "SYRINGE" , "MEDKIT", "PHOENIXKIT" , "SHIELDCELL" , "SHIELDBATTERY" , "ULTIMATEACCELERANT" , "BODYSHIELD" , "HELMET" , "KNOCKDOWNSHIELD" , "BACKPACK" , "SLUMLAKES" , "THEPIT" , "RUNOFF" , "CASCADES" , "ARTILLERY" , "BUNKER" , "AIRBASE" , "RELAY" , "WETLANDS" , "BRIDGES" , "SWAMPS" , "HYDRODAM" , "REPULSOR" , "WATERTREATMENT" , "MARKET" , "SKULLTOWN" , "THUNDERDOME"];


const maxGuess = 10;

var guessedLetters = [];
var pickedWord;
var guessingWord = [];
var guessLeft = 0;
var gameOver = false;
var gamesWon = 0;
var wrongLetters = [];
var gamesLost = 0;













function resetGame() {
    guessLeft = maxGuess;

    pickedWord = Math.floor(Math.random() * (words.length));

    guessedLetters = [];
    guessingWord = [];
    wrongLetters = [];


    for(var i = 0; i < words[pickedWord].length; i++) {
        guessingWord.push('_');
    }
    
    document.getElementById("play-again").style.cssText= "display: none";
    document.getElementById("you-lose").style.cssText= "display: none";
    document.getElementById("you-win").style.cssText= "display: none";
    
    
    updateDisplay();


};

function updateDisplay() {

    document.getElementById("totalWins").innerText = gamesWon;
    document.getElementById("totalLoses").innerText = gamesLost;

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

    for(var i = 0; i < words[pickedWord].length; i++) {
        if(words[pickedWord][i] === letter) {
            positions.push(i);
            
            
        }
         
    }

    document.getElementById("wrongLetters").innerText = wrongLetters 
    
    if(positions.length <=0) {
        wrongLetters.push(letter);
        guessLeft--;
        

        
    } else {

        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
}

function checkWin() {

    if(guessingWord.indexOf("_") === -1) {
        gamesWon++;
        document.getElementById("you-win").style.cssText = "display: block";
        document.getElementById("play-again").style.cssText = "display: block";
        gameOver = true;
        
    }
    
};

function checkLoss() {
    if(guessLeft <=0) {
        gamesLost++;
        document.getElementById("you-lose").style.cssText = "display: block";
        document.getElementById("play-again").style.cssText = "display: block";
        gameOver = true;
        
    }
    
};

function makeGuess(letter) {
    if(guessLeft > 0) {

        if(guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
};

document.onkeydown = function(event) {
    if(gameOver) {
        resetGame();
        gameOver = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <=90) {

            makeGuess(event.key.toUpperCase());
            updateDisplay();
            checkWin();
            checkLoss();
        }
    }
};