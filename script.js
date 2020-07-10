// Assigning variables to selected HTML elements
var startSection = document.querySelector("#startSection");
var startButton = document.querySelector("#start-button");
var timerDisplay = document.querySelector("#timer");
var questionsSection = document.querySelector("#questionsSection");
var quizQuestions = document.querySelector("#question");
var buttonA = document.querySelector("#btnA");
var buttonB = document.querySelector("#btnB");
var buttonC = document.querySelector("#btnC");
var buttonD = document.querySelector("#btnD");
var answerResponse = document.querySelector("#user-answer");
var submitSection = document.querySelector("#submitSection")
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#inputInitials");
var submitButton = document.querySelector("#submit");


// Assigning global variables
var timer;
var timeCount = 60;
var index = 0;
var scores = [];

// Developing quiz questions with corresponding options and answers
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

// Adding event listeners to various buttons throughout the application
startButton.addEventListener("click", startQuiz);
buttonA.addEventListener("click", switchQuestion);
buttonB.addEventListener("click", switchQuestion);
buttonC.addEventListener("click", switchQuestion);
buttonD.addEventListener("click", switchQuestion);
submitButton.addEventListener("click", submitScore);

// Switching from the start section to the questions section && triggering timer start
function startQuiz() {
    assignQuestions();
    questionsSection.style.display = "block";
    startSection.style.display = "none";
    timer = setInterval(startQuestions, 1000);
}

// Decrementing timer count as array of questions begin
function startQuestions() {
    timeCount--;
    timerDisplay.innerText = timeCount;
    if (timeCount === 0) {
        clearInterval(timer);
        questionsSection.style.display = "none";
        submitSection.style.display = "block";
    }

}

// Displaying quiz questions and options
function assignQuestions() {
    quizQuestions.innerText = questions[index].question;
    buttonA.innerText = questions[index].options[0];
    buttonB.innerText = questions[index].options[1];
    buttonC.innerText = questions[index].options[2];
    buttonD.innerText = questions[index].options[3];
    index++;
}

// Recording a response dependent upon whether the user's answer equals the stored answer && switching to the submit scores section once timer expires or all questions have been answered
function switchQuestion() {
    var selectedAnswer = event.target.innerText;
    if (selectedAnswer === questions[index - 1].answer) {
        answerResponse.innerText = "Correct!";
    } else {
        timeCount -= 15;
        answerResponse.innerText = "Wrong!";
        if (timeCount <= 0) {
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
        finalScore.innerText = timeCount += 15;
    }

}

// Pushing the recorded final score and user's initials once submit button is clicked
function submitScore() {
    scores = JSON.parse(localStorage.getItem('scores')) || [];

    scores.push({
        initials: initials.value,
        score: timeCount
    });

    localStorage.setItem("scores", JSON.stringify(scores));
    initials.value = "";
}





// Clear scores function