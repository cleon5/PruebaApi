import Navbar from "../components/Navbar";
import Location from "../components/Location";
import Pagination from "../components/Pagination";
import React, { useEffect, useState } from "react";

function LocationPage() {
  const [Locations, setLocations] = useState([]);
  const [info, setinfo] = useState({});

  const urlLocation = "https://rickandmortyapi.com/api/location";
  const fetchLocation = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLocations(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevius = () => {
      fetchLocation(info.prev);
  };

  const onNext = () => {
      fetchLocation(info.next);
  };

  useEffect(() => {
      fetchLocation(urlLocation);
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
        <Location Location={Locations} />
      </div>

    
    </>
  
)
}

export default LocationPage