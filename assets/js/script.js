
const bodySelector =  document.querySelector('body');
const gameSection = document.querySelector('#game-section')
const startBtn = document.querySelector('#start-button')

//Update time

function displayTime () {
  const today = dayjs();
  $('#day').text(today.format('dddd, MM/D/YY, h:mm:ss a'));
} 
setInterval(displayTime, 1000);

// // method 1
// const darkToggle = document.querySelector('.toggle-dark');
// darkToggle.addEventListener ('click', function () {
//     document.documentElement.classList.toggle('dark');
//     bodySelector.setAttribute('body', 'dark');
  
// }
// )

// / Access toggle switch HTML element
const themeSwitcher = document.querySelector('.toggle-dark');
const container = document.querySelector('body');
const header = document.querySelector('header');
// Set default mode to dark
let mode = 'dark';
// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
    // header.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'bg-gradient-to-b from-[#c7a008] to-yellow-100 dark:bg-black');
    // header.setAttribute('class', 'dark');
  }
});


//Start button functionality -2 
function handleClickStart() {
  if (gameSection.classList.contains('hidden')) {
    gameSection.classList.remove ('hidden');
    startBtn.classList.add('hidden'); // Hide the start button
  } else {
    
    gameSection.classList.add('hidden');
    startBtn.classList.remove('hidden'); // Show the start button
   
  }
}


startBtn.addEventListener('click', handleClickStart);

//Final stats button clicks to results page

