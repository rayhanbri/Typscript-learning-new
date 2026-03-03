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