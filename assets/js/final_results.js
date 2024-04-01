document.addEventListener("DOMContentLoaded", function () {

  const top5battlers = [];
  // Get html elements for displaying
  var pokemonNameEL = document.getElementById('result-pokemon-name');
  var pokemonImageEL = document.getElementById('result-pokemon-image-figure');
  var pokemonTypeEl = document.getElementById('result-pokemon-type');
  var topBattlersList = document.getElementById('top-battlers');

  // Get results object
  const resultsObject = JSON.parse(window.localStorage.getItem("results"));
  console.log(resultsObject);

  // Function to populate the results section
  function populateResultsSection(results) {
    // Update the content with the results
    if (pokemonNameEL && results[0].name) {
      pokemonNameEL.textContent = results[0].name;
      top5battlers.unshift(results[0].name); // Newest first
      console.log(top5battlers);
      localStorage.setItem("top5", JSON.stringify(top5battlers)); // Store as string
    }

    if (pokemonImageEL && results[0].image) {
      var img = document.createElement('img');
      img.src = results[0].image;
      img.alt = results[0].name + " image";
      pokemonImageEL.innerHTML = ''; // Clear existing image
      pokemonImageEL.appendChild(img);
    }

    if (pokemonTypeEl && results[0].type) {
      pokemonTypeEl.textContent = "Type: " + results[0].type;
    }
    
    // Add each result's Pokémon name to top5battlers array
    results.forEach((result) => {
      top5battlers.unshift(result.name); // Newest first
    });

    // Update top 5 battlers list
    populateTopBattlers(top5battlers);
  }

  // Function to populate top 5 battlers
  function populateTopBattlers(battlers) {
    // Clear existing list items
    topBattlersList.innerHTML = '';

    // Populate top 5 battlers
    battlers.slice(0, 5).forEach((battler) => { // Only top 5
      const listItem = document.createElement('li');
      listItem.textContent = battler;
      topBattlersList.appendChild(listItem);
    });
  }

  // Populate the results section
  populateResultsSection(resultsObject);
});
