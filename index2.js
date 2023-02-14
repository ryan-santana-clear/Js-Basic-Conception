/**
 * Structures Condition Switch
 */

let cores = "Purple";

switch(cores){

    case "Blue":
        console.log("Sky");
        break;

    case "Green":
        console.log("Earth");
        break;

    case "Yellow":
        console.log("Sun");
        break;

    case "Purple":
        console.log("EggPlant");
        break;

    default:
        console.log("Alien"); // Don't use BREAK!

}

/**
 * Basics Conception of Class (old and new way)
 */

let cell = function(){

    this.color = "Black";

    this.turnON = function()
    {

        console.log("Call");
        return "calling";

    }

}

let object = new cell();

console.log(object.turnON());

class cellPhone {

    constructor(){

        this.color2 = "White";

    }

}

let object2 = new cellPhone();

console.log(object2);