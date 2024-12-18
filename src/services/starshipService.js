const BASE_URL = 'https://swapi.dev/api/starships/'

export async function getStarships() {
  const response = await fetch(BASE_URL)
  if (!response.ok) throw new Error('Failed to fetch starships')
  return await response.json()
}
