// Interface  
interface User{
    name:string,
    age:number
    email?:string //optional 
    readonly id:number   //readonly propertry 
}


//object type anotation
let  user : User  = {
    age:12,
    name:'rayhan',
    email:"hello",
    id:3
}

// user.id=4 

//Interface with methods   //bujhi nai akhono 
interface Product {
  name: string;
  price: number;
  getDiscount(percentage: number): number;
}

let laptop: Product = {
  name: "MacBook Pro",
  price: 2000,
  getDiscount(percentage: number): number {
    return this.price * (percentage / 100);
  },
};