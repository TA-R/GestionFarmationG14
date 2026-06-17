function FormationsTable({ formations, onDeleteFormation, onEditFormation }) {
  if (formations.length === 0) {
    return (
      <div className="admin-table admin-table--empty">
        <p>Aucune formation ajoutee pour le moment.</p>
      </div>
    )
  }

  return (
    <div className="admin-table">
      <div className="admin-table__header">
        <p className="admin-eyebrow">Catalogue</p>
        <h2>Liste des formations</h2>
      </div>

      <div className="admin-table__scroll">
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Niveau</th>
              <th>Duree</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formations.map((formation) => (
              <tr key={formation.id}>
                <td>{formation.titre}</td>
                <td>{formation.niveau}</td>
                <td>{formation.duree} heures</td>
                <td>{Number(formation.prix).toFixed(2)} MRU</td>
                <td>
                  <button
                    className="admin-table__edit"
                    type="button"
                    onClick={() => onEditFormation?.(formation)}
                  >
                    Modifier
                  </button>
                  <button
                    className="admin-table__delete"
                    type="button"
                    onClick={() => onDeleteFormation(formation.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FormationsTable
