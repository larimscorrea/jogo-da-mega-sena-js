var state = { board: [], currentGame: [], savedGames: [] };

function start() {
  console.logo(state.currentGame);
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('Número inválido', numberToRemove);
    return;
  } else if (state.currentGame.length >= 6) {
    console.error('O jogo já está completo');
    return;
  } else if (isNumberInGame(numberToAdd)) {
    console.error('Este número já está no jogo', numberToAdd);
    return;
  }
  state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
  var newGame = [];

  for (var i = 0; i < state.currentGame.length; i++) {
    var currentGame = state.currentGame[i];

    if (currentGame === numberToRemove) {
      continue;
    }
    newGame.push(currentGame);
  }
  state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
  if (state.currentGame.includes(numberToCheck)) {
    return true;
  }

  return false;
}

start();
