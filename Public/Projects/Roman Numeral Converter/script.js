const numberinput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");

function check(){
  const number = numberinput.value;
  if(!number){
    output.innerText = "Please enter a valid number";
  }
  else if(number<=0){
    output.innerText = "Please enter a number greater than or equal to 1";
  }
  else if(number>=4000){
    output.innerText="Please enter a number less than or equal to 3999";
  }
  else{
    convert(number);
  }
};
convertBtn.addEventListener("click", check);

function convert(number){
  let answer ="";
  //this is where we convert the number to roman numerals
  // M -> 1000
 if(number>999){
    let amount=Math.floor(number/1000);
    let oramount = amount;
    while(amount>0){
      answer+="M";
      amount-=1;
    }
    number-= oramount*1000;
    }
  //CM -> 900
  if(number>899){
    let amount=Math.floor(number/900);
    let oramount = amount;
    while(amount>0){
      answer+="CM";
      amount-=1;
    }
    number-= oramount*900;
    }
  //D -> 500
  if(number>499){
    let amount=Math.floor(number/500);
    let oramount = amount;
    while(amount>0){
      answer+="D";
      amount-=1;
    }
    number-= oramount*500;
    }
  //CD -> 400
   if(number>399){
    let amount=Math.floor(number/400);
    let oramount = amount;
    while(amount>0){
      answer+="CD";
      amount-=1;
    }
    number-= oramount*400;
    }
  //C -> 100
   if(number>99){
    let amount=Math.floor(number/100);
    let oramount = amount;
    while(amount>0){
      answer+="C";
      amount-=1;
    }
    number-= oramount*100;
    }
  //XC -> 90
   if(number>89){
    let amount=Math.floor(number/90);
    let oramount = amount;
    while(amount>0){
      answer+="XC";
      amount-=1;
    }
    number-= oramount*90;
    }
  //L -> 50
   if(number>49){
    let amount=Math.floor(number/50);
    let oramount = amount;
    while(amount>0){
      answer+="L";
      amount-=1;
    }
    number-= oramount*50;
    }
  //XL -> 40
   if(number>39){
    let amount=Math.floor(number/40);
    let oramount = amount;
    while(amount>0){
      answer+="XL";
      amount-=1;
    }
    number-= oramount*40;
    }
  //X -> 10
   if(number>9){
    let amount=Math.floor(number/10);
    let oramount = amount;
    while(amount>0){
      answer+="X";
      amount-=1;
    }
    number-= oramount*10;
    }
  //IX -> 9
   if(number>8){
    let amount=Math.floor(number/9);
    let oramount = amount;
    while(amount>0){
      answer+="IX";
      amount-=1;
    }
    number-= oramount*9;
    }
  //V-> 5
   if(number>4){
    let amount=Math.floor(number/5);
    let oramount = amount;
    while(amount>0){
      answer+="V";
      amount-=1;
    }
    number-= oramount*5;
    }
  //IV -> 4
    if(number>3){
    let amount=Math.floor(number/4);
    let oramount = amount;
    while(amount>0){
      answer+="IV";
      amount-=1;
    }
    number-= oramount*4;
    }
  //I -> 1
    if(number>0){
      let amount=(number/1)
      while(amount>0){
        answer+="I";
        amount-=1;
      }
    }
  output.innerText = answer;
};