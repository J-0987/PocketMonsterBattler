document.addEventListener("DOMContentLoaded", function () {
  const fightButton = document.getElementById("fight-button");
  fightButton.addEventListener("click", function () {
    fightPokemon();
  });

  const changeBtn = document.getElementById("change-pokemon-btn");
  changeBtn.addEventListener("click", function () {
    console.log("Change pokemon btn clicked");
    // Clear existing pokemon data
    clearPokemonData();
    // Fetch new random pokemon data
    const leftPokemon = getRandomInt(1, 151);
    const rightPokemon = getRandomInt(1, 151);
    fetchPokemon(leftPokemon);
    fetchEnemyPokemon(rightPokemon);
  });
  // render results table for initial load
  displayResults();
});

// Set win loss and tie default value
let win = false;
let loss = false;
let tie = false;

// Generate random pokemon between 1 and 151
const leftPokemon = getRandomInt(1, 151);
const rightPokemon = getRandomInt(1, 151);

// Fetch pokemon data
fetchPokemon(leftPokemon);
fetchEnemyPokemon(rightPokemon);

// Left Card get data from api
async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const monName = data.name;
    const monType = data.types[0]["type"].name;
    const monImage = data.sprites.other["official-artwork"].front_default;

    const nameDiv = document.getElementById("left-card-name");
    const typeDiv = document.getElementById("left-card-type");
    const imageDiv = document.getElementById("left-card-image");
    nameDiv.textContent = monName.toUpperCase();
    typeDiv.textContent = "Type:" + " " + monType;

    let imgElement = document.createElement("img");
    imgElement.className = "";
    imgElement.src = monImage;
    imageDiv.appendChild(imgElement);

    // save left pokemon details in local storage
    let leftPokemon = { name: monName, type: monType, image: monImage };
    localStorage.setItem("left-pokemon", JSON.stringify(leftPokemon));

  } catch (error) {
    console.error(error);
  }
}

// Right Card get data from api
async function fetchEnemyPokemon(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const enemyMonName = data.name;
    const enemyMonType = data.types[0]["type"].name;
    const enemyMonImage = data.sprites.other["official-artwork"].front_default;

    const nameDiv = document.getElementById("right-card-name");
    const typeDiv = document.getElementById("right-card-type");
    const imageDiv = document.getElementById("right-card-image");

    nameDiv.textContent = enemyMonName.toUpperCase();
    typeDiv.textContent = "Type:" + " " + enemyMonType;

    let imgElement = document.createElement("img");
    imgElement.className = "";
    imgElement.src = enemyMonImage;
    imageDiv.appendChild(imgElement);

    // save right pokemon details in local storage
    let rightPokemon = {
      name: enemyMonName,
      type: enemyMonType,
      image: enemyMonImage,
    };
    localStorage.setItem("right-pokemon", JSON.stringify(rightPokemon));
  } catch (error) {
    console.error(error);
  }
}

// determine winner and update local storage with match results
function fightPokemon() {
  let results = JSON.parse(localStorage.getItem("results")) || [];
  let leftPokemon = JSON.parse(localStorage.getItem("left-pokemon"));
  let rightPokemon = JSON.parse(localStorage.getItem("right-pokemon"));
  let leftPokemonResult = "";
  let rightPokemonResult = "";

  typeChecker(leftPokemon.type, rightPokemon.type);

  // Check win, loss and tie status
  if (win === true) {
    leftPokemonResult = "WIN";
    rightPokemonResult = "LOSS";
  } else if (loss === true) {
    leftPokemonResult = "LOSS";
    rightPokemonResult = "WIN";
  } else if (tie === true) {
    leftPokemonResult = "TIE";
    rightPokemonResult = "TIE";
  } else {
    console.log("INVALID RESULT");
  }

  // create object for left and right results
  let leftFightResults = {
    elementId: "left-card-results",
    name: leftPokemon.name,
    type: leftPokemon.type,
    result: leftPokemonResult,
    image: leftPokemon.image,
  };
  let rightFightResults = {
    elementId: "right-card-results",
    name: rightPokemon.name,
    type: rightPokemon.type,
    result: rightPokemonResult,
    image: rightPokemon.image,
  };

  // update results
  results.push(leftFightResults);
  results.push(rightFightResults);

  // save results in local storage
  localStorage.setItem("results", JSON.stringify(results));
  // render results table
  displayResults();
}

