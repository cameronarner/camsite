let firstName: string = "Cameron";
console.log(firstName);

const named: string[] = [];
named.push("Cameron"); //no error

const names: readonly string[] = ["Cameron"];
//names.push("danger") -> ERROR

enum CardinalDirections {
    North,
    East,
    South,
    West
}
let currentDirection = CardinalDirections.North;
let nextDirection = CardinalDirections.West;
console.log(currentDirection); // prints 0
console.log(nextDirection); // prints 3

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log(StatusCodes.NotFound); // prints 404
console.log(StatusCodes.Success); //prints 200

type carType = string; // type alias

interface Rectangle{
    height: number,
    width: number
}
const rectangle : Rectangle = {
    height: 20,
    width: 10,
};

interface ColorfulRectangle extends Rectangle {
    color: string
}

const colorfulRectangle: ColorfulRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

type myUnionType = string | number;

type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;

let x: unknown = 'hello';
console.log((x as string).length); // 5
// same as (<string>x).length

let y: unknown = 3; //doesn't change the type of data in the variable
// if you log (y as string).length it will print undefined
// same for (3 as string).length
// (4 as string).length -> Error
// ((4 as unknown) as string).length -> no Error


//class w/ generics
function createPair<S, T>(v1: S, v2: T): [S, T]{
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));

class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string){}

    public setValue(value: T) {
         this._value = value;
    }
    public getValue(): T | undefined {
        return this._value;
    }
    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString());

//type alias w/ generics
type Wrapped<T> = {value: T};
const wrappedValue: Wrapped<number> = {value: 10};

//extends w/ generics
function createLoggedPair<S extends string | number, T extends string | number>
(v1: S, v2: T): [S, T]{
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}
createLoggedPair("Cameron", 420);

interface Person{
    name: string;
    age: number;
}

//accessing properties that may or may not exist
interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}
function printYardSize(house: House){
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined){
        console.log('No yard');
    } else{
        console.log(`Yard is ${yardSize} sqft`);
    }
}
let home: House = {
    sqft: 500
};
let myHome: House = {
    sqft: 1000,
    yard: {
        sqft: 2000
    }
}
printYardSize(home);
printYardSize(myHome);

//nullish coalescence
function printMileage(mileage: number | null | undefined){
    console.log(`Mileage: ${mileage ?? "Not Available"}`);
}
printMileage(2);
printMileage(undefined);

//null assertion
function getValue(): string | null {
    return 'hello';
  }
  let tvalue = getValue();
  console.log('value length: ' + tvalue!.length); //w/out the ! it undefined errors