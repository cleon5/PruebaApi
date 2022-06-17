import React from "react";
import {Link} from "react-router-dom";

const Characters = ({ Characters = [] }) => {
console.log(Characters)
  return (
    <div className="row">
      {Characters.map((item, index) => ( 
        <div key={index} className="col">
          <Link to={`/Character/${item.id}`} >
             <div className="card" style={{minWidth:"200px"}}>
                <img src={item.image} alt=""/>
            </div>
          </Link>
           
            <div className="card-body">
              
                <h5 className="card-title">{item.name}</h5>
                <hr/>
                <p>Especie: {item.species}</p>
                <p>Localizacion: {item.location.name}</p>

            </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
