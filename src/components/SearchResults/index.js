import React  from "react";
import Song from "./Song";
const SearchResults =({songs,onAddSong})=>{
    return(
    <ul className="playlist">
        {    
        songs.map(song=>{

        return(
        <>
        <Song
        title={song.title}
        artist={song.artist}
        duration={song.duration}
        id={song.id}
        onAdd={()=>onAddSong(song)}
        />
        </>
        )})
        }
    
    </ul>

    )
}
export default SearchResults