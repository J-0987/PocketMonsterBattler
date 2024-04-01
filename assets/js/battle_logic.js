// document.addEventListener("DOMContentLoaded", function () {

//     const fightButton = document.getElementById("fight-button");
//     fightButton.addEventListener("click", function(){
//         fightPokemon();    
//     });

//     // render results table for initial load
//     displayResults();
// });

// // Set win loss and tie default value
// let win = false;
// let loss = false;
// let tie = false;

// // Generate random pokemon between 1 and 151
// const leftPokemon = getRandomInt(1, 151);
// const rightPokemon = getRandomInt(1, 151);

// // Fetch pokemon data
// fetchPokemon(leftPokemon);
// fetchEnemyPokemon(rightPokemon);

// // Left Card get data from api
// async function fetchPokemon(pokemonName){
//     try{
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }

//         const data = await response.json();
//         const monName = data.name
//         const monType = data.types[0]["type"].name
//         const monImage = data.sprites.other["official-artwork"].front_default;

//         const nameDiv = document.getElementById("left-card-name")
//         const typeDiv = document.getElementById("left-card-type")
//         const imageDiv = document.getElementById("left-card-image")
//         nameDiv.textContent = monName.toUpperCase();
//         typeDiv.textContent = "Type:" + " " + monType;
        
//         let imgElement = document.createElement("img");
//         imgElement.className = "";
//         imgElement.src = monImage;
//         imageDiv.appendChild(imgElement);

//         // save left pokemon details in local storage
//         let leftPokemon = {name: monName, type: monType}
//         localStorage.setItem("left-pokemon", JSON.stringify(leftPokemon));


//     }
//     catch(error){
//         console.error(error);
//     }
// }

// // Right Card get data from api
// async function fetchEnemyPokemon(pokemonName){
//     try{
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }

//         const data = await response.json();
//         const enemyMonName = data.name
//         const enemyMonType = data.types[0]["type"].name
//         const enemyMonImage = data.sprites.other["official-artwork"].front_default;

//         const nameDiv = document.getElementById("right-card-name")
//         const typeDiv = document.getElementById("right-card-type")
//         const imageDiv = document.getElementById("right-card-image")

//         nameDiv.textContent = enemyMonName.toUpperCase();
//         typeDiv.textContent = "Type:" + " " + enemyMonType;
        
//         let imgElement = document.createElement("img");
//         imgElement.className = "";
//         imgElement.src = enemyMonImage;
//         imageDiv.appendChild(imgElement);

//         // save right pokemon details in local storage
//         let rightPokemon = {name: enemyMonName, type: enemyMonType}
//         localStorage.setItem("right-pokemon", JSON.stringify(rightPokemon));
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// // determine winner and update local storage with match results
// function fightPokemon(){
//     let results = JSON.parse(localStorage.getItem("results")) || [];
//     let leftPokemon = JSON.parse(localStorage.getItem("left-pokemon"));
//     let rightPokemon = JSON.parse(localStorage.getItem("right-pokemon"));
//     let leftPokemonResult = "";
//     let rightPokemonResult = "";
    
//     typeChecker(leftPokemon.type, rightPokemon.type);

//     // Check win, loss and tie status
//     if (win === true) {
//         leftPokemonResult = "WIN";    
//         rightPokemonResult = "LOSS"; 
//     }else if(loss === true){
//         leftPokemonResult = "LOSS";
//         rightPokemonResult = "WIN"; 
//     }else if(tie === true){
//         leftPokemonResult = "TIE";
//         rightPokemonResult = "TIE"; 
//     }else{
//         console.log("INVALID RESULT");
//     }

//     // create object for left and right results
//     let leftFightResults = {elementId: "left-card-results" ,name: leftPokemon.name, result: leftPokemonResult};
//     let rightFightResults = {elementId: "right-card-results" ,name: rightPokemon.name, result: rightPokemonResult};

//     // update results
//     results.push(leftFightResults);
//     results.push(rightFightResults);

//     // save results in local storage
//     localStorage.setItem("results", JSON.stringify(results));
//     // render results table
//     displayResults();
// }

