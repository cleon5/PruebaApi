import logo from "./logo.svg";
import Location from "./Pages/LocationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import React, { useEffect, useState } from "react";
import Episode from "./Pages/EpisodePage";
import CharacterInfo from "./Pages/CharacterInfo";

function App() {
  const Home = () => {
    const [Character, setCharacter] = useState([]);
    const [info, setinfo] = useState({});
    
  
    const urlCharacter = "https://rickandmortyapi.com/api/character";
    const fetchCharacters = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data.results);
          setinfo(data.info);
        })
        .catch((error) => console.log(error));
    };
  
    const onPrevius = () => {
      fetchCharacters(info.prev);
    };
  
    const onNext = () => {
      fetchCharacters(info.next);
    };
  
    
    useEffect(() => {
      fetchCharacters(urlCharacter);
    }, []);
  
    
    return (
      <>
        <Navbar brand="Rick and Morty" />
  
        <div className="container mt-5">
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevius={onPrevius}
            onNext={onNext}
          />
          <Characters  Characters={Character} />
        </div>
  
      
      </>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/Location" element={<Location />}></Route>
        <Route path="/Episodes" element={<Episode />}></Route>
        <Route path="/Character/:id" element={<CharacterInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
