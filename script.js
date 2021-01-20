var score = 0;
var highscore = localStorage.getItem(localStorage);
var questions = document.getElementById("quizQuestions");

var timer = seconds;
function startTimer(duration, display);

var questions = [
    {
        questionTitle: "first question", 
        answerTitle: ["1","2","3","4"],
        answertoQuestion: "1"
    }
]

function beginQuiz(){
    var startingScreen = document.getElementById("codingQuiz");
    startingScreen.setAttribute("class", "invisible");
    questions.removeAttribute("class");

    //set up timer
    //select span time for value to change on timer
    //set timer to decrement from __ seconds
    //call another function that gets first question
}

//print time to screen 
// .textContent (gets timer to show up on screen)


//get question function
//get question from inside the array of objects
//select h2 question title
//set questionTitle = value of first object (answerTitle)
//print to screen .textContent

//go to first object and do for loop
//dynamically create buttons in JS
//setAttributes based on choices from arr in first object

//set up "onclick.eventListener" for each button 
//append buttons to div

//another function for what happens when user clicks on answer(s)
//get value from button clicked to compare it against value of actual answer
//if statement - if question is wrong, subtract time(15 sec) -> paragraph saying answer is wrong, else question is right, move to next question
// set timer to 0 as to not go negative

//increment index of questions (moves to next question)
//check if current Q index is = length.array of questions
//if true, call function to end game
//if false, call get question function
//stop timer
//show ending screen
//hide questions
//show final score (span with final score) = var with time stored in it

//function to save high score
//input in html for initials
//store initials and final score in localStorage

//redirect user to save high score page
//set up onclick eventListener for button that user clicks to submit initials
//onclick eventListener for starting quiz --sets off start quiz function

//function to print high scores
//gets values from local storage and sorts from highest to lowest
//for loop that looks at localStorage
//creates list with initials and HS
//append to html

//clear highscores function
//clears from localStorage and resets page