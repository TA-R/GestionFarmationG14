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
              <th>Categorie</th>
              <th>Niveau</th>
              <th>Duree</th>
              <th>Places</th>
              <th>Statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formations.map((formation) => (
              <tr key={formation.id}>
                <td>{formation.title}</td>
                <td>{formation.category}</td>
                <td>{formation.level}</td>
                <td>{formation.duration}</td>
                <td>{formation.places}</td>
                <td>
                  <span className="admin-status">{formation.status}</span>
                </td>
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
