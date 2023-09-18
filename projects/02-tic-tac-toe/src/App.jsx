import { useState } from "react"

const TURNS = {
  x: 'x',
  O: 'o'
}


const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 1, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.x)

  // Para determinar ganadores, null que no hay ganador aun
  // false hay un empate y true que si hay un ganador
  const [winner, setWinner] = useState(null)

  const chekWinner = (boardToCheck) => {
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
    const newWinner = chekWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
    }
  }
  return (
    <main className='board'>
      <h1>Tic tac toe Game</h1>
      <section className='game'>
      {
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })
      }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
