import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [form, setForm] = useState({ artist: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist.trim()) return;
    onSearch(form.artist);
  };

  const handleInputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label>Buscar artista</label>
      <input
        type="text"
        name="artist"
        value={form.artist}
        onChange={handleInputChange}
        placeholder="Ej: Coldplay"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
