var scores = localStorage.getItem("scores");
var clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", clearScores);

function clearScores() {

}

scores = JSON.parse(scores)