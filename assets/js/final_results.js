document.addEventListener('DOMContentLoaded', function() {
    // Function to populate the results section
    function populateResultsSection(results) {
        // Select the elements to be updated
        const pokemonNameElement = document.querySelector('.flex.p-2 h2');
        const pokemonImageElement = document.querySelector('.overflow-hidden img');
        const top5PokemonElements = document.querySelectorAll('.divide-y li:nth-child(n+2) h4');
        
        // Update the content with the results
        if (pokemonNameElement) {
            pokemonNameElement.textContent = results[0].name;
        }
        if (pokemonImageElement && results[0].name) {
            pokemonImageElement.src = `./assets/images/${results[0].name}.png`;
        }
        
        // Populate top 5 pokemon
        top5PokemonElements.forEach((element, index) => {
            if (results[index]) {
                element.textContent = results[index].name;
            }
        });
    }
    
    // Get the results from local storage
    const results = JSON.parse(localStorage.getItem('results'));
    
    // Populate the results section
    if (results) {
        populateResultsSection(results);
    }
});
