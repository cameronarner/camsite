
const inputbox = document.getElementById("inputbox");
const subBtn = document.getElementById("submit");
const facts = document.getElementById("facts");
let aname ='';
const getit = () => {
    const input = inputbox.value;
    if(input){
         aname = input;
    }
    ans();
}
subBtn.addEventListener("click", getit);
const ans = () => {fetch('https://api.api-ninjas.com/v1/animals?name='+aname,{
    method: 'GET',
    headers: {
        'X-Api-Key': '/KbzuyZiahTQ8PkAVXDXAw==lA4XrF461iP1RKIe'
    },
    contentType: 'application/json'
})
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data);
        facts.innerText=`Results for -> ${aname} `;
        for(let i=0; i<data.length; i++){
            facts.innerText+=`
       \nName: ${data[i].name}
        \n Locations: ${data[i].locations} 
        \n Name of young: ${data[i].characteristics.name_of_young} 
        \n Kingdom: ${data[i].taxonomy.kingdom}
        \n Class: ${data[i].taxonomy.class}`
        if(data.length>1 && i<data.length){
            facts.innerText+=`\n-----------`
        };
    }
    });


};


    
  