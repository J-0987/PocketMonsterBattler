const pokeCards = document.getElementById("poke-cards");

function getPokemon() {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=10`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                for (let i = 0; i < 10; i++) {
                    const newUrl = data.results[i].url;

                    console.log(newUrl);

                    fetch(newUrl)
                        .then((response) => response.json())
                        .then((newData) => {
                            console.log(data.results[i].name);
                            console.log(newData.types[0]["type"].name);
                            console.log(newData.sprites.front_default);

                            pokeCards.innerHTML = `
                                <div class="card bg-secondary text-light text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">${data.results[i].name}</h5>                                        
                                        <h5 class="card-title">${newData.types[0]["type"].name}</h5>                                        
                                        <img src="${newData.sprites.front_default}" alt="" />                                       
                                    </div>
                                </div>
                          `;
                        })
                        .catch((error) => {
                            console.error("Error fetching new data:", error);
                        });
                }
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

getPokemon();

// Get Pokemon Damage Type
function getDamage() {
    let damageUrl = `https://pokeapi.co/api/v2/type/1`;

    fetch(damageUrl)
        .then((response) => response.json())
        .then((newData) => {

            console.log(newData.damage_relations["double_damage_to"][0].name);
            console.log(newData.damage_relations["no_damage_to"]);
            console.log(newData.damage_relations["half_damage_to"]);
        })
        .catch((error) => {
            console.error("Error fetching new data:", error);
        });
}

getDamage();


function typeChecker() {
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