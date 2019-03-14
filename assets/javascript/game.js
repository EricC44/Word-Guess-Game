const words = ["Caustic" , "Lifeline" , "Gibraltar" , "Bloodhound" , "Mirage" , "Wraith" , "Bangalore" , "Pathfinder" , "ApexLegends" , "Mastiff" , "Peacekeeper" , "Spitfire" , "Wingman" , "Kraber" , "Longbow" , "Devotion" , "Hemlok" , "Havoc" , "Flatline" , "TripleTake" , "Alternator" , "Prowler" , "Mozambique" , "Syringe" , "MedKit", "PhoenixKit" , "ShieldCell" , "ShieldBattery" , "UltimateAccelerant" , "BodyShield" , "Helmet" , "KnockdownShield" , "Backpack" , "SlumLakes" , "ThePit" , "Runoff" , "Cascades" , "Artillery" , "Bunker" , "Airbase" , "Relay" , "Wetlands" , "Bridges" , "Swamps" , "HydroDam" , "Repulsor" , "WaterTreatment" , "Market" , "SkullTown" , "Thunderdome"];
let randomNum = [Math.floor(Math.random() * words.length)];
let pickedWord = words[randomNum];
let underscore = [];
let rightword = [];
let wrongword = [];
let underscore = [];
const maxGuess = 10;

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
        console.log(true);
    }
    


});