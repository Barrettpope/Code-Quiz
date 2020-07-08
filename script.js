var buttonA = document.getElementById("btnA");
var buttonB = document.getElementById("btnB");
var buttonC = document.getElementById("btnC");
var buttonD = document.getElementById("btnD");
var quizQuestions = document.getElementById("question");
var answerResponse = document.getElementById("user-answer");
var initials = document.querySelector("#inputInitials");
var finalScore = document.querySelector("#final-score");
var submitButton = document.querySelector("#submit");
buttonA.addEventListener("click", switchQuestion);
buttonB.addEventListener("click", switchQuestion);
buttonC.addEventListener("click", switchQuestion);
buttonD.addEventListener("click", switchQuestion);
submitButton.addEventListener("click", submitScore);

var startButton = document.querySelector("#start-button");
var startSection = document.querySelector("#startSection");
var submitSection = document.querySelector("#submitSection")
startButton.addEventListener("click", startQuiz);
var questionsSection = document.querySelector("#questionsSection");
var timerDisplay = document.querySelector("#timer");
var questions = [{
        question: "Inside which HTML element do we put the Javascript?",
        options: ["<javascript>", "<scripting>", "<js>", "<script>"],
        answer: "<script>"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "function.myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "How do you round the number 7.25 to the nearest interger?",
        options: ["round(7.25)", "Math.round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
        answer: "onclick"
    },
    {
        question: "How to write an IF statement for executing some code of 'i' is NOT equal to 5?",
        options: ["if(i <> 5)", "if(i != 5)", "if i =! 5 then", "if i <> 5"],
        answer: "if (i != 5)"
    },

]
var timer;
var timeCount = 60;
var index = 0;

function startQuiz() {
    assignQuestions();
    questionsSection.style.display = "block";
    startSection.style.display = "none";
    timer = setInterval(startQuestions, 1000);
}

function startQuestions() {
    timeCount--;
    timerDisplay.innerText = timeCount;
    if (timeCount === 0) {
        clearInterval(timer);
        questionsSection.style.display = "none";
        submitSection.style.display = "block";
    }

}

function assignQuestions() {
    quizQuestions.innerText = questions[index].question;
    buttonA.innerText = questions[index].options[0];
    buttonB.innerText = questions[index].options[1];
    buttonC.innerText = questions[index].options[2];
    buttonD.innerText = questions[index].options[3];
    index++;
}

function switchQuestion() {
    var selectAnswer = event.target.innerText;
    console.log(index);
    if (selectAnswer === questions[index - 1].answer) {
        answerResponse.innerText = "Correct!";
    } else {
        timeCount -= 15;
        answerResponse.innerText = "Wrong!";
        if (timeCount < 0) {
            timeCount === 0;
            clearInterval(timer);
            questionsSection.style.display = "none";
            submitSection.style.display = "block";
        }
    }
    if (index < questions.length && timeCount > 0) {
        assignQuestions();
    } else {
        clearInterval(timer);
        questionsSection.style.display = "none";
        submitSection.style.display = "block";
        finalScore.innerText = timeCount;
    }

}

var scores = [];

function submitScore() {
    scores.push({
        initials: initials.value,
        score: timeCount
    });

    localStorage.setItem("scores", JSON.stringify(scores));
}