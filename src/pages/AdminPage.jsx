import { useMemo, useState } from 'react'
import FormationForm from '../components/admin/FormationForm'
import FormationsTable from '../components/admin/FormationsTable'
import '../styles/admin.css'

const initialFormations = [
  {
    id: 1,
    title: 'Developpement Web avec React',
    category: 'Informatique',
    level: 'Intermediaire',
    duration: '6 semaines',
    places: 24,
    status: 'Active',
  },
  {
    id: 2,
    title: 'Gestion de Projet Agile',
    category: 'Management',
    level: 'Debutant',
    duration: '4 semaines',
    places: 18,
    status: 'Active',
  },
  {
    id: 3,
    title: 'Bases de Donnees SQL',
    category: 'Base de donnees',
    level: 'Debutant',
    duration: '5 semaines',
    places: 20,
    status: 'Active',
  },
]

function AdminPage() {
  const [formations, setFormations] = useState(initialFormations)

  const totalPlaces = useMemo(() => {
    return formations.reduce((total, formation) => total + formation.places, 0)
  }, [formations])

  const totalCategories = useMemo(() => {
    return new Set(formations.map((formation) => formation.category)).size
  }, [formations])

  const handleAddFormation = (formation) => {
    setFormations((currentFormations) => [formation, ...currentFormations])
  }

  const handleDeleteFormation = (formationId) => {
    setFormations((currentFormations) =>
      currentFormations.filter((formation) => formation.id !== formationId),
    )
  }

  return (
    <main className="admin-page">
      <section className="admin-hero">
        <div className="site-container admin-hero__inner">
          <div>
            <p className="admin-eyebrow">Espace administrateur</p>
            <h1>Gestion des formations</h1>
            <p>
              Ajoutez, consultez et organisez les formations disponibles depuis
              un tableau de bord clair et rapide.
            </p>
          </div>
        </div>
      </section>

      <section className="site-container admin-dashboard">
        <div className="admin-stats">
          <article className="admin-stat">
            <span>Formations</span>
            <strong>{formations.length}</strong>
          </article>
          <article className="admin-stat">
            <span>Categories</span>
            <strong>{totalCategories}</strong>
          </article>
          <article className="admin-stat">
            <span>Places</span>
            <strong>{totalPlaces}</strong>
          </article>
        </div>

        <div className="admin-content">
          <FormationForm onAddFormation={handleAddFormation} />
          <FormationsTable
            formations={formations}
            onDeleteFormation={handleDeleteFormation}
          />
        </div>
      </section>
    </main>
  )
}

export default AdminPage
