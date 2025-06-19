import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SongDetail = () => {
  const { id } = useParams();
  const [songs, setsongs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchsongs = async () => {
      if (!id) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `/api/v1/json/2/track.php?m=${id}`

        );
        setsongs(response.data.track);
      } catch (error) {
        setError(error.message);
      } 
        setIsLoading(false)
    };

    fetchsongs();
  }, [id]);

  if (isLoading) return <p>Cargando detalles...</p>;
  if (error) return <p>Error al cargar detalles: {error}</p>;
  if (!songs) return <p>No se encontró el álbum.</p>;

  return (
    <>
      <h2>{songs[0].strAlbum}</h2>
      
      {songs.map((songs)=>{
        return(
        <div className="playlist" key={songs.idTrack}>
        <p className="song-title">Cancion: {songs.strTrack}</p>
        <p className="song-artist">Artista: {songs.strArtist}</p>
        <p div className="song-duration">Album:{songs.strAlbum}</p>
        </div>
        )
      })}

   </>
  );
};

export default SongDetail;
