function bingo(ticket, win){
let miniWins = 0;
  for(let i =0; i < ticket.length; i++){
    let str = ticket[i][0];
    let targetNum = ticket[i][1];
    let hasWonInSubarray = false;
    for (let j = 0; j < str.length; j++){
      if(str.charCodeAt(j) === targetNum){
        hasWonInSubarray = true;
        break
      }
    }
    if (hasWonInSubarray){
      miniWins++;
    }
  }
  return miniWins >= win ? 'Winner!' : 'Loser!';
}
