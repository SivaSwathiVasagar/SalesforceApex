/* // ------------------------ Case Study 1----------------------

//-------- Function Declaration --------------------
function print(count) {
  for (let i = 0; i < count; i++) {
    console.log("Hello! JavaScript");
  }
}

  print(5);

//-------- Function Expression----------------------

let printTwoStrings = function (string1, string2) {
  console.log("Name :" + string1 + " " + string2);
};

 printTwoStrings("Siva", "Swathi");

//--------- Area of rectangle ----------------------------

function areaOfreactangle(length, Width) {
  let area = length * Width;
  return "Area of Rectangle  :" + area;
}

 console.log(areaOfreactangle(20, 10));

//---------- CALL BACK FUNCTION --------------------------

// Higher order function
function learnCallback(callBack, message) {
  if (typeof message === "string") {
    callBack(message);
  } else {
    console.log("Message: This is not String :" + message);
  }
}
// Call back Function
function callBackHelper(message) {
  console.log(`Hello! ${message}`);
}

learnCallback(callBackHelper,"Swathi");
learnCallback(callBackHelper,1);
learnCallback(callBackHelper,"1234User");

//-------------MULTI CALL BACK FUNCTION------------------------
// Input is String/ Number then call callBack function

// Higher order function
function multiCallback(input1, input2) {
  if (typeof input1 === typeof input2 && typeof input1 === "string") {
    return callBackString(input1, input2);
  } else if (typeof input1 === typeof input2 && typeof input1 === "number") {
    return callBackNumber(input1, input2);
  } else {
    return `Message: Invalid Operation`;
  }
}
// Call back String Function
function callBackString(input1, input2) {
  let result = input1 + " " + input2;
  return result;
}
// Call back Number Function
function callBackNumber(input1, input2) {
  let result = input1 + input2;
  return result;
}

console.log(multiCallback("Siva", "Swathi"));
console.log(multiCallback(5, 10));
console.log(multiCallback(5, "Siva"));
console.log(multiCallback(true,false ));
console.log(multiCallback(467n,345n ));

// ----------------- CONVERT CURRENCY -------------
// Higher order function
function convertCurrency(amount, country) {
  country = country.toUpperCase();
  if (typeof amount === "number") {
    return convertToDollar(amount, country);
  } else {
    return `Message: Invalid Operation`;
  }
}

function convertToDollar(amount, country) {
  let usd, conversionType; 
  if (country == "USA") {
    // 1 USD to RS
    conversionType = "USD"
    let rate = 88;
    usd = amount / rate;
    
  } else if(country == "CANADA"){
    // 1 CAD USD to RS
    conversionType = "CAD USD"
    let rate = 63;
    usd = amount / rate;
  }
  else{
    return `Message: Invalid Country`;
  }
  // obj to display final output
  let resultDetails = {
    Rupees : amount,
    ConvertedUSD : usd,
    ConvertedTo : conversionType,
    FunctionName : convertToDollar 
  }
  return resultDetails;
}

console.log(convertCurrency(100, "UsA"));
console.log(convertCurrency(100, "canada"));
console.log(convertCurrency("100", "USA"));
console.log(convertCurrency(100, "India"));

// ------------ ARROW FUNCTION ---------------

let calculateBMI = (weightKg, heightCm, age) => {
// Convert height to meters
  let heightM = heightCm / 100;

  // Calculate BMI
  let bmi = weightKg / (heightM * heightM);

  // Round BMI to 2 decimal places
  bmi = parseFloat(bmi.toFixed(2));

  // Determine BMI category
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Return all details in an object
  return {
    age: age,
    weight: weightKg,
    height: heightCm,
    bmi: bmi,
    category: category
  };
}

// ---------------- Testing ----------------
console.log(calculateBMI(60, 165, 25));   
console.log(calculateBMI(45, 160, 25));  
console.log(calculateBMI(80, 170, 25));  
console.log(calculateBMI(95, 165, 25));  


// ------------------------ Case Study 2----------------------

const chocolates = ["Dairy Milk","KitKat","Snickers","Galaxy",
                    "Ferrero Roche","Bounty","Lindt","Milkybar"];

// Check any chocolates
console.log("Array contains MilkyBar");
console.log(chocolates.includes("Milkybar"));

//Splice

//Replace existing and add New choc
console.log("Array Add 5Star and replace old");
chocolates.splice(2,1,"5Star");
console.log(chocolates);
console.log(chocolates.indexOf("5Star"));

//Slice

let newNutbox = ["Almonds","Pista",chocolates.slice(4,6)];
console.log("New Nuts Array");
console.log(newNutbox);

// unShift 

chocolates.unshift("Munch");
console.log(chocolates);

// Empty Array check

let candy = [];
if (Array.isArray(candy) && candy.length === 0) {
  console.log("Empty array");
}

// Add Candy to each value in Array
for(let x in chocolates ){
   chocolates[x] = chocolates[x] + " Candy";
}
console.log(chocolates);
 */

// Create Obj 
/* 
let players = [
  { Name: "Dhoni", age: 40, score: 200 },
  { Name: "Virat", age: 35, score: 250 },
  { Name: "Rohit Sharma", age: 33, score: 100 },
  { Name: "Rahul", age: 25, score: 150 }
];

let maxPlayer = players.reduce((max, player) => {
  return player.score > max.score ? player : max;
});
console.log("Max scorer:", maxPlayer.Name, maxPlayer.score);

// Total Score
let totalScore = players.reduce((sum, player) => sum + player.score, 0);
console.log("Total Score:", totalScore);

// Total Avg
let Avg = totalScore/players.length;
console.log("Average: " + Avg);

// Find players in 30 - 40
let findPlayer = players.filter(p => p.age >= 30 && p.age <= 40);
console.log(findPlayer);

// Find player name starts with d
let startsWithD = players.filter(p => p.Name.startsWith("D"));
console.log("Names starting with D:", startsWithD); */

let players = [
  { Name: "Dhoni", age: 40, score: 200 },
  { Name: "Virat", age: 35, score: 250 },
  { Name: "Rohit Sharma", age: 33, score: 100 },
  { Name: "Rahul", age: 25, score: 150 }
];

// For Each
let p = players.forEach((player) =>{
   players[0].playerType = "Batsman";
});
console.log(players);

// For in 
for(let x in players){
  players[x].playerType = "Batsman";
}

console.log(players);

players.map(player => {
player.playerType = "Batsman";
});
console.log(players); 