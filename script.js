var score = 0;
var highscore = localStorage.getItem(localStorage);
var questionsEl = document.getElementById("quizQuestions");
var timerEl = document.getElementById("timerRemaining");
var timerId;
var quizTime = 75;
var questionIndex = 0;
var quizAnswers = document.getElementById("quizAnswers");
var response = document.getElementById("response");
var startbutton = document.getElementById("startbutton");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highscoresEl = document.getElementById("highscoresEl");
console.log("test");
// var timer = seconds;
// function startTimer(duration, display);

var questions = [
    {
        questionTitle: "What is the basic markup langauge?", 
        answers: ["Javascript","HTML","CSS","jQuery", "MySQL"],
        answertoQuestion: "HTML"
    },
    {
        questionTitle: "How can you style an HTML page?", 
        answers: ["Javascript","MySQL","CSS","Bootstrap", "Materialize"],
        answertoQuestion: "CSS"
    },
    {
        questionTitle: "What is one popular styling site?", 
        answers: ["GitHub","GitBash","Bootstrap","CSS", "Google"],
        answertoQuestion: "Bootstrap"
    },
    // {
    //     questionTitle: "", 
    //     answers: ["1","2","3","4", "5"],
    //     answertoQuestion: "1"
    // },
    // {
    //     questionTitle: "first question", 
    //     answers: ["1","2","3","4", "5"],
    //     answertoQuestion: "1"
    // }
]
// beginQuiz();
function beginQuiz(){
    var startingScreen = document.getElementById("codingQuiz");
    startingScreen.setAttribute("class", "invisible");
    questionsEl.removeAttribute("class");
    timerId = setInterval(timer, 1000);
    timerEl.textContent = quizTime;
    getQuizQuestion();
}
function timer() {
    quizTime--;
    timerEl.textContent = quizTime;
    if (quizTime <=0) {
    }
}
function getQuizQuestion() {
    var question = questions[questionIndex];
    console.log(question);
    var questionTitle = document.getElementById("Title");
    questionTitle.textContent = question.questionTitle;
    quizAnswers.innerHTML = "";
    console.log(questionTitle);
    question.answers.forEach(function(choice, i){
            var choiceButton = document.createElement("button");
        choiceButton.setAttribute("value", choice);
        console.log(choiceButton);
        choiceButton.textContent = i + 1 + ". " + choice;
        choiceButton.onclick = handleQuestionClick;
        quizAnswers.appendChild(choiceButton);
    });


}
function handleQuestionClick() {
    if (this.value !== questions[questionIndex].answertoQuestion){
        quizTime -= 15;
        if (quizTime < 0) {
            quizTime = 0;
        }
        timerEl.textContent = quizTime;
        response.textContent = "Incorrect Answer";
    }
    else {
        response.textContent = "You got it correct!";
    }
    questionIndex++;
    if (questionIndex === questions.length) {
        endQuiz();
    }
    else {
        getQuizQuestion();
    }

}
startbutton.onclick = beginQuiz;

function endQuiz() {
    clearInterval(timerId);
    var endingScreen = document.getElementById("endingScreen");
    endingScreen.removeAttribute("class");
    var playerfinalScore = document.getElementById("playerfinalScore");
    playerfinalScore.textContent = quizTime;
}
function saveHighScores() {
    var initial = initials.value.trim();
    if (initial !== "") {
        var highscores = JSON.parse(window.localStorage.getItem("High Scores")) || [];
        var newscore = {
            score: quizTime,
            initials: initial,
        }
        highscores.push(newscore);
        window.localStorage.setItem("High Scores", JSON.stringify(highscores));
        window.location.href = "highscores.html";
    }
}
submit.onclick = saveHighScores;