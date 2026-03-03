//primitive 
var username = "Rayhan";
var age = 27;
var isAdmin = true;
//Arrays 
var number = [1, 2, 3, "heelo"];
var names = ['rayhan', 'ali', 3];
//tuples
var person = ['hello', 3];
//Enum 
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var favoriteColor = color.Blue;
//  Any when we need avoid
var randomvalue = 10;
randomvalue = "Rayhan";
//unknown safer than any 
var userInput;
userInput = 5;
userInput = 'rayhan';
//Void function that's do not return anything 
function hi(message) {
    console.log('hellooo');
    return 5;
}
//null and undefined
var nullValue = null;
var undefinedValue = undefined;
