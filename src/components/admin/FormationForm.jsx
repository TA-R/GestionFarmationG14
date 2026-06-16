import { useState } from 'react'

const initialFormState = {
  title: '',
  category: '',
  level: 'Debutant',
  duration: '',
  places: '',
}

function FormationForm({ onAddFormation }) {
  const [formData, setFormData] = useState(initialFormState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    onAddFormation({
      ...formData,
      id: Date.now(),
      places: Number(formData.places),
      status: 'Active',
    })

    setFormData(initialFormState)
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div className="admin-form__header">
        <p className="admin-eyebrow">Nouvelle formation</p>
        <h2>Ajouter une formation</h2>
      </div>

      <div className="admin-form__grid">
        <label>
          Titre
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ex: Developpement Web"
            required
          />
        </label>

        <label>
          Categorie
          <input
            name="category"
            type="text"
            value={formData.category}
            onChange={handleChange}
            placeholder="Ex: Informatique"
            required
          />
        </label>

        <label>
          Niveau
          <select name="level" value={formData.level} onChange={handleChange}>
            <option value="Debutant">Debutant</option>
            <option value="Intermediaire">Intermediaire</option>
            <option value="Avance">Avance</option>
            <option value="Tous niveaux">Tous niveaux</option>
          </select>
        </label>

        <label>
          Duree
          <input
            name="duration"
            type="text"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Ex: 6 semaines"
            required
          />
        </label>

        <label>
          Places
          <input
            name="places"
            type="number"
            min="1"
            value={formData.places}
            onChange={handleChange}
            placeholder="24"
            required
          />
        </label>
      </div>

      <button className="admin-form__button" type="submit">
        Ajouter
      </button>
    </form>
  )
}

export default FormationForm
