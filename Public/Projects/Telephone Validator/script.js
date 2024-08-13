const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const userinput = document.getElementById("user-input");

const regexlist = [
/^1\s\d{3}-\d{3}-\d{4}/,
/^1\s\(\d{3}\)\s\d{3}-\d{4}/,
/^\d{10}$/,
/^\d{3}-\d{3}-\d{4}/,
/^\(\d{3}\)\d{3}-\d{4}/,
/^1\(\d{3}\)\d{3}-\d{4}/,
/^1\s\d{3}\s\d{3}\s\d{4}/
];
/*
regex should accept:
1 555-555-5555
1 (555) 555-5555
5555555555
555-555-5555
(555)555-5555
1(555)555-5555
1 555 555 5555
*/


const check = ()=>{
  const number = userinput.value;
  if(!number){
    alert("Please provide a phone number")
  }
  else{
    validate(number);
  }
}
const isValid = (number) =>regexlist.some((regex)=>regex.test(number));

const clear = () => results.innerText="";

const validate = (number)=>{
  if(isValid(number)){
    results.innerText+="\nValid US number: "+number;
  }
  else{
    results.innerText+="\nInvalid US number: "+number;
  }
}

checkBtn.addEventListener("click",check);
clearBtn.addEventListener("click",clear);