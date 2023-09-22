import { Square } from './Square.jsx'

export function Board ({ boardToRender, updateBoard }) {
  return (
    boardToRender.map((_, index) => {
      return (
        <Square
          key={index}
          index={index}
          updateBoard={updateBoard}
        >
          {boardToRender[index]}
        </Square>
      )
    })
  )
}
