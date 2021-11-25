
/* 
   Welcome to the Magic 8-ball Project.  Complete the 
   tasks outlined by the comments in this file.

   The following functions are available to you 
   (you can just call them):

   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the
   // string 'answerText'.
   function makeAnswerAppear(answerText)
*/

/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3

*/

let prevRandom = 0;
let currentRandom = 0;

function getRandomIntInclusive(min, max) {
  // generates a random number
  currentRandom = Math.floor(Math.random() * (max - min) + min);
  /*checks if the currentRandom is the same as prevRandom and if they are the same it generates a new number */
  while (prevRandom == currentRandom) {
  min = Math.ceil(min);
  max = Math.floor(max);
  currentRandom = Math.floor(Math.random() * (max - min) + min);
  }
  prevRandom = currentRandom;
  return currentRandom;
}

/* Write a function that handles the magic 8-ball being clicked. Here are the steps:

   - Create an array containing at least 5 possible answers as strings.
   - Generate a random array index by calling 
       getRandomIntInclusive function.
   - Call 'makeAnswerAppear' using the random
       answer you selected.
   - (Level-up) Prevent your code from selecting the 
       same answer multiple times in a row 
       (loops could be required).
*/

/* Makes it so when the enter/return key is clicked it will run the function answerQuestion().*/
var input = document.getElementById("question");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("eight-ball").click();
    }
});

function answerQuestion() {
  // Array with all possible answers.
  let questions = ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", " Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

  
  /* calls on getRandomIntInclusive() function to store a random number in between 0 and 20. */

  let arrayIndex = getRandomIntInclusive(0, 20);
  
  // calls makeAnswerAppear function and brings back a string from the answers array based on the random index number generated.
  makeAnswerAppear(questions[arrayIndex]);
}