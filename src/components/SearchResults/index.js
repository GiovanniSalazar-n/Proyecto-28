import React from "react";
import Song from "./Song";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ songs, onAddSong, isLoading, error }) => {
  const navigate = useNavigate();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (songs.length === 0) return <p>No se encontraron resultados.</p>;

  return (
    <ul className="playlist">
      {songs.map((song) => (
        <Song
          key={song.idAlbum}
          title={song.strAlbum}
          artist={song.strArtist}
          duration={song.intYearReleased}
          id={song.idAlbum}
          onAdd={() => onAddSong(song)}
          onClick={() => navigate(`/song/${song.idAlbum}`)}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
