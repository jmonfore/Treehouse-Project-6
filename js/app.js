const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset')[0];
let lives = document.getElementsByClassName('tries');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
let missed = 0;




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
  return arr[Math.floor(Math.random() * arr.length)];
} 
getRandomPhraseAsArray(phrases);


// adds the letters of a string to the display

const phraseList = phrase.querySelector('ul');

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let listItem = document.createElement("li");
    listItem.textContent = arr[i];
    if (arr[i] !== ' ') {
      listItem.className = 'letter';
    } else {
      listItem.className = 'space';
    }
    phraseList.appendChild(listItem);
  }
}

  const phrasesArray = getRandomPhraseAsArray(phrases);

  addPhraseToDisplay(phrasesArray);


// check if a letter is in the place
const checkLetter = button => {
  let matched = null;

  letters.forEach(letter => {
    if (button === letter.textContent.toLowerCase()) {
      letter.classList.add('show');
      matched = true;
    }
  });

  return matched;
};

// check if the game has been won or lost 
const checkwin = () => {

}

// listen for the start game button to be pressed
startButton.addEventListener('click',  () => {
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'none';
}); 

// listen for the onscreen keyboard to be clicked
keyboard.addEventListener('click', event => {
  if (event.target.tagName === "BUTTON") {
    event.target.className = 'chosen';
    event.target.disabled = true;
    const match = checkLetter(event.target.textContent.toLowerCase());
    if (!match) {
      missed++;
      misses.textContent = missed;
    }
  }
});




