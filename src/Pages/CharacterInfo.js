import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import InfoElement from "../components/infoElement";

const CharacterInfo = () => {
  let { id } = useParams();
  let element = "https://rickandmortyapi.com/api/character/" + id;
  const [Element, setElement] = useState([]);
  const [Element2, setElement2] = useState([]);
  const [Element3, setElement3] = useState([]);
  const fetchCharacter = async (element) => {
    await fetch(element)
      .then((response) => response.json())
      .then((data) => {
        setElement(data)
        setElement2(data.origin)
        setElement3(data.location)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacter(element);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />

      <InfoElement Element={Element} Element2={Element2} Element3 = {Element3}></InfoElement>
    </>
  );
};

export default CharacterInfo;
