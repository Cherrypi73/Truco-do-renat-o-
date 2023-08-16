let team1point = 0;
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