// *Scoping
// Scoping determines where variables and functions are accessible in the code.

let x = 5; // Global scope
var y = 10; // Global scope
{
  let y = 20; // Shadowing of 'y' in this block scope
  console.log(y); // 20 (Block-scoped 'y' is accessible here)

  // var x = 10; //! Illegal shadowing of 'x' as 'var' cannot shadow 'let' in the same scope

  let x = 10; // Shadowing of 'x' in this block scope
  console.log(x); // 10 (Block-scoped 'x' is accessible here because it's declared in the same block)
}

console.log(x); // 5 ('x' is accessible globally and remains unchanged)

// *Declaration & Reinitialization
var a = 5; // Variable 'a' is declared and initialized
let b; // Variable 'b' is declared but not initialized

// let a; //! Cannot redeclare 'a' because it was already declared with 'var'
// const a; //! 'const' must be declared and initialized at the same time

// *Hoisting
// Hoisting moves declarations to the top of the scope during the compilation phase

// console.log(z); //! ReferenceError: Cannot access 'z' before initialization (Temporal Dead Zone)
let z; // Declaration of 'z' (hoisted but in Temporal Dead Zone)
console.log(z, "from variable z"); // undefined (Value of 'z' is assigned after the hoisting phase)

// *Temporal Dead Zone (TDZ)
// The Temporal Dead Zone is the time between the hoisting of a variable and its initialization.
// Variables declared with `let` and `const` are in the TDZ from the start of the block until they are initialized.

// Example of TDZ:
// console.log(temp); //! ReferenceError: Cannot access 'temp' before initialization
let temp = 42; // `temp` is in the TDZ until this line
console.log(temp); // 42

// *Execution Context
// Execution context is the environment in which JavaScript code is executed.

// Global Execution Context (GEC): Created when the script starts execution
var globalVar = "I am global";

function demoFunction() {
  // Function Execution Context (FEC): Created when the function is invoked
  console.log(globalVar); // Accessible due to scope chain
  let localVar = "I am local";
  console.log(localVar); // Accessible within the function scope

  function innerFunction() {
    // Inner Function Execution Context: Created for this function call
    console.log(localVar); // Accessible due to closure
  }

  innerFunction();
}

demoFunction();

// The execution context consists of:
// 1. Variable Environment: Handles variable declarations and hoisting.
// 2. Lexical Environment: Defines scope based on where variables and functions are written in the code.
// 3. `this` Binding: Determines the value of `this` based on how the function is called.
