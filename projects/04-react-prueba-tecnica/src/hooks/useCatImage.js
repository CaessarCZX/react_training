import { useEffect, useState } from 'react'
import { setImgWhitWords } from '../services/facts.js'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)

  // retrieve an image every time we get the first three words of the quote
  useEffect(() => {
    if (!fact) return

    // Recover the first 3 words
    const firstWord = fact.split(' ', 3).join(' ')

    setImgWhitWords({ firstWord }).then(res => setImageUrl(res))
  }, [fact])

  return { imageUrl }
}
