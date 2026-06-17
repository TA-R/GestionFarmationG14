import { useState } from 'react'

const initialFormState = {
  titre: '',
  niveau: 'Debutant',
  duree: '',
  prix: '',
}

function FormationForm({ onSubmitFormation, selectedFormation, onCancelEdit, isSaving }) {
  const [formData, setFormData] = useState(() =>
    selectedFormation
      ? {
          titre: selectedFormation.titre,
          niveau: selectedFormation.niveau,
          duree: String(selectedFormation.duree),
          prix: String(selectedFormation.prix),
        }
      : initialFormState,
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const isSaved = await onSubmitFormation({
      ...formData,
      duree: Number(formData.duree),
      prix: Number(formData.prix),
    })

    if (isSaved && !selectedFormation) {
      setFormData(initialFormState)
    }
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div className="admin-form__header">
        <p className="admin-eyebrow">
          {selectedFormation ? 'Modifier formation' : 'Nouvelle formation'}
        </p>
        <h2>{selectedFormation ? 'Modifier la formation' : 'Ajouter une formation'}</h2>
      </div>

      <div className="admin-form__grid">
        <label>
          Titre
          <input
            name="titre"
            type="text"
            value={formData.titre}
            onChange={handleChange}
            placeholder="Ex: Developpement Web"
            required
          />
        </label>

        <label>
          Niveau
          <select name="niveau" value={formData.niveau} onChange={handleChange}>
            <option value="Debutant">Debutant</option>
            <option value="Intermediaire">Intermediaire</option>
            <option value="Avance">Avance</option>
            <option value="Tous niveaux">Tous niveaux</option>
          </select>
        </label>

        <label>
          Duree
          <input
            name="duree"
            type="number"
            min="1"
            value={formData.duree}
            onChange={handleChange}
            placeholder="Ex: 30"
            required
          />
        </label>

        <label>
          Prix
          <input
            name="prix"
            type="number"
            min="0"
            step="0.01"
            value={formData.prix}
            onChange={handleChange}
            placeholder="1200"
            required
          />
        </label>
      </div>

      <div className="admin-form__actions">
        <button className="admin-form__button" type="submit" disabled={isSaving}>
          {isSaving ? 'Enregistrement...' : selectedFormation ? 'Modifier' : 'Ajouter'}
        </button>
        {selectedFormation && (
          <button
            className="admin-form__cancel"
            type="button"
            onClick={() => {
              setFormData(initialFormState)
              onCancelEdit()
            }}
          >
            Annuler
          </button>
        )}
      </div>
    </form>
  )
}

export default FormationForm
