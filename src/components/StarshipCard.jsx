function StarshipCard({ starship }) {
  const { name, starship_class, manufacturer, model } = starship

  return (
    <div>
      <h3>{name}</h3>
      <p>
        <strong>Class:</strong> {starship_class}
      </p>
      <p>
        <strong>Manufacturer:</strong> {manufacturer}
      </p>
      <p>
        <strong>Model:</strong> {model}
      </p>
    </div>
  )
}

export default StarshipCard
