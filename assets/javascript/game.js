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



var correctGuess = document.getElementById("correctGuess");
var loseAudio = document.getElementById("loseAudio");
var startAudio  = document.getElementById("startAudio");
var winAudio  = document.getElementById("winAudio");
var wrongGuess = document.getElementById("wrongGuess");









// This function is for starting and resetting the game when needed

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
 // This function is for changing the display of the page
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
// This function is to when a letter is guessed it will push the letter to the appropriate variable
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
// This function is to check our victory conditions
function checkWin() {

    if(guessingWord.indexOf("_") === -1) {
        gamesWon++;
        document.getElementById("you-win").style.cssText = "display: block";
        document.getElementById("play-again").style.cssText = "display: block";
        gameOver = true;
        
    }
    
};
// This function is to check our defeat conditions
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
// This is for keeping track of what keystrokes you use
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