// const apiData ={
//     url:"https://covid19.th-stat.com/json/covid19v2/getTodayCases.json"
// }

// const {url} = apiData;
// const apiUrl = `${url}`;

// console.log(apiUrl);

// fetch(apiUrl)
// .then((data) => data.json())
// .then((coviddata) => generate(coviddata))

// const generate = (data) => {
//     console.log(data);
//     console.log("asdasd");
// }




// async function getUser() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(response);
//     let data = await response.json();
//     return data
// }

// getUser().then(data => console.log(data));




// axios.get('https://api.dictionaryapi.dev/api/v2/entries/en_US/hel').then(res => {
//     if(res){    
// console.log(res.data)
//     }else{
//         console.log("No")
//     }
// })

let apiUrl = "https://pokeapi.co/api/v2/pokemon/"
let input = document.querySelector('.pokemon-input')
let pokemonName = document.querySelector('.pokemon-name')
let pokemonImage = document.querySelector('.pokemon-images')

function getWord(){
    axios.get(apiUrl+input.value)
    .then(function(response){
        pokemonName.innerHTML = response.data.forms[0].name;
        pokemonImage.src = response.data.sprites.front_default;
    }).catch(function(error) {
        pokemonName.innerHTML = "don't have pokemon";
        pokemonImage.src = response.data.sprites.front_default;
    })
    console.log("test"+input.value)
}

let button = document.querySelector('.pokemon-button')
button.addEventListener("click", getWord);

