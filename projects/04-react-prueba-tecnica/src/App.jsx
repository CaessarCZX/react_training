import './App.css'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Kitty fun fact app</h1>
      <button onClick={handleClick}>Change a new Fact</button>
      <article>
        {fact && <p><b>Fact: </b>{fact}</p>}
        <picture>
          {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
        </picture>
      </article>
    </main>
  )
}
