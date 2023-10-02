import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
  const [fact, setFact] = useState(null)

  const refreshFact = () => {
    getRandomFact().then(res => setFact(res))
  }

  // Retrieve the quote every time the screen is rendered
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
