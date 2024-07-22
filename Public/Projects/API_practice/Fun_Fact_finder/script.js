
const submitBtn = document.getElementById("enter-btn");
const fact = document.getElementById("fact");


const go = () => {try{fetch('https://api.api-ninjas.com/v1/facts',{
    method: 'GET',
    headers: {'X-Api-Key': '/KbzuyZiahTQ8PkAVXDXAw==lA4XrF461iP1RKIe'},
    contentType: 'application/json'
}).then(res => {return res.json()})
.then(data => {fact.innerText = `Fact: \n ${data[0].fact}`}); 
}catch(error){
console.err(error);
}};


submitBtn.addEventListener("click", go);