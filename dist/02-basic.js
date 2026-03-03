"use strict";
//primitive 
let username = "Rayhan";
let age = 27;
let isAdmin = true;
//Arrays 
let number = [1, 2, 3, "heelo"];
let names = ['rayhan', 'ali', 3];
//tuples
let person = ['hello', 3];
//Enum 
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
let favoriteColor = color.Blue;
//  Any when we need avoid
let randomvalue = 10;
randomvalue = "Rayhan";
//unknown safer than any 
let userInput;
userInput = 5;
userInput = 'rayhan';
//Void function that's do not return anything 
function hi(message) {
    console.log('hellooo');
    return 5;
}
//null and undefined
let nullValue = null;
let undefinedValue = undefined;
