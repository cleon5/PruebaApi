import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import { NavLink } from "react-router-dom";

const Inicio = () => {
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
      <NavLink to="/location">
        location
      </NavLink>

      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
        />
        <Characters Characters={Character} />
      </div>
    </>
  );
};

export default Inicio;