// // Get Pokemon Damage Type
// function typeChecker(leftPokemonType, rightPokemonType) {
//     switch (leftPokemonType) {
//         case 'normal':
//             normalCheck(rightPokemonType);
//             break;
//         case 'fire':
//             fireCheck(rightPokemonType);
//             break;
//         case 'water':
//             waterCheck(rightPokemonType);
//             break;
//         case 'electric':
//             electricCheck(rightPokemonType);
//             break;
//         case 'grass':
//             grassCheck(rightPokemonType);
//             break;
//         case 'ice':
//             iceCheck(rightPokemonType)
//             break;
//         case 'fighting':
//             fightingCheck(rightPokemonType);
//             break;
//         case 'poison':
//             poisonCheck(rightPokemonType);
//             break;
//         case 'ground':
//             groundCheck(rightPokemonType);
//             break;
//         case 'flying':
//             flyingCheck(rightPokemonType);
//             break;
//         case 'psychic':
//             psychicCheck(rightPokemonType);
//             break;
//         case 'bug':
//             bugCheck(rightPokemonType);
//             break;
//         case 'rock':
//             rockCheck(rightPokemonType);
//             break;
//         case 'ghost':
//             ghostCheck(rightPokemonType);
//             break;
//         case 'dragon':
//             dragonCheck(rightPokemonType);
//             break;
//         case 'dark':
//             darkCheck(rightPokemonType);
//             break;
//         case 'steel':
//             steelCheck(rightPokemonType);
//             break;
//         case 'fairy':
//             fairyCheck(rightPokemonType);
//             break;
//         default:
//             console.log("NO POKEMON TYPE SELECTED");
//     }
// }

// // Compare types and determine result
// function normalCheck(rightPokemonType){
//     if(rightPokemonType === 'fighting' || rightPokemonType === 'rock'){
//         win = true;
//     }else if(rightPokemonType === 'ghost'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function fireCheck(rightPokemonType){
//     if(rightPokemonType === 'grass' || rightPokemonType === 'ice' || rightPokemonType === 'bug' || rightPokemonType === 'steel'){
//         win = true;
//     }else if(rightPokemonType === 'fire' || rightPokemonType === 'water' || rightPokemonType === 'rock' || rightPokemonType === 'dragon'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function waterCheck(rightPokemonType){
//     if(rightPokemonType === 'fire' || rightPokemonType === 'ground' || rightPokemonType === 'rock'){
//         win = true;
//     }else if(rightPokemonType === 'water' || rightPokemonType === 'grass' || rightPokemonType === 'dragon'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function electricCheck(rightPokemonType){
//     if(rightPokemonType === 'water' || rightPokemonType === 'flying'){
//         win = true;
//     }else if(rightPokemonType === 'electric' || rightPokemonType === 'grass' || rightPokemonType === 'dragon'){
//         loss = true;
//     }else if(rightPokemonType === 'ground'){
//         tie = true;
//     }
// }

// function grassCheck(rightPokemonType){
//     if(rightPokemonType === 'water' || rightPokemonType === 'ground' || rightPokemonType === 'rock'){
//         win = true;
//     }else if(rightPokemonType === 'fire' || rightPokemonType === 'grass' || rightPokemonType === 'poison' || rightPokemonType === 'flying' || rightPokemonType === 'bug' || rightPokemonType === 'dragon' || rightPokemonType === 'steel'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function iceCheck(rightPokemonType){
//     if(rightPokemonType === 'grass' || rightPokemonType === 'ground' || rightPokemonType === 'flying' || rightPokemonType === 'dragon'){
//         win = true;
//     }else if(rightPokemonType === 'fire' || rightPokemonType === 'water' || rightPokemonType === 'ice' || rightPokemonType === 'steel'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function fightingCheck(rightPokemonType){
//     if(rightPokemonType === 'normal' || rightPokemonType === 'ice' || rightPokemonType === 'rock' || rightPokemonType === 'dark' || rightPokemonType === 'steel'){
//         win = true;
//     }else if(rightPokemonType === 'poison' || rightPokemonType === 'flying' || rightPokemonType === 'psychic' || rightPokemonType === 'bug' || rightPokemonType === 'fairy'){
//         loss = true;
//     }else if(rightPokemonType === 'ghost'){
//         tie = true;
//     }
// }

