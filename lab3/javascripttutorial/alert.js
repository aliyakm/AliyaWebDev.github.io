alert("I'm JavaScript!2");

let admin, name; // can declare two variables at once

name = "John";

admin = name;

alert( admin );

let ourPlanetName = "Earth";

let currentUserName = "John";

alert(`Hello, ${name}!`);
// const BIRTHDAY = '18.04.1982';
// const age = someCode(BIRTHDAY);
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

let name1 = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name1"}` ); // hello name1

alert( `hello ${name1}` ); // hello Ilya

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

let name2 = prompt("What is your name?", "");
alert(name2);

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

let a = 1, b = 1;
let c = ++a; // ?
let d = b++;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

if ("0") {
    alert( 'Hello' );
}


