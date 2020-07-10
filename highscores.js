// Assigning variables to selected HTML elements
var scores = localStorage.getItem("scores");
var clearButton = document.querySelector("#clear");
var userScore = document.querySelector("#user-score");

// Adding an event listener to the clear highscores button
clearButton.addEventListener("click", clearScores);
displayScore();

// Displaying final score and user's initials to new div
function displayScore() {
    scores = JSON.parse(scores);
    for (var i = 0; i < scores.length; i++) {
        var scoreDiv = document.createElement("div");
        var num = i + 1;
        var str = num + ". " + scores[i].initials + ": " + scores[i].score;
        scoreDiv.innerHTML = str;
        userScore.append(scoreDiv);
        scoreDiv.style.fontSize = "20px";

    }
}

// Clearing all scores stored on the highscores page
function clearScores() {
    localStorage.clear();
    scoreDiv.textContent("");
}