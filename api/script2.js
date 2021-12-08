let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
let input = document.querySelector(".word-input");
let word = document.querySelector(".word");
let random = document.querySelector(".random");

let letters = [];

function checkWordApi(text) {
  axios
    .get(apiUrl + text)
    .then(function (response) {
      word.innerHTML =
        response.data[0].word +
        "<br>Example : " +
        response.data[0].meanings[0].definitions[0].example;
        console.log("Yess")
        return true;
    })
    .catch(function (error) {
      word.innerHTML = "don't have this word";
      console.log("don't found");
      
      return false;
    });
}

 function checkWord(){
    let text = input.value;
    console.log("check");
    for(let i = 0; i < text.length; i++){
      if(!letters.includes(text.charAt(i))){
        return false;
      }
    }
   checkWordApi(text);

    return true;
}

let button = document.querySelector(".search");
button.addEventListener("click", (e) => {
    e.preventDefault();
    // getWord();
    checkWord();
});

function randomChar(amount) {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  let result = [];
  for (let i = 0; i < amount; i++) {
    result[i] = characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;

}

showChar();
function showChar() {

  let chars = randomChar(12);
  console.log(chars);
    let charList = document.createElement("ul");
    let char_tab = document.querySelector(".char-list");
    if(char_tab.firstChild){
        char_tab.removeChild(char_tab.firstChild);
    }

  for (let i = 0; i < 12; i++) {
    let letter = document.createElement("li");
    letter.id = "letter";
    letter.className = "list-group-item";
    letter.innerHTML = chars[i];
    charList.appendChild(letter);

    letters[i] = chars[i];
  }
  char_tab.appendChild(charList);
}

random.addEventListener("click", showChar);