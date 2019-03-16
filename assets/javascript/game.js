var words = ["caustic" , "lifeline" , "gibraltar" , "bloodhound" , "mirage" , "wraith" , "bangalore" , "pathfinder" , "apexlegends" , "mastiff" , "peacekeeper" , "spitfire" , "wingman" , "kraber" , "longbow" , "devotion" , "hemlok" , "havoc" , "flatline" , "tripletake" , "alternator" , "prowler" , "mozambique" , "syringe" , "medkit", "phoenixkit" , "shieldcell" , "shieldbattery" , "ultimateaccelerant" , "bodyshield" , "helmet" , "knockdownshield" , "backpack" , "slumlakes" , "thepit" , "runoff" , "cascades" , "artillery" , "bunker" , "airbase" , "relay" , "wetlands" , "bridges" , "swamps" , "hydrodam" , "repulsor" , "watertreatment" , "market" , "skulltown" , "thunderdome"];
var guessedLetters = [];
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
    console.log(currentWordIndex);

    guessedLetters = [];
    guessingWord = [];


    for(var i = 0; i < words[currentWordIndex].length; i++) {
        guessingWord.push('_');
    }


}