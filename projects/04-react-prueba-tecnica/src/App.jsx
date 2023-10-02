import { useEffect, useState } from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { getRandomFact } from './services/facts.js'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App () {
  const [fact, setFact] = useState(null)
  const { imageUrl } = useCatImage({ fact })

  // Retrieve the quote every time the screen is rendered
  useEffect(() => {
    getRandomFact().then(res => setFact(res))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Kitty fun fact app</h1>
      <button onClick={handleClick}>Change a new Fact</button>
      <article>
        {fact && <p><b>Fact: </b>{fact}</p>}
        <picture>
          {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
        </picture>
      </article>
    </main>
  )
}
