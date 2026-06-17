import { useEffect, useState } from 'react'
import FormationsList from '../components/formations/FormationsList'
import FormationsSearch from '../components/formations/FormationsSearch'
import { getFormations } from '../api/formationsApi'
import '../styles/formations.css'

function HomePage() {
  const [formations, setFormations] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadFormations = async () => {
      try {
        setIsLoading(true)
        setError('')
        const data = await getFormations(searchTerm)
        setFormations(data)
      } catch {
        setError('Impossible de charger les formations depuis le serveur.')
      } finally {
        setIsLoading(false)
      }
    }

    loadFormations()
  }, [searchTerm])

  return (
    <main className="formations-page">
      <section className="formations-hero">
        <div className="formations-hero__content">
          <p className="formations-hero__eyebrow">Plateforme de formation</p>
          <h1>Gestion Formation</h1>
          <p className="formations-hero__description">
            Une plateforme simple pour consulter, rechercher et organiser les
            formations disponibles selon les besoins des apprenants.
          </p>
          <a className="formations-hero__button" href="#formations-list">
            Explorer les formations
          </a>
        </div>

        <div
          className="formations-hero__summary"
          aria-label="Resume des formations"
        >
          <div>
            <strong>{formations.length}</strong>
            <span>Formations</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Niveaux</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Accessible</span>
          </div>
        </div>
      </section>

      <section className="formations-section" id="formations-list">
        <div className="formations-section__header">
          <div>
            <p className="formations-section__eyebrow">Catalogue</p>
            <h2>Formations disponibles</h2>
          </div>
          <p>
            Recherchez une formation par titre, domaine ou niveau pour trouver
            rapidement le parcours adapte.
          </p>
        </div>

        <FormationsSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {isLoading && <p className="formations-state">Chargement...</p>}
        {error && <p className="formations-error">{error}</p>}
        {!isLoading && !error && <FormationsList formations={formations} />}
      </section>
    </main>
  )
}

export default HomePage
