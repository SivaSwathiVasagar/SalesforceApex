// ==============================
//      JAVASCRIPT PRACTICE 
//   ARRAYS + OBJECTS + METHODS
// ==============================

// NOTE: Each question has starter code.
// Uncomment one question at a time and practice.

// ----------------------------------------------------
// Q1: Create an array of 5 fruits and print the 3rd one
// ----------------------------------------------------
/*
let fruits = ["Mango", "Apple", "Banana", "Grapes", "Orange"];
console.log(fruits[2]);
*/


// ----------------------------------------------------
// Q2: Add "Kiwi" to the end of the array (use push)
// ----------------------------------------------------
/*
let fruits = ["Apple", "Banana"];
fruits.push("Kiwi");
console.log(fruits);
*/


// ----------------------------------------------------
// Q3: Remove last fruit (use pop)
// ----------------------------------------------------
/*
let fruits = ["Apple", "Banana", "Kiwi"];
fruits.pop();
console.log(fruits);
*/


// ----------------------------------------------------
// Q4: Add "Papaya" at the beginning (use unshift)
// ----------------------------------------------------
/*
let fruits = ["Apple", "Banana"];
fruits.unshift("Papaya");
console.log(fruits);
*/


// ----------------------------------------------------
// Q5: Remove first item (shift)
// ----------------------------------------------------
/*
let items = ["First", "Second", "Third"];
items.shift();
console.log(items);
*/


// ----------------------------------------------------
// Q6: Use includes() to check if "Banana" present
// ----------------------------------------------------
/*
let fruits = ["Mango", "Banana", "Lemon"];
console.log(fruits.includes("Banana"));
*/


// ----------------------------------------------------
// Q7: Use indexOf to find position of "Grapes"
// ----------------------------------------------------
/*
let fruits = ["Apple", "Grapes", "Orange"];
console.log(fruits.indexOf("Grapes"));
*/


// ----------------------------------------------------
// Q8: Use slice to get middle 2 elements
// ----------------------------------------------------
/*
let nums = [10, 20, 30, 40];
let mid = nums.slice(1, 3);
console.log(mid);
*/


// ----------------------------------------------------
// Q9: Use splice to remove 2 elements from index 1
// ----------------------------------------------------
/*
let nums = [10, 20, 30, 40];
nums.splice(1, 2);
console.log(nums);
*/


// ----------------------------------------------------
// Q10: Create a student object & print name
// ----------------------------------------------------
/*
let student = {
  name: "Swathi",
  age: 25,
  city: "Chennai"
};
console.log(student.name);
*/


// ----------------------------------------------------
// Q11: Add new key "country" to object
// ----------------------------------------------------
/*
let student = { name: "Ravi", age: 22 };
student.country = "India";
console.log(student);
*/


// ----------------------------------------------------
// Q12: Delete age from object
// ----------------------------------------------------
/*
let person = { name: "Asha", age: 30 };
delete person.age;
console.log(person);
*/


// ----------------------------------------------------
// Q13: Loop object keys (for...in)
// ----------------------------------------------------
/*
let phone = {
  brand: "Apple",
  model: "iPhone 14",
  price: 90000
};

for (let key in phone) {
  console.log(key, phone[key]);
}
*/


// ----------------------------------------------------
// Q14: Loop through array (for...of)
// ----------------------------------------------------
/*
let colors = ["Red", "Green", "Blue"];
for (let c of colors) {
  console.log(c);
}
*/


// ----------------------------------------------------
// Q15: Multiply each number by 2 (map)
// ----------------------------------------------------
/*
let arr = [1, 2, 3, 4];
let doubled = arr.map(function(n) {
  return n * 2;
});
console.log(doubled);
*/


// ----------------------------------------------------
// Q16: Filter numbers > 50
// ----------------------------------------------------
/*
let marks = [30, 55, 70, 10];
let result = marks.filter(function(m) {
  return m > 50;
});
console.log(result);
*/


// ----------------------------------------------------
// Q17: Find first even number (find)
// ----------------------------------------------------
/*
let nums = [11, 13, 20, 25];
let even = nums.find(function(n) {
  return n % 2 == 0;
});
console.log(even);
*/


// ----------------------------------------------------
// Q18: Check if all values are positive (every)
// ----------------------------------------------------
/*
let nums = [2, 5, 8, 10];
let check = nums.every(function(n) {
  return n > 0;
});
console.log(check);
*/


