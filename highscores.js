var scores = localStorage.getItem("scores");
var clearButton = document.querySelector("#clear");
var userScore = document.querySelector("#user-score");

clearButton.addEventListener("click", clearScores);

function displayScore() {
    scores = JSON.parse(scores);
    //scores is an array of objects
    //loop through scores, and create a new element (<div>) for each object in that array
    //loop
    for (var i = 0; i < scores.length; i++) {
        var scoreDiv = document.createElement("div");
        var num = i + 1;
        var str = num + ". " + scores[i].initials + ": " + scores[i].score;
        scoreDiv.innerHTML = str;
        userScore.append(scoreDiv);
        scoreDiv.style.fontSize = "18px";
    }
    //create new div

    //add a number, item.initials, and item.score to a new string
    //set the text / innerHTML of our new div to that string
    //append the new div to userScore
    //endloop


}

displayScore();

function clearScores() {
    clearInterval(userScore);
}

clearScores();