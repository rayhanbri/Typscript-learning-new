// type alias
 
type Point = {
    x:number , 
    y:number 
}

let point:Point = {x : 10, y:20};

type ID = string  | number ;

let userID:ID = 324;
let PorductID:ID = "rayhan";

//Type alias and interface 
//interfaces can be extended but type not 
interface Animal{
    name:string ;
}

interface Dog extends Animal{
    breed : string 
}

let MydDog:Dog ={
    name:'kutta',
    breed:"bagha kutta"
}

//Interfaces can be declared multiple time and merge 
interface Animal{
    name:string ;
}

interface Animal{
    age: number;
}

let dog:Animal = {
     age:3,
     name:'buddy'
}

