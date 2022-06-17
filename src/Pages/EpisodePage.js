import Navbar from "../components/Navbar";
import Episode from "../components/Episode";
import Pagination from "../components/Pagination";
import React, { useEffect, useState } from "react";

function EpisodePage() {
    const [Episodes, setEpisodes] = useState([]);
    const [info, setinfo] = useState({});
  
    const urlEpisodes = "https://rickandmortyapi.com/api/episode";
    const fetchEpisodes = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setEpisodes(data.results);
          setinfo(data.info);
        })
        .catch((error) => console.log(error));
    };
  
    const onPrevius = () => {
        fetchEpisodes(info.prev);
    };
  
    const onNext = () => {
        fetchEpisodes(info.next);
    };
  
    useEffect(() => {
        fetchEpisodes(urlEpisodes);
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
          <Episode Episodes={Episodes} />
        </div>
  
      
      </>
    
  )
}

export default EpisodePage