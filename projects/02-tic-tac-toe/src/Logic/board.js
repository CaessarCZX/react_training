import { WINNER_COMBOS } from "../constants.js"

export const chekWinnerFrom = (boardToCheck) => {
  // Revisamos todas las combinaciones ganadoras para
  // saber si X o U gano
  for(const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] && // a --> x u o
      boardToCheck[a] === boardToCheck[b] && // a y b --> x --> x u o --> o
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] // x u o
    }
  }
  return null
}

export const checkEndGame = (boardToCheck) => {
  // Revisamos un empate
  // si no hay espacios
  // vacios en el tablero
  return boardToCheck.every((square) => square !== null)
}