///////////////////////  Part II: JavaScript Reps ///////////////
// Easy Going
// Write a for loop that will log the numbers 1 through 20.
for (let i = 0; i <= 20; i++) {
  //console.log(i);
}

////////  Get Even  /////////////
// Write a for loop that will log only the even numbers in 0 through 200.

// Hint: Think about the increment expression.

for (let i = 0; i <= 200; i++) {
  if (i % 2 == 0) {
   // console.log(`i is even`);
  }
}

////////// Fizz Buzz  /////////////
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// function FizzBuzz(num){
//    if((num%3 == 0) && (num%5 == 0)){
//       return "Fizzbuzz";
//    }
//    else if( num % 5 == 0){
//       return "Buzz ";
//    }
//    else(num % 3 == 0){
//       return "Fizz";
//    }
// }
/////////////// Wild Wild Life  ///////////////////////

// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] ++;
(wolfy[3]= "Gotham City");
dart.splice(1,0,"Hawkins");
console.log(dart);
console.log(plantee);
wolfy[0] = "Gameboy";
console.log(wolfy);


////////////////// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

let ninja = [ "Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let x of ninja){
   let output = x.toUpperCase();
   console.log(output)
}

///////////////// Methods, Revisited  /////////////
// Here is a list of favMovies:

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// Use the method pop
// push"Guardians of the Galaxy"
// Reverse the array
// Use the shiftmethod
// unshift- what does it return?
// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// console.log your final results
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas',
     'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter',
      'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 
      'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8]);
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift();
favMovies.indexOf("Django Unchained");
favMovies.splice(3,1,"Avatar");
const midpoint = Math.ceil(favMovies.length / 2);
const firstHalf = favMovies.slice(midpoint);
console.log(firstHalf)
console.log(favMovies)
favMovies.indexOf("Fast and Furious");


/////////////////// Where is Waldo ////////////////

// With the following multi-dimensional array
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1)
whereIsWaldo[1][2]="No one";
console.log(whereIsWaldo[2][1][1])
console.log(whereIsWaldo)


/////////////// Excited Kitten  ////////////////

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
let kittens = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
let i = 1;
// while(i<=20){
//    console.log(` i times :  Love me, pet me! HSSSSSS!`  )
// } i++

for(let i = 0; i<= 20 ;i++){
   if(i%2 == 0){
      let randomString = Math.floor(Math.random()*kittens.length);
      // console.log(randomString);
   }
}


/////////////////////// Find the Median  ////////////////////////

// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15


// let median = Math.ceil(nums.length/2);
// let median3 = Math.round (nums.length/2);

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
let num = nums.sort();
let median = Math.floor(num.length/2);
console.log(nums[median]);