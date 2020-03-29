const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startButton = document.getElementsByClassName("btn__reset")[0];

let lives = document.getElementsByClassName("tries");

let incorrectGuesses = 0;


// 5 different phrases
const phrases = [
    "You Can't Teach an Old Dog New Tricks",
    "There's No I in Team",
    "Wake Up Call",
    "Quick and Dirty",
    "What Goes Up Must Come Down"
];


// return a random phrase from an array
function getRandomPhraseAsArray (arr) {

}

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {

}

// check if a letter is in the place
const checkLetter = button => {

}

// check if the game has been won or lost 
const checkwin = () => {

}

// listen for the start game button to be pressed
startButton.addEventListener('click',  () => {
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'none';
}); 

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});




