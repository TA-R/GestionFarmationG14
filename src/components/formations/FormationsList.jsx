import FormationCard from './FormationCard'

function FormationsList({ formations }) {
  if (formations.length === 0) {
    return (
      <p className="formations-empty">
        Aucune formation ne correspond a votre recherche.
      </p>
    )
  }

  return (
    <div className="formations-grid">
      {formations.map((formation) => (
        <FormationCard key={formation.id} formation={formation} />
      ))}
    </div>
  )
}

export default FormationsList