// Get Pokemon Damage Type
function typeChecker(leftPokemonType, rightPokemonType) {
  switch (leftPokemonType) {
    case "normal":
      normalCheck(rightPokemonType);
      break;
    case "fire":
      fireCheck(rightPokemonType);
      break;
    case "water":
      waterCheck(rightPokemonType);
      break;
    case "electric":
      electricCheck(rightPokemonType);
      break;
    case "grass":
      grassCheck(rightPokemonType);
      break;
    case "ice":
      iceCheck(rightPokemonType);
      break;
    case "fighting":
      fightingCheck(rightPokemonType);
      break;
    case "poison":
      poisonCheck(rightPokemonType);
      break;
    case "ground":
      groundCheck(rightPokemonType);
      break;
    case "flying":
      flyingCheck(rightPokemonType);
      break;
    case "psychic":
      psychicCheck(rightPokemonType);
      break;
    case "bug":
      bugCheck(rightPokemonType);
      break;
    case "rock":
      rockCheck(rightPokemonType);
      break;
    case "ghost":
      ghostCheck(rightPokemonType);
      break;
    case "dragon":
      dragonCheck(rightPokemonType);
      break;
    case "dark":
      darkCheck(rightPokemonType);
      break;
    case "steel":
      steelCheck(rightPokemonType);
      break;
    case "fairy":
      fairyCheck(rightPokemonType);
      break;
    default:
      console.log("Type not found");
  }
}

function normalCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    tie = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    tie = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    loss = true;
  } else if (enemyType === "ghost") {
    loss = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function fightingCheck(enemyType) {
  if (enemyType === "normal") {
    win = true;
  } else if (enemyType === "fire") {
    tie = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    tie = true;
  } else if (enemyType === "ice") {
    win = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    loss = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    loss = true;
  } else if (enemyType === "psychic") {
    loss = true;
  } else if (enemyType === "bug") {
    loss = true;
  } else if (enemyType === "rock") {
    win = true;
  } else if (enemyType === "ghost") {
    loss = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    win = true;
  } else if (enemyType === "steel") {
    win = true;
  } else if (enemyType === "fairy") {
    loss = true;
  }
}

function fireCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    loss = true;
  } else if (enemyType === "water") {
    loss = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    win = true;
  } else if (enemyType === "ice") {
    win = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    win = true;
  } else if (enemyType === "rock") {
    loss = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    loss = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    win = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function waterCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    win = true;
  } else if (enemyType === "water") {
    loss = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    loss = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    win = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    win = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    loss = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    tie = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function electricCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    tie = true;
  } else if (enemyType === "water") {
    win = true;
  } else if (enemyType === "electric") {
    loss = true;
  } else if (enemyType === "grass") {
    loss = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    loss = true;
  } else if (enemyType === "flying") {
    win = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    tie = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    loss = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    tie = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function grassCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    loss = true;
  } else if (enemyType === "water") {
    win = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    loss = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    loss = true;
  } else if (enemyType === "ground") {
    win = true;
  } else if (enemyType === "flying") {
    loss = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    loss = true;
  } else if (enemyType === "rock") {
    win = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    loss = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function iceCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    loss = true;
  } else if (enemyType === "water") {
    loss = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    win = true;
  } else if (enemyType === "ice") {
    loss = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    win = true;
  } else if (enemyType === "flying") {
    win = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    tie = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    win = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function poisonCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    tie = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    win = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    loss = true;
  } else if (enemyType === "ground") {
    loss = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    loss = true;
  } else if (enemyType === "ghost") {
    loss = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    win = true;
  }
}

function groundCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    win = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    win = true;
  } else if (enemyType === "grass") {
    loss = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    win = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    loss = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    loss = true;
  } else if (enemyType === "rock") {
    win = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    win = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function flyingCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    tie = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    loss = true;
  } else if (enemyType === "grass") {
    win = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    win = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    win = true;
  } else if (enemyType === "rock") {
    loss = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function psychicCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    tie = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    tie = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    win = true;
  } else if (enemyType === "poison") {
    win = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    loss = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    tie = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    loss = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function bugCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    loss = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    win = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    loss = true;
  } else if (enemyType === "poison") {
    loss = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    loss = true;
  } else if (enemyType === "psychic") {
    win = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    tie = true;
  } else if (enemyType === "ghost") {
    loss = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    win = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    loss = true;
  }
}

function rockCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    win = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    tie = true;
  } else if (enemyType === "ice") {
    win = true;
  } else if (enemyType === "fighting") {
    loss = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    loss = true;
  } else if (enemyType === "flying") {
    win = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    win = true;
  } else if (enemyType === "rock") {
    tie = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function ghostCheck(enemyType) {
  if (enemyType === "normal") {
    loss = true;
  } else if (enemyType === "fire") {
    tie = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    tie = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    win = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    tie = true;
  } else if (enemyType === "ghost") {
    win = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    loss = true;
  } else if (enemyType === "steel") {
    tie = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

function dragonCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    tie = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    tie = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    tie = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    win = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    loss = true;
  }
}

function darkCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    tie = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    tie = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    loss = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    win = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    tie = true;
  } else if (enemyType === "ghost") {
    win = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    loss = true;
  } else if (enemyType === "steel") {
    tie = true;
  } else if (enemyType === "fairy") {
    loss = true;
  }
}

function steelCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    loss = true;
  } else if (enemyType === "water") {
    loss = true;
  } else if (enemyType === "electric") {
    loss = true;
  } else if (enemyType === "grass") {
    tie = true;
  } else if (enemyType === "ice") {
    win = true;
  } else if (enemyType === "fighting") {
    tie = true;
  } else if (enemyType === "poison") {
    tie = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    win = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    tie = true;
  } else if (enemyType === "dark") {
    tie = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    win = true;
  }
}

function fairyCheck(enemyType) {
  if (enemyType === "normal") {
    tie = true;
  } else if (enemyType === "fire") {
    loss = true;
  } else if (enemyType === "water") {
    tie = true;
  } else if (enemyType === "electric") {
    tie = true;
  } else if (enemyType === "grass") {
    tie = true;
  } else if (enemyType === "ice") {
    tie = true;
  } else if (enemyType === "fighting") {
    win = true;
  } else if (enemyType === "poison") {
    loss = true;
  } else if (enemyType === "ground") {
    tie = true;
  } else if (enemyType === "flying") {
    tie = true;
  } else if (enemyType === "psychic") {
    tie = true;
  } else if (enemyType === "bug") {
    tie = true;
  } else if (enemyType === "rock") {
    tie = true;
  } else if (enemyType === "ghost") {
    tie = true;
  } else if (enemyType === "dragon") {
    win = true;
  } else if (enemyType === "dark") {
    win = true;
  } else if (enemyType === "steel") {
    loss = true;
  } else if (enemyType === "fairy") {
    tie = true;
  }
}

// Utilities to get random pokemon number
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// loop over local storage results and display them
function displayResults() {
  const localResults = JSON.parse(localStorage.getItem("results"));
  if (!localResults) {
    return;
  }
  // Clear everything
  document.getElementById("left-card-results").innerHTML = "";
  document.getElementById("right-card-results").innerHTML = "";

  for (let i = 0; i < localResults.length; i++) {
    const localResult = localResults[i];
    const id = localResult.elementId;
    const name = localResult.name;
    const result = localResult.result;

    appendResult(id, name, result);
  }
}

// Display one item at a time
function appendResult(elementId, pokemonName, pokemonResult) {
  let tBodyElement = document.getElementById(elementId);
  let trElement = document.createElement("tr");
  let tdNameElement = document.createElement("td");
  let tdResultElement = document.createElement("td");

  tdNameElement.className = "table-r";
  tdResultElement.className = "table-r";

  tdNameElement.textContent = pokemonName;
  tdResultElement.textContent = pokemonResult;

  trElement.appendChild(tdNameElement);
  trElement.appendChild(tdResultElement);

  tBodyElement.appendChild(trElement);
}

function clearPokemonData() {
  // Clear existing left card data
  document.getElementById("left-card-name").textContent = "";
  document.getElementById("left-card-type").textContent = "";
  document.getElementById("left-card-image").innerHTML = "";

  // Clear existing right card data
  document.getElementById("right-card-name").textContent = "";
  document.getElementById("right-card-type").textContent = "";
  document.getElementById("right-card-image").innerHTML = "";

  // Clear local storage for existing pokemon details
  localStorage.removeItem("left-pokemon");
  localStorage.removeItem("right-pokemon");
}
