const pokemonInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokename = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const image = document.getElementById("image");

const go = () =>{
  const input = pokemonInput.value.toLowerCase();
  if(input){
    getData(input);
  }
}

searchBtn.addEventListener("click",go);

const getData = async (input) => {
  try{
    const res = await fetch(url+"/"+input);
    const data = await res.json();
    showStats(data, input);
  }
  catch (err){
    alert("Pokémon not found")
  }
}

// decompose the data? 
//add event listener for button

const showStats = (data, input) => {
  document.getElementById("table").style.display="table";
  weight.textContent = data.weight;
  pokename.textContent = data.name.toUpperCase();
  id.textContent = "#"+data.id;
  height.textContent = data.height;
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;
  image.innerHTML =`<img id="sprite" src="${data.sprites.front_default}"></img>`;
  let t = ``;
  for(let i=0; i<data.types.length; i++){
    t+=`<p>  ${data.types[i].type.name.toUpperCase()}</p>`;
    
  }
  types.innerHTML = t;
  //clean up display... convert to table? can't have labels in the div bc tests
}
