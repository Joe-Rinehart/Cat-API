const baseURL = 'https://cat-fact.herokuapp.com/facts'



function getFact() {
    fetch(baseURL)
        .then((response) => response.json())
        .then((result) => displayFact(result[0].text))
}

function displayFact(fact) {
    let cardText = document.getElementsByClassName("card-text")
    cardText.innerText = fact
}