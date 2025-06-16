import React  from "react";
import Add from "../../../assets/addList.svg"
const Song =({title,artist,duration,id,onAdd})=>{

            return (
      <li className="song" key={id}>
        <div className="song-info">
          <div className="song-title">{title}</div>
          <div className="song-artist">{artist}</div>
        </div>
        <div className="song-duration">{duration}</div>
        <img 
        className="song-button" 
        src={Add} 
        onClick={onAdd} 
        alt="add"/>
      </li>


    );
    }


export default Song