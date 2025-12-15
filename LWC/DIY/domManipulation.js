// ============================================================
//            DOM MANIPULATION + EVENT HANDLER PRACTICE
// ============================================================
// NOTE: These questions work only in browser, not Node.js.

// -------------------------------------------------------------
// Q1: Change text inside a paragraph using querySelector
// -------------------------------------------------------------
/*
// HTML:
// <p id="msg">Old text</p>

let p = document.querySelector("#msg");
p.textContent = "New updated text";
*/


// -------------------------------------------------------------
// Q2: Change color of heading
// -------------------------------------------------------------
/*
// HTML:
// <h1 id="title">Hello</h1>

let h = document.querySelector("#title");
h.style.color = "blue";
*/


// -------------------------------------------------------------
// Q3: Read input value and print it in console
// -------------------------------------------------------------
/*
// HTML:
// <input id="username" />

let inp = document.querySelector("#username");
console.log(inp.value);
*/


// -------------------------------------------------------------
// Q4: Change image source
// -------------------------------------------------------------
/*
// HTML:
// <img id="pic" src="old.png" />

let img = document.querySelector("#pic");
img.src = "new.png";
*/


// -------------------------------------------------------------
// Q5: Add click event to button → show alert
// -------------------------------------------------------------
/*
// HTML:
// <button id="btn">Click Me</button>

let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
  alert("Button clicked!");
});
*/


// -------------------------------------------------------------
// Q6: When button is clicked, change paragraph text
// -------------------------------------------------------------
/*
// HTML:
// <p id="text">Before</p>
// <button id="changeBtn">Change</button>

let para = document.querySelector("#text");
let btn = document.querySelector("#changeBtn");

btn.addEventListener("click", function() {
  para.textContent = "After Click";
});
*/


// -------------------------------------------------------------
// Q7: Double-click event to change background color
// -------------------------------------------------------------
/*
// HTML:
// <div id="box" style="width:100px; height:100px"></div>

let box = document.querySelector("#box");

box.addEventListener("dblclick", function() {
  box.style.backgroundColor = "pink";
});
*/


// -------------------------------------------------------------
// Q8: Hovering over element changes color (mouseover)
// -------------------------------------------------------------
/*
// HTML:
// <div id="hoverBox">Hover me</div>

let hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseover", function(){
  hoverBox.style.color = "red";
});
*/


// -------------------------------------------------------------
// Q9: Toggle a class on button click
// -------------------------------------------------------------
/*
// HTML:
// <div id="panel" class="hidden"></div>
// CSS: .hidden { display: none; }

let panel = document.querySelector("#panel");
let btn = document.querySelector("#toggleBtn");

// <button id="toggleBtn">Toggle</button>

btn.addEventListener("click", function(){
  panel.classList.toggle("hidden");
});
*/


// -------------------------------------------------------------
// Q10: Add new element to page (createElement)
// -------------------------------------------------------------
/*
// HTML:
// <div id="container"></div>

let div = document.querySelector("#container");

let p = document.createElement("p");
p.textContent = "This is a new paragraph";

div.appendChild(p);
*/


// -------------------------------------------------------------
// Q11: Remove an element using remove()
// -------------------------------------------------------------
/*
// HTML:
// <p id="removeMe">Delete this</p>

let rm = document.querySelector("#removeMe");
rm.remove();
*/


// -------------------------------------------------------------
// Q12: Increase font size when button clicked
// -------------------------------------------------------------
/*
// HTML:
// <p id="content">Hello</p>
// <button id="bigBtn">Big</button>

let content = document.querySelector("#content");
let bigBtn = document.querySelector("#bigBtn");

bigBtn.addEventListener("click", function() {
  content.style.fontSize = "30px";
});
*/


// -------------------------------------------------------------
// Q13: Get text from input and show inside a <p>
// -------------------------------------------------------------
/*
// HTML:
// <input id="nameInput" />
// <button id="showBtn">Show</button>
// <p id="result"></p>

let nameInput = document.querySelector("#nameInput");
let showBtn = document.querySelector("#showBtn");
let res = document.querySelector("#result");

showBtn.addEventListener("click", function(){
  res.textContent = nameInput.value;
});
*/


// -------------------------------------------------------------
// Q14: Disable button on click
// -------------------------------------------------------------
/*
// HTML:
// <button id="submitBtn">Submit</button>

let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function(){
  submitBtn.disabled = true;
});
*/


// -------------------------------------------------------------
// Q15: On pressing a key, print it in console (keydown)
// -------------------------------------------------------------
/*
// HTML:
// <input id="keyBox" />

let keyBox = document.querySelector("#keyBox");

keyBox.addEventListener("keydown", function(event){
  console.log("Key pressed:", event.key);
});
*/
