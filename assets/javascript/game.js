const words = ["caustic" , "lifeline" , "gibraltar" , "bloodhound" , "mirage" , "wraith" , "bangalore" , "pathfinder" , "apexlegends" , "mastiff" , "peacekeeper" , "spitfire" , "wingman" , "kraber" , "longbow" , "devotion" , "hemlok" , "havoc" , "flatline" , "tripletake" , "alternator" , "prowler" , "mozambique" , "syringe" , "medkit", "phoenixkit" , "shieldcell" , "shieldbattery" , "ultimateaccelerant" , "bodyshield" , "helmet" , "knockdownshield" , "backpack" , "slumlakes" , "thepit" , "runoff" , "cascades" , "artillery" , "bunker" , "airbase" , "relay" , "wetlands" , "bridges" , "swamps" , "hydrodam" , "repulsor" , "watertreatment" , "market" , "skulltown" , "thunderdome"];
let randomNum = [Math.floor(Math.random() * words.length)];
let pickedWord = words[randomNum];
let underscore = [];
let rightword = [];
let wrongword = [];
let underscores = [];
const maxGuess = 10;

let docUnderScore = document.getElementsByClassName('underScore');

console.log(pickedWord);

let generateUnderscore = () => {
    for(let i = 0; i < pickedWord.length; i++) {
        underscore.push('_');
        
    }
    return underscore;
}

console.log(generateUnderscore());

document.addEventListener('keypress' , (event) => {
    console.log(event);
    
    let keyword = String.fromCharCode(event.keyCode);
    console.log(pickedWord.indexOf(keyword));
    
    if(pickedWord.indexOf(keyword) > -1) {
        rightword.push(keyword);
        
        underscores[pickedWord.indexOf(keyword)] = keyword;
        
        
        if(underscores.join('') == pickedWord) {
            alert('You Win!');
        }
        
        console.log(rightword);

        wrongword.push(keyword);
        
        console.log(wrongword);
    }
    document.getElementsByClassName(underscores);
    console.log(underscores);
    
    


});