import Header from './components/Header';
import SearchResults from './components/SearchResults';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useFetch from './components/hooks/useFetch';
import SearchBar from './components/SearchBar';
import SongDetail from './components/SongDetail';


const App = () => {
  const [result, setResults] = useState([]);
  const [userLibrary, setLibrary] = useState([]);
  const [artistName, setArtistName] = useState("");

  const handleSearch = (name) => {
    setArtistName(name);
  };

  const { albums, error, isLoading } = useFetch({ artistName });

  useEffect(() => {
    if (albums) {
      setResults(albums);
    }
  }, [albums]);

  const handeleAddSong = (song) => {
    setLibrary([...userLibrary, song]);
  };

  return (
    <>
      <Header appName="Mi Play list" />
      <main>
        
        <Routes>
          <Route
            path="/"
            element={
              <>
              <SearchBar onSearch={handleSearch} />
              <SearchResults
                songs={result}
                onAddSong={handeleAddSong}
                isLoading={isLoading}
                error={error}
              />
              </>
              
            }
          />
          <Route
            path="/song/:id"
            element={<SongDetail/>}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
