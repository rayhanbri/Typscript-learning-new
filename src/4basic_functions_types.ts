//Basic functions with types 

function add(a:number,b:number):number{
    return a + b ;
}

// Optional parameters 
function greetings(name : string,greetings?:string):string{
   return `hello ${name}`
}

//Default parameters 
function multiply(a : number , b:number = 1 ):number{
    return a*b;
}

//Rest parameters 
// Rest parameters //do not understand 
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Arrow Function 

const divide=(a:number , b:number):number => a/b;

//function types //do not understand 
let calculate : (x:number, y:number ) => number;
calculate = divide;
