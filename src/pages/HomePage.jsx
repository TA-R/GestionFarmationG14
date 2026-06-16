import { useMemo, useState } from 'react'
import FormationsList from '../components/formations/FormationsList'
import FormationsSearch from '../components/formations/FormationsSearch'
import '../styles/formations.css'

const mockFormations = [
  {
    id: 1,
    title: 'Developpement Web avec React',
    category: 'Informatique',
    level: 'Intermediaire',
    duration: '6 semaines',
    description:
      'Apprenez a creer des interfaces modernes avec React, les composants, les props et la gestion d etat.',
  },
  {
    id: 2,
    title: 'Gestion de Projet Agile',
    category: 'Management',
    level: 'Debutant',
    duration: '4 semaines',
    description:
      'Decouvrez les bases de Scrum, la planification agile et le suivi efficace des taches en equipe.',
  },
  {
    id: 3,
    title: 'Bases de Donnees SQL',
    category: 'Base de donnees',
    level: 'Debutant',
    duration: '5 semaines',
    description:
      'Maitrisez les requetes SQL, la conception des tables et les relations entre les donnees.',
  },
  {
    id: 4,
    title: 'Communication Professionnelle',
    category: 'Soft Skills',
    level: 'Tous niveaux',
    duration: '3 semaines',
    description:
      'Ameliorez votre communication orale, vos presentations et votre collaboration en milieu professionnel.',
  },
]

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFormations = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    if (!normalizedSearch) {
      return mockFormations
    }

    return mockFormations.filter((formation) => {
      return (
        formation.title.toLowerCase().includes(normalizedSearch) ||
        formation.category.toLowerCase().includes(normalizedSearch) ||
        formation.level.toLowerCase().includes(normalizedSearch)
      )
    })
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
            <strong>{mockFormations.length}</strong>
            <span>Formations</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Domaines</span>
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

        <FormationsList formations={filteredFormations} />
      </section>
    </main>
  )
}

export default HomePage
