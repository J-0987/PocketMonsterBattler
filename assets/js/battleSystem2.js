let playerMonsUsed = [];
let enemyMonsUsed = [];
let wltStringArray = [];
let wltCountArray = [];
let playerMonsCount = [];

const pokeCards = document.getElementById("poke-cards");

const pokemonName = 3;


function startPokemonBattler(){
    generateNewMon();
    generateEnemyMon();
}

function fightPokemon(){
    localStorage.getItem();
    localStorage.getItem();
    
    typeChecker(monType);

}


function generateNewMon() {
    const randomPlayerMon = Math.random(1, 151);
    fetchPokemon(randomPlayerMon);
}

function generateEnemyMon() {
    const randomyEnemyMon = Math.random(1, 151);
    fetchEnemyPokemon(randomyEnemyMon);
}

async function fetchPokemon(pokemonName){

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const monName = data.name
        const monType = data.types[0]["type"].name
        const pokemonSprite = data.sprites.other["official-artwork"].front_default;

        console.log(monName)
        console.log(monType)
        console.log(pokemonSprite)
    }
    catch(error){
        console.error(error);
    }
}

async function fetchEnemyPokemon(pokemonName){

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const enemyMonName = data.name
        const enemyMonType = data.types[0]["type"].name
        const enemyPokemonSprite = data.sprites.other["official-artwork"].front_default;

        localStorage.setItem("")

        console.log(enemyMonName)
        console.log(enemyMonType)
        console.log(enemyPokemonSprite)
    }
    catch(error){
        console.error(error);
    }
}

fetchPokemon(pokemonName);

// Get Pokemon Damage Type

function typeChecker(monType) {
    switch (monType) {
        case 'normal':
            normalCheck();
        case 'fire':
            fireCheck();
        case 'water':
            waterCheck();
        case 'electric':
            electricCheck();
        case 'grass':
            grassCheck();
        case 'ice':
            iceCheck()
        case 'fighting':
            fightingCheck();
        case 'poison':
            poisonCheck();
        case 'ground':
            groundCheck();
        case 'flying':
            flyingCheck();
        case 'psychic':
            psychicCheck();
        case 'bug':
            bugCheck();
        case 'rock':
            rockCheck();
        case 'ghost':
            ghostCheck();
        case 'dragon':
            dragonCheck();
        case 'dark':
            darkCheck();
        case 'steel':
            steelCheck();
        case 'fairy':
            fairyCheck();
        default:
            console.log("ran the check");
    }
}

function normalCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        tieCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        tieCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        lossCount++
    } else if (enemyType === 'ghost') {
        lossCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function fireCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        lossCount++
    } else if (enemyType === 'water') {
        lossCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        winCount++
    } else if (enemyType === 'ice') {
        winCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        winCount++
    } else if (enemyType === 'rock') {
        lossCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        lossCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        winCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function waterCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        winCount++
    } else if (enemyType === 'water') {
        lossCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        lossCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        winCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        winCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        lossCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        tieCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function electricCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        tieCount++
    } else if (enemyType === 'water') {
        winCount++
    } else if (enemyType === 'electric') {
        lossCount++
    } else if (enemyType === 'grass') {
        lossCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        lossCount++
    } else if (enemyType === 'flying') {
        winCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        tieCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        lossCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        tieCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function grassCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        lossCount++
    } else if (enemyType === 'water') {
        winCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        lossCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        lossCount++
    } else if (enemyType === 'ground') {
        winCount++
    } else if (enemyType === 'flying') {
        lossCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        lossCount++
    } else if (enemyType === 'rock') {
        winCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        lossCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function iceCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        lossCount++
    } else if (enemyType === 'water') {
        lossCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        winCount++
    } else if (enemyType === 'ice') {
        lossCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        winCount++
    } else if (enemyType === 'flying') {
        winCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        tieCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        winCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function fightingCheck() {
    if (enemyType === 'normal') {
        winCount++
    } else if (enemyType === 'fire') {
        tieCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        tieCount++
    } else if (enemyType === 'ice') {
        winCount
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        lossCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        lossCount++
    } else if (enemyType === 'psychic') {
        lossCount++
    } else if (enemyType === 'bug') {
        lossCount++
    } else if (enemyType === 'rock') {
        winCount++
    } else if (enemyType === 'ghost') {
        lossCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        winCount++
    } else if (enemyType === 'steel') {
        winCount++
    } else (enemyType === 'fairy');
        lossCount++
}

function poisonCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        tieCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        winCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        lossCount++
    } else if (enemyType === 'ground') {
        lossCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        lossCount++
    } else if (enemyType === 'ghost') {
        lossCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        winCount++
}

function groundCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        winCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        winCount++
    } else if (enemyType === 'grass') {
        lossCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        winCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        lossCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        lossCount++
    } else if (enemyType === 'rock') {
        winCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        winCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function flyingCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        tieCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        lossCount++
    } else if (enemyType === 'grass') {
        winCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        winCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        winCount++
    } else if (enemyType === 'rock') {
        lossCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function psychicCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        tieCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        tieCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        winCount++
    } else if (enemyType === 'poison') {
        winCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        lossCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        tieCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        lossCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function bugCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        lossCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        winCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        lossCount++
    } else if (enemyType === 'poison') {
        lossCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        lossCount++
    } else if (enemyType === 'psychic') {
        winCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        tieCount++
    } else if (enemyType === 'ghost') {
        lossCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        winCount
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        lossCount++
}

function rockCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        winCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        tieCount++
    } else if (enemyType === 'ice') {
        winCount++
    } else if (enemyType === 'fighting') {
        lossCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        lossCount++
    } else if (enemyType === 'flying') {
        winCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        winCount++
    } else if (enemyType === 'rock') {
        tieCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function ghostCheck() {
    if (enemyType === 'normal') {
        lossCount++
    } else if (enemyType === 'fire') {
        tieCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        tieCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        winCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        tieCount++
    } else if (enemyType === 'ghost') {
        winCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        lossCount++
    } else if (enemyType === 'steel') {
        tieCount++
    } else (enemyType === 'fairy');
        tieCount++
}

function dragonCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        tieCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        tieCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        tieCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        winCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        lossCount++
}

function darkCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        tieCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        tieCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        lossCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        winCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        tieCount++
    } else if (enemyType === 'ghost') {
        winCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        lossCount++
    } else if (enemyType === 'steel') {
        tieCount++
    } else (enemyType === 'fairy');
        lossCount++
}

function steelCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        lossCount++
    } else if (enemyType === 'water') {
        lossCount++
    } else if (enemyType === 'electric') {
        lossCount++
    } else if (enemyType === 'grass') {
        tieCount++
    } else if (enemyType === 'ice') {
        winCount++
    } else if (enemyType === 'fighting') {
        tieCount++
    } else if (enemyType === 'poison') {
        tieCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        winCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        tieCount++
    } else if (enemyType === 'dark') {
        tieCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        winCount++
}

function fairyCheck() {
    if (enemyType === 'normal') {
        tieCount++
    } else if (enemyType === 'fire') {
        lossCount++
    } else if (enemyType === 'water') {
        tieCount++
    } else if (enemyType === 'electric') {
        tieCount++
    } else if (enemyType === 'grass') {
        tieCount++
    } else if (enemyType === 'ice') {
        tieCount++
    } else if (enemyType === 'fighting') {
        winCount++
    } else if (enemyType === 'poison') {
        lossCount++
    } else if (enemyType === 'ground') {
        tieCount++
    } else if (enemyType === 'flying') {
        tieCount++
    } else if (enemyType === 'psychic') {
        tieCount++
    } else if (enemyType === 'bug') {
        tieCount++
    } else if (enemyType === 'rock') {
        tieCount++
    } else if (enemyType === 'ghost') {
        tieCount++
    } else if (enemyType === 'dragon') {
        winCount++
    } else if (enemyType === 'dark') {
        winCount++
    } else if (enemyType === 'steel') {
        lossCount++
    } else (enemyType === 'fairy');
        tieCount++
}