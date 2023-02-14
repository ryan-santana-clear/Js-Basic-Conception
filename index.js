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
 * Structures FOR 
 */

let n = 7;

for (let c = 0; c <=10; c++) {

    console.log(`${c} X ${n} = ${c*n}`);

}