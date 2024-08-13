//declare an array of specific data
//add elements, remove elements, iterate through the array

let myArray: string[] = ["dinner", "stream", "workout", "read"];

myArray.push("journal");
myArray.push("shower");

//iterate through the array
for (const e of myArray){
    console.log(e);
}

//check if an element is in the array
console.log(myArray.includes("shower"));

//get the index of a specific element
let inofj = myArray.indexOf("journal");
console.log(`Index of Jounal: ${inofj}`);
