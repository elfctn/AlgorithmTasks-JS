function macOzeti(homeTeam, awayTeam) {
  let homeScore = 0;
  let awayScore = 0;
  const result = [];

  const skorUret = () => {
    return Math.floor(Math.random() * 15) + 12;
  };

  for (let p = 0; p < 4; p++) {
    homeScore = homeScore + skorUret();
    awayScore = awayScore + skorUret();
    result.push(
      `${p + 1}. Periyot: ${homeTeam} ${homeScore} - ${awayTeam} ${awayScore}`
    );
  }

  let last = "";
  if (homeScore > awayScore) {
    last = `Maç Sonucu: ${homeTeam} ${homeScore} - ${awayScore} kazandı`;
  } else if (homeScore < awayScore) {
    last = `Maç Sonucu: ${homeTeam} ${homeScore} - ${awayScore} kaybetti`;
  } else {
    last = `Maç ${homeScore} - ${awayScore} ile uzatmalara gitti`;
  }
  result.push(last);

  return result;
}

console.log("*******", macOzeti("A", "B"));
