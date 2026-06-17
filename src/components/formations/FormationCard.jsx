function FormationCard({ formation }) {
  return (
    <article className="formation-card">
      <div className="formation-card__header">
        <span className="formation-card__category">
          {formation.duree} heures
        </span>
        <span className="formation-card__level">{formation.niveau}</span>
      </div>

      <h3>{formation.titre}</h3>
      <p>
        Formation de niveau {formation.niveau.toLowerCase()} avec une duree de{' '}
        {formation.duree} heures.
      </p>

      <div className="formation-card__footer">
        <span>{Number(formation.prix).toFixed(2)} MRU</span>
      </div>
    </article>
  )
}

export default FormationCard
