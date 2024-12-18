import { useState, useEffect } from 'react'
import { getStarships } from './services/starshipService'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import './App.css'

function App() {
  const [starships, setStarships] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchData() {
      const data = await getStarships()
      setStarships(data.results || [])
    }
    fetchData()
  }, [])

  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main>
      <StarshipSearch onSearch={setSearchQuery} />
      <StarshipList starships={filteredStarships} />
    </main>
  )
}

export default App
