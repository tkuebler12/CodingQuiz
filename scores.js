function writeHighScores() {
    var highscores = JSON.parse(window.localStorage.getItem("High Scores")) || [];
    console.log(highscores);
    highscores.sort(function(a, b){
        return b.score - a.score;
    });
    highscores.forEach(function(score){
        var li = document.createElement("li");
        li.textContent = score.initials + "-" + score.score;
        var ol = document.getElementById("highscores");
        ol.appendChild(li);
    });
}
function clearscores() {
    window.localStorage.removeItem("High Scores");
    window.location.reload();
}
document.getElementById("clearscores").onclick = clearscores;

writeHighScores();