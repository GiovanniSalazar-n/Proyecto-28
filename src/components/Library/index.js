import React  from "react";

const Library=({Library})=>{
    return(
        <ul className="playlist">
            <h1 className="library-title">Biblioteca de Usuario</h1>
        {    
        Library.map(song=>{

        return(
         <li className="song" key={song.id}>
            <div className="song-info">
            <div className="song-title">{song.title}</div>
            <div className="song-artist">{song.artist}</div>
            </div>
            <div className="song-duration">{song.duration}</div>
        </li>
        )})

        }
        </ul>
    )
}
export default Library