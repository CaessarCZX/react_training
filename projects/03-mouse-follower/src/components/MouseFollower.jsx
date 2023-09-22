import { useEffect, useState } from 'react'

export function MouseFollower () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({
        x: clientX,
        y: clientY
      })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Es una buena practica limpiar las suscripciones de efectos que se renderizan
    // para ello existe la funcion return en el useEffect, pues permite aplicar logica
    // que revertira el efecto suscrito por medio de sus dependencias.
    // IMPROTANTE! Solo se ejecuta cuando el componente se desmonta.
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '100vh',
        opacity: 0.35,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button
        onClick={() => setEnabled(!enabled)}
      >
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}
