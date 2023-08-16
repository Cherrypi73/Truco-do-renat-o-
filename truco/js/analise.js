function addPoints(team, points) {
    const scoreElement = document.getElementById(`${team}Score`);
    let currentScore = parseInt(scoreElement.textContent);
    currentScore += points;
    scoreElement.textContent = currentScore;
  
    if (currentScore >= 12) {
      alert(`Vitória da ${team === 'team1' ? 'Equipe 1' : 'Equipe 2'}!`);
      resetScores();
    }
  }
  
  function resetScores() {
    document.getElementById('team1Score').textContent = '0';
    document.getElementById('team2Score').textContent = '0';
  }
  
  
  



/*let team1point = 0;
let team2point = 0;
function updatepoint(team,points) {
    if (team ==='team1'){
        team1point += points;
        document.getElementById('team1point')
    } else if (team === 'team2') {
        team2point += points;
        document.getElementById('team2point').textContent = team2point;
      }
}
if (team1point >= 12) {
    alert(`Vitória da equipe Super Shy!`);
    resetScores();
  } else if (team2point >= 12) {
    alert(`Vitória da equipe Get up!`);
    resetScores();
}
function resetScores() {
    team1point = 0;
    team2point = 0;
   
  }


  <div class="container">
   <h2> Pontuador de Truco</h2>
   <div class="team">
  <p >Equipe Super Shy</p>
  <span class="pont" id="team1point">0</span>
    <button class="button" onclick="updatepoint('team1', 1)">+1</button>
    <button class="Button" onclick="updatepoint('team1', 3)">+3</button>
    <button class="Button" onclick="updatepoint('team1', 6)">+6</button>
    <button class="Button" onclick="updatepoint('team1', 12)">+12</button>
  </div>
 <div class="team">
    
    <p >Equipe Get up</p>
    <span class="pont" id="team2point">0</span>
    <button class="Button" onclick="updatepoint('team2', 1)">+1</button>
    <button class="Button" onclick="updatepoint('team2', 3)">+3</button>
    <button class="Button" onclick="updatepoint('team2', 6)">+6</button>
    <button class="Button" onclick="updatepoint('team2', 12)">+12</button>

 </div>
</div>
    </div>
  */
