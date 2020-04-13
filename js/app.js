const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('overlay')[0];
let lives = document.getElementsByClassName('tries');
const misses = document.querySelector('.misses');
let missed = 0;


// 5 different phrases
const phrases = [
    "You Cant Teach an Old Dog New Tricks",
    "Theres No I in Team",
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
const letters = document.querySelectorAll('.letter');

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
  let numOfLetters = document.querySelectorAll('.letter').length;
  let numOfCorrectLetters = document.querySelectorAll('.show').length;
  let overlay = document.getElementById("overlay");
  if (numOfCorrectLetters === numOfLetters) {
    overlay.className = 'win';
    overlay.textContent = 'Congratulation You Won! 😃'
    overlay.style.display = 'flex';
  }
  else if (missed >= 5) {
    overlay.className = 'lose';
    overlay.textContent = 'Sorry You Lost! 😔'
    overlay.style.display = 'flex';
  }
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
      let lifeGone = lives[missed];
      lifeGone.children[0].src = "images/lostHeart.png";
      missed++;
    }
    checkwin();
  }
});




