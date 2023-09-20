import confetti from 'canvas-confetti'
import { useEffect, useState } from "react"

import { Board } from "./Components/Board.jsx"
import { Square } from "./Components/Square.jsx"
import { WinnerModal } from "./Components/WinnerModal.jsx"
import { checkEndGame, chekWinnerFrom } from "./Logic/Board.js"
import { resetGameStorage, saveGameToStorage } from './Logic/Storage/index.js'
import { TURNS } from './constants.js'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  })

  // Para determinar ganadores, null que no hay ganador aun
  // false hay un empate y true que si hay un ganador
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    // Resetear el local storage
    resetGameStorage()
  }

  const updateBoard = (index) => {
    // No actualizamos esta posicion
    // si ya tiene algo o existe un ganador
    if(board[index] || winner) return
    // actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar turno
    const newTurn = turn === TURNS.x ? TURNS.O : TURNS.x
    setTurn(newTurn)
    // Guardar partida
    saveGameToStorage({
      board: newBoard,
      currentTurn: newTurn
    })
    //Verificar si existe un ganador
    const newWinner = chekWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  useEffect(() => {
    console.log('useEffect')
  })

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={resetGame} >Reset el juego</button>
      <section className='game'>
      <Board boardToRender={board} updateBoard={updateBoard}/>
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
