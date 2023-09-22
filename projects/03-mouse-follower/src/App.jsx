import { useState } from 'react'
import { MouseFollower } from './components/MouseFollower.jsx'

function App () {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <MouseFollower />}
      <button
        onClick={() => setMounted(!mounted)}
      >
        {mounted ? 'No' : 'Si'} renderizar componente
      </button>
    </main>
  )
}

export default App