// function poisonCheck(rightPokemonType){
//     if(rightPokemonType === 'grass' || rightPokemonType === 'fairy'){
//         win = true;
//     }else if(rightPokemonType === 'poison' || rightPokemonType === 'ground' || rightPokemonType === 'rock' || rightPokemonType === 'ghost'){
//         loss = true;
//     }else if(rightPokemonType === 'steel'){
//         tie = true;
//     }
// }

// function groundCheck(rightPokemonType){
//     if(rightPokemonType === 'fire' || rightPokemonType === 'electric' || rightPokemonType === 'poison' || rightPokemonType === 'rock' || rightPokemonType === 'steel'){
//         win = true;
//     }else if(rightPokemonType === 'grass' || rightPokemonType === 'bug'){
//         loss = true;
//     }else if(rightPokemonType === 'flying'){
//         tie = true;
//     }
// }

// function flyingCheck(rightPokemonType){
//     if(rightPokemonType === 'grass' || rightPokemonType === 'fighting' || rightPokemonType === 'bug'){
//         win = true;
//     }else if(rightPokemonType === 'electric' || rightPokemonType === 'rock' || rightPokemonType === 'steel'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function psychicCheck(rightPokemonType){
//     if(rightPokemonType === 'fighting' || rightPokemonType === 'poison'){
//         win = true;
//     }else if(rightPokemonType === 'psychic' || rightPokemonType === 'steel'){
//         loss = true;
//     }else if(rightPokemonType === 'dark'){
//         tie = true;
//     }
// }

// function bugCheck(rightPokemonType){
//     if(rightPokemonType === 'grass' || rightPokemonType === 'psychic' || rightPokemonType === 'dark'){
//         win = true;
//     }else if(rightPokemonType === 'fire' || rightPokemonType === 'fighting' || rightPokemonType === 'poison' || rightPokemonType === 'flying' || rightPokemonType === 'ghost' || rightPokemonType === 'steel' || rightPokemonType === 'fairy'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function rockCheck(rightPokemonType){
//     if(rightPokemonType === 'fire' || rightPokemonType === 'ice' || rightPokemonType === 'flying' || rightPokemonType === 'bug'){
//         win = true;
//     }else if(rightPokemonType === 'fighting' || rightPokemonType === 'ground' || rightPokemonType === 'steel'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function ghostCheck(rightPokemonType){
//     if(rightPokemonType === 'psychic' || rightPokemonType === 'ghost'){
//         win = true;
//     }else if(rightPokemonType === 'dark'){
//         loss = true;
//     }else if(rightPokemonType === 'normal'){
//         tie = true;
//     }
// }

// function dragonCheck(rightPokemonType){
//     if(rightPokemonType === 'dragon'){
//         win = true;
//     }else if(rightPokemonType === 'steel'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function darkCheck(rightPokemonType){
//     if(rightPokemonType === 'psychic' || rightPokemonType === 'ghost'){
//         win = true;
//     }else if(rightPokemonType === 'fighting' || rightPokemonType === 'dark' || rightPokemonType === 'fairy'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function steelCheck(rightPokemonType){
//     if(rightPokemonType === 'ice' || rightPokemonType === 'rock' || rightPokemonType === 'fairy'){
//         win = true;
//     }else if(rightPokemonType === 'fire' || rightPokemonType === 'water' || rightPokemonType === 'electric' || rightPokemonType === 'steel'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function fairyCheck(rightPokemonType){
//     if(rightPokemonType === 'fighting' || rightPokemonType === 'dragon' || rightPokemonType === 'dark'){
//         win = true;
//     }else if(rightPokemonType === 'fire' || rightPokemonType === 'poison' || rightPokemonType === 'steel'){
//         loss = true;
//     }else{
//         tie = true;
//     }
// }

// function calculateResult() {
//     if(win){
//         console.log("Player Wins!");
//     }else if(loss){
//         console.log("Player Loses!");
//     }else{
//         console.log("Tie!");
//     }
// }
// fightPokemon('normal', 'fighting');
// calculateResult();
