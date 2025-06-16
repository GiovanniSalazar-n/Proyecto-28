import Header from './components/Header';
import SearchResults from './components/SearchResults'
import Library from './components/Library'
import './App.css';
import React, { useEffect, useState } from 'react';

const App=()=> {
  const [Result,setResults]=useState([
              { id:1 ,title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
              { id:2 ,title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
              { id:3 ,title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", duration: "3:47" },
              { id:4 ,title: "Shape of You", artist: "Ed Sheeran", duration: "3:53" }
            
    ]);
  const[userLibrary,setLibrary]=useState([]);
 useEffect(()=>{
  console.log("App cargada Correctamente");
 },[]);
  useEffect(()=>{
  console.log("Se agrego una cancion  a la carpeta de usuario")
 },[userLibrary]);
const handeleAddSong =(song)=>{
  setLibrary([...userLibrary,song]);
};
  return (
      <>
        <Header appName="Mi Play list" />
        <main>
            <SearchResults songs={Result} onAddSong={handeleAddSong}/>
            <Library Library={userLibrary}  />
        </main>
      </>
    );
  
  }


export default App;
