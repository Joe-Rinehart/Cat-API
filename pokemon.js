const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

let button1 = document.getElementById("button-fetch")
button1.addEventListener("click", handleClick)

function generateRandomNumber() {
    return Math.floor(Math.random() * 898) + 1;
}

function getPokemon() {
    const randomNum = generateRandomNumber()
    fetch(baseURL + randomNum)
        .then((response) => response.json())
        .then((result) => displayPokemon(result))
}

function displayPokemon(data) {
    let cardText = document.getElementById("card-text")
    let cardImage = document.getElementById("card-img-top")
    let pokemonName = document.getElementById("pokemon-name")

    pokemonName.innerText = "Name: " + data.name.charAt(0).toUpperCase() + data.name.slice(1)
    cardText.innerText = "Ability: " + data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1)
    cardImage.src = data.sprites.front_default
}

function handleClick() {
    getPokemon();
}