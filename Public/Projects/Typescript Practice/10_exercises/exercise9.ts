/*
write a ts program that defines an enumeration 'color' 
with values 'red', 'white', and 'blue'
create a var called selectedcolor of type color and assign it one of the 
enum values
*/

enum color  {
    red,
    white,
    blue,
    pink
}

let selectedColor: color = color.pink;
console.log("List of colors:", color);
console.log("Selected Color:", selectedColor);