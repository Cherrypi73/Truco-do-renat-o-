let team1point = 0;
let team2point = 0;
function updatepoint(team,points) {
    if (team ==='team1'){
        team1point += points;
        document.getElementById('team1point')
        document.getElementById('team1point').textContent = team1point;
    } else if (team === 'team2') {
        team2point += points;
        document.getElementById('team2point').textContent = team2point;
      }
if (team1point >= 12) {
  vitoria = "vitória do time Super Shy";
  document.getElementById('vitoria').textContent = vitoria;
    resetScores();
  } else if (team2point >= 12) {
    vitoria = "vitória do time Get Up";
    document.getElementById('vitoria').textContent = vitoria;
   
    resetScores();
}
function resetScores() {
    team1point = 0;
    team2point = 0;
    document.getElementById('team1point').textContent = team1point;
    document.getElementById('team2point').textContent = team2point;
  }
}
