import StarshipCard from './StarshipCard'

function StarshipList({ starships }) {
  if (!starships.length) {
    return <p>Loading...</p>
  }

  return (
    <section>
      <p>{starships.length} results found</p>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StarshipList
