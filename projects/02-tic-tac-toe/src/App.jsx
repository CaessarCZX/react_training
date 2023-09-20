import { useState } from "react"
import confetti from 'canvas-confetti'

import { Square } from "./Components/Square.jsx"
import { WinnerModal } from "./Components/WinnerModal.jsx"
import { TURNS } from './constants.js'
import { chekWinnerFrom, checkEndGame } from "./Logic/Board.js"
import { Board } from "./Components/Board.jsx"

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.x)

  // Para determinar ganadores, null que no hay ganador aun
  // false hay un empate y true que si hay un ganador
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
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
    //Verificar si existe un ganador
    const newWinner = chekWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
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
