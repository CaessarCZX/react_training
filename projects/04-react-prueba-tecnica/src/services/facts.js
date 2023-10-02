const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    // Recover the random fact from API
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
    const json = await res.json()
    const { fact } = json
    return fact
  } catch (error) {
    console.error(error)
  }
}

export const setImgWhitWords = async ({ firstWord }) => {
  // Show an image with the first word together
  try {
    const res = await fetch(`https://cataas.com/cat/says/${firstWord}?size=:size&color=:color&json=true`)
    const json = await res.json()
    const { url } = json
    return url
  } catch (error) {
    console.error(error)
  }
}
