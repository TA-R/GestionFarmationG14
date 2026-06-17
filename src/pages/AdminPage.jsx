import { useEffect, useMemo, useState } from 'react'
import FormationForm from '../components/admin/FormationForm'
import FormationsTable from '../components/admin/FormationsTable'
import {
  createFormation,
  deleteFormation,
  getFormations,
  updateFormation,
} from '../api/formationsApi'
import '../styles/admin.css'

function AdminPage() {
  const [formations, setFormations] = useState([])
  const [selectedFormation, setSelectedFormation] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')

  const loadFormations = async () => {
    try {
      setIsLoading(true)
      setError('')
      const data = await getFormations()
      setFormations(data)
    } catch {
      setError('Impossible de charger les formations depuis le serveur.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let isActive = true

    getFormations()
      .then((data) => {
        if (isActive) {
          setFormations(data)
        }
      })
      .catch(() => {
        if (isActive) {
          setError('Impossible de charger les formations depuis le serveur.')
        }
      })
      .finally(() => {
        if (isActive) {
          setIsLoading(false)
        }
      })

    return () => {
      isActive = false
    }
  }, [])

  const totalDuree = useMemo(() => {
    return formations.reduce((total, formation) => total + formation.duree, 0)
  }, [formations])

  const totalNiveaux = useMemo(() => {
    return new Set(formations.map((formation) => formation.niveau)).size
  }, [formations])

  const handleSubmitFormation = async (formation) => {
    try {
      setIsSaving(true)
      setError('')

      if (selectedFormation) {
        await updateFormation(selectedFormation.id, formation)
      } else {
        await createFormation(formation)
      }

      setSelectedFormation(null)
      await loadFormations()
      return true
    } catch {
      setError('Impossible d enregistrer la formation.')
      return false
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeleteFormation = async (formationId) => {
    try {
      setError('')
      await deleteFormation(formationId)
      setFormations((currentFormations) =>
        currentFormations.filter((formation) => formation.id !== formationId),
      )
    } catch {
      setError('Impossible de supprimer la formation.')
    }
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
            <span>Niveaux</span>
            <strong>{totalNiveaux}</strong>
          </article>
          <article className="admin-stat">
            <span>Heures</span>
            <strong>{totalDuree}</strong>
          </article>
        </div>

        {error && <p className="admin-error">{error}</p>}

        <div className="admin-content">
          <FormationForm
            key={selectedFormation?.id ?? 'new-formation'}
            isSaving={isSaving}
            selectedFormation={selectedFormation}
            onCancelEdit={() => setSelectedFormation(null)}
            onSubmitFormation={handleSubmitFormation}
          />
          {isLoading ? (
            <div className="admin-table admin-table--empty">
              <p>Chargement des formations...</p>
            </div>
          ) : (
            <FormationsTable
              formations={formations}
              onEditFormation={setSelectedFormation}
              onDeleteFormation={handleDeleteFormation}
            />
          )}
        </div>
      </section>
    </main>
  )
}

export default AdminPage
