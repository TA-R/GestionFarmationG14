function FormationsSearch({ searchTerm, onSearchChange }) {
  return (
    <form className="formations-search" role="search">
      <label htmlFor="formations-search">Rechercher une formation</label>
      <input
        id="formations-search"
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Ex: React, SQL, Management..."
      />
    </form>
  )
}

export default FormationsSearch