// ----------------------------------------------------
// Q19: Check if at least one value is negative (some)
// ----------------------------------------------------
/*
let nums = [3, -1, 6];
let anyNeg = nums.some(function(n) {
  return n < 0;
});
console.log(anyNeg);
*/


// ----------------------------------------------------
// Q20: Sum all numbers (reduce)
// ----------------------------------------------------
/*
let nums = [10, 15, 20];
let total = nums.reduce(function(acc, v) {
  return acc + v;
}, 0);
console.log(total);
*/


// ----------------------------------------------------
// Q21: Sort array of names
// ----------------------------------------------------
/*
let names = ["Kiran", "Asha", "Balu"];
names.sort();
console.log(names);
*/


// ----------------------------------------------------
// Q22: Reverse an array
// ----------------------------------------------------
/*
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);
*/


// ----------------------------------------------------
// Q23: Create array of objects & get names only
// ----------------------------------------------------

/* let users = [
  { name: "Ravi", age: 21 },
  { name: "Nisha", age: 22 }
];

let names = users.map(function(u) {
  return u.name;
});
console.log(names);

let names2 = users.forEach(function(n){
console.log(n.name)
});
 */


// ----------------------------------------------------
// Q24: Find user age 25 inside object array
// ----------------------------------------------------
/* 
let users = [
  { name: "Asha", age: 20 },
  { name: "Meera", age: 25 },
  { name: "Kiran", age: 30 }
];

let found = users.find(function(u) {
  return u.age == 25;
});
console.log(found);

let found1 = users.filter(function(u) {
  return u.age == 25;
});
console.log(found1);


 */

// ----------------------------------------------------
// Q25: Nested object – access phone number
// ----------------------------------------------------
/*
let student = {
  name: "Swathi",
  contact: {
    email: "swa@test.com",
    phone: "9999999999"
  }
};

console.log(student.contact.phone);
*/

// ===================================================================
//      JAVASCRIPT PRACTICE FILE  
//  OBJECTS • SPREAD • REST • MAP OBJECT • querySelector()
// ===================================================================

// =========================
// SECTION 1 — OBJECTS
// =========================

// --------------------------------------------------------
// Q1: Create an object "car" and print brand
// --------------------------------------------------------
/*
let car = { brand: "Honda", model: "City", year: 2023 };
console.log(car.brand);
*/


// --------------------------------------------------------
// Q2: Add a new key "color"
// --------------------------------------------------------
/*
let car = { brand: "Honda", model: "City" };
car.color = "Red";
console.log(car);
*/


// --------------------------------------------------------
// Q3: Update model to "City ZX"
// --------------------------------------------------------
/*
let car = { brand: "Honda", model: "City" };
car.model = "City ZX";
console.log(car);
*/


// --------------------------------------------------------
// Q4: Delete a key (delete year)
// --------------------------------------------------------
/*
let car = { brand: "Honda", year: 2020 };
delete car.year;
console.log(car);
*/


// --------------------------------------------------------
// Q5: Loop object using for...in
// --------------------------------------------------------
/*
let user = { name: "Swathi", age: 25, country: "India" };

for (let key in user) {
  console.log(key, user[key]);
}
*/


// ================================
// SECTION 2 — SPREAD OPERATOR (...)
// ================================

// --------------------------------------------------------
// Q6: Combine two arrays using spread
// --------------------------------------------------------

/* let a = [1, 2];
let b = [3, 4];

let combined = [...a, ...b];
console.log(combined); // [ 1, 2, 3, 4 ]

let combined1 = [a, b];
console.log(combined1); // [ [ 1, 2 ], [ 3, 4 ] ] */


// --------------------------------------------------------
// Q7: Copy an object using spread
// --------------------------------------------------------
/*
let person = { name: "Ravi", age: 22 };
let copy = { ...person };
console.log(copy);
*/


// --------------------------------------------------------
// Q8: Merge two objects using spread
// --------------------------------------------------------
/* 
let obj1 = { a: 10, b: 20 };
let obj2 = { c: 30 };

let merged = { ...obj1, ...obj2 };
console.log(merged);  // { a: 10, b: 20, c: 30 }

 */
// --------------------------------------------------------
// Q9: Add new property while spreading
// --------------------------------------------------------
/*
let student = { name: "Asha", age: 24 };
let updated = { ...student, city: "Bangalore" };
console.log(updated);
*/


