//primitive 
let username:string ="Rayhan";
let age:number = 27;
let isAdmin:boolean = true;

//Arrays 
let number:number[]=[1,2,3,"heelo"]
let names:string[]=['rayhan','ali',3]

//tuples
let person:[string,number]=['hello',3]


//Enum 
enum color{
    Red,
    Green,
    Blue
}

 let favoriteColor:color = color.Blue;

//  Any when we need avoid

let randomvalue:any = 10;
randomvalue="Rayhan";

//unknown safer than any 
let  userInput:unknown
userInput=5;
userInput='rayhan';

//Void function that's do not return anything 
function hi(message:string):void{
    console.log('hellooo')

    return 5
}

//null and undefined

let nullValue:null = null;
let undefinedValue:undefined=undefined;