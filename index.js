/**
 * Learning Basics Concepts of JS
 */
var HelloWorld = "Hello World";

//console.log('Hello World!');
console.log(HelloWorld);
console.log(HelloWorld);
console.log(HelloWorld);
console.log(HelloWorld);

/**
 * Learning  Operators 
 */

let a = 10;
const b = "10";

console.log(a == b);  // True
console.log(a === b); // False
console.log(a !== b); // True
console.log(a == 10 && b == 10);  // True
console.log(a == b || typeof a == 'string'); // True becaseu compare type number with string

/**
 * Condition structures
 */

let cor = "Blue";

if (cor === "Green") {

    console.log("Earth");

} else if(cor === "Blue") {

console.log("Sky and Cloud");

} else {

console.log("Et");

}

/**
 * Structures FOR and Template Strings
 */

let n = 7;

for (let c = 0; c <=10; c++) {

    console.log(`${c} X ${n} = ${c*n}`);

}


/**
 * Function in Practice (Also anonymous function and ArrowFuntion)
 */

function calc(x1, x2, operator){

    return eval(`${x1} ${operator} ${x2}`);

}

let result = calc(3, 7, "+");


console.log(result);

(function(x1, x2, operator){

    return eval(`${x1} ${operator} ${x2}`);

})(3, 7, "+");


let calc3 = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);

}

let result3 = calc3(3, 7, "+");

console.log(result3);