// ===================================
// SECTION 3 — REST PARAMETER (...rest)
// ===================================

// --------------------------------------------------------
// Q10: Use rest parameter to capture remaining values
// --------------------------------------------------------
/*
function sum(a, b, ...rest) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("rest:", rest);
}
sum(10, 20, 30, 40, 50);
*/


// --------------------------------------------------------
// Q11: Write a function to add unlimited numbers
// --------------------------------------------------------
/*
function addNumbers(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  console.log(total);
}

addNumbers(10, 20, 5);
*/


// --------------------------------------------------------
// Q12: Extract first 2 values, rest in another array
// --------------------------------------------------------
/*
let nums = [10, 20, 30, 40, 50];
let [first, second, ...remaining] = nums;

console.log(first);
console.log(second);
console.log(remaining);
*/


// ===========================
// SECTION 4 — MAP (KEY-VALUE)
// ===========================

// --------------------------------------------------------
// Q13: Create a Map and set values
// --------------------------------------------------------
/*
let marks = new Map();
marks.set("Math", 90);
marks.set("Science", 80);

console.log(marks);


// --------------------------------------------------------
// Q14: Get value from Map
// --------------------------------------------------------
/*
let marks = new Map([
  ["English", 85],
  ["Physics", 92]
]);
console.log(marks.get("Physics"));
*/


// --------------------------------------------------------
// Q15: Check if key exists
// --------------------------------------------------------
/*
let map = new Map();
map.set("name", "Swathi");

console.log(map.has("name")); 
console.log(map.has("age"));  
*/


// --------------------------------------------------------
// Q16: Loop through Map
// --------------------------------------------------------
/*
let prices = new Map([
  ["Apple", 50],
  ["Banana", 10]
]);

for (let [key, value] of prices) {
  console.log(key, value);
}
*/


// ==============================
// SECTION 5 — array.map() method
// ==============================

// --------------------------------------------------------
// Q17: Double numbers using map()
// --------------------------------------------------------
/*
let arr = [1, 2, 3];
let output = arr.map(function(n){
  return n * 2;
});
console.log(output);
*/


// --------------------------------------------------------
// Q18: Map array of objects → list of names
// --------------------------------------------------------
/*
let users = [
  { name: "Ravi", age: 20 },
  { name: "Nisha", age: 22 }
];

let names = users.map(function(u){
  return u.name;
});
console.log(names);
*/


// --------------------------------------------------------
// Q19: Convert all to uppercase using map
// --------------------------------------------------------
/*
let words = ["red", "blue", "green"];

let upper = words.map(function(w){
  return w.toUpperCase();
});
console.log(upper);
*/


// ============================================
// SECTION 6 — querySelector() PRACTICE (DOM)
// ============================================

// ❗ NOTE: These work only in browser, not Node.js ❗

// --------------------------------------------------------
// Q20: Select a paragraph and change text
// --------------------------------------------------------
/*
// HTML:
// <p id="msg">Hello</p>

let para = document.querySelector("#msg");
para.textContent = "Welcome Swathi!";
*/


// --------------------------------------------------------
// Q21: Select all list items and print text
// --------------------------------------------------------
/*
// HTML:
// <ul>
//   <li>Apple</li>
//   <li>Banana</li>
// </ul>

let items = document.querySelectorAll("li");
items.forEach(function(i){
  console.log(i.textContent);
});
*/


// --------------------------------------------------------
// Q22: Change background color of a div
// --------------------------------------------------------
/*
// HTML:
// <div class="box">Hi</div>

let box = document.querySelector(".box");
box.style.backgroundColor = "lightblue";
*/


// --------------------------------------------------------
// Q23: Get value typed inside input box
// --------------------------------------------------------
/*
// HTML:
// <input id="nameInput" />

let inp = document.querySelector("#nameInput");
console.log(inp.value);
*/


// --------------------------------------------------------
// Q24: Add click event to button
// --------------------------------------------------------
/*
// HTML:
// <button id="btn">Click</button>

let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
  alert("Button clicked!");
});
*/


// --------------------------------------------------------
// Q25: Toggle a class using querySelector()
// --------------------------------------------------------
/*
// HTML:
// <div id="panel" class="hidden"></div>

let panel = document.querySelector("#panel");
panel.classList.toggle("hidden");
*/
