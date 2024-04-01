const bodySelector =  document.querySelector('body');
const startBtn = document.querySelector('#start-button');
const carouselSection = document.querySelector('#carousel-section');
const gameSection = document.querySelector('#game-section');
const finalResultsBtn = document.querySelector('#results-page');
//Update time

function displayTime () {
  const today = dayjs();
  $('#day').text(today.format('dddd, MM/D/YY, h:mm:ss a'));
} 
setInterval(displayTime, 1000);

// Access toggle switch HTML element
// document.addEventListener('DOMContentLoaded', function() {
  // Get the <i> element
  var toggleDarkIcon = document.querySelector('.toggle-dark');

  // Add event listener for 'click' event
  toggleDarkIcon.addEventListener('click', function() {
    // Check if the button is clicked
    if (this.classList.contains("fa-sun")) {
        // If the button is clicked and it has the "fa-sun" class,
        // it means the dark mode is currently off. So, we'll turn it on.

        // Toggle the "dark" class on the body element
        document.body.classList = "bg-black";

        // Toggle the visibility of the sun and moon icons
        this.classList.remove("fa-sun");
        this.classList.add("fa-moon");

    } else {
        // If the button is clicked and it has the "fa-moon" class,
        // it means the dark mode is currently on. So, we'll turn it off.

        // Toggle the "dark" class on the body element
        document.body.classList = "bg-gradient-to-b from-[#c7a008] to-yellow-100 dark:bg-purple-950";

        // Toggle the visibility of the sun and moon icons
        this.classList.remove("fa-moon");
        this.classList.add("fa-sun");

        // Toggle the background color of elements with class "made-dark"
        var madeDarkElements = document.querySelectorAll('.made-dark');
        madeDarkElements.forEach(function(element) {
            element.classList.remove('dark-background');
        });
    }
});

  getLocalStorageFinalResults();
// });

//Start button functionality -2 
function handleClickStart() {
  if (gameSection.classList.contains('hidden')) {
    gameSection.classList.remove('hidden');
    carouselSection.classList.remove('hidden');
    initCarousel();
    startBtn.classList.add('hidden'); // Hide the start button    
  } 
  else {
    gameSection.classList.add('hidden');
    carouselSection.classList.add('hidden');
    startBtn.classList.remove('hidden'); // Show the start button
  }
}

startBtn.addEventListener('click', handleClickStart);


//Final stats button clicks to results page
function goToResults(){
  document.location.href = "results.html";
}

finalResultsBtn.addEventListener('click', goToResults);


// On the final result page
function getLocalStorageFinalResults() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
  }
}


document.addEventListener('DOMContentLoaded', function() {
    // Get the checkbox element
    var checkbox = document.getElementById('checkbox-slider');

    // Add event listener for 'click' event
    checkbox.addEventListener('click', function() {
        if (this.checked) { 
            console.log('Checkbox is checked');
            document.body.setAttribute("class", "dark");
        } else {
            console.log('Checkbox is not checked');
            document.body.removeAttribute("class");
        }
    });
});