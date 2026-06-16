function FormationCard({ formation }) {
  return (
    <article className="formation-card">
      <div className="formation-card__header">
        <span className="formation-card__category">{formation.category}</span>
        <span className="formation-card__level">{formation.level}</span>
      </div>

      <h3>{formation.title}</h3>
      <p>{formation.description}</p>

      <div className="formation-card__footer">
        <span>{formation.duration}</span>
        <button type="button">Voir details</button>
      </div>
    </article>
  )
}

export default FormationCard
