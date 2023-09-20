export const saveGameToStorage = ({ board, currentTurn }) => {
  // Guardar la partida aqui
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', currentTurn)
}

export const resetGameStorage = () => {
  // Resetear el local storage
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}