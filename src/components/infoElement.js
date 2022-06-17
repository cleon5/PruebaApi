import React from "react";

//<h2>Genero: {Element.origin.name}</h2>
const infoElement = ({ Element = [], Element2 = [], Element3 }) => {
  console.log(Element2);
  return (
    <div>
      <h1 className="text-center p-3">{Element.name}</h1>
      <hr />
      <div className="row justify-content-around">
        <div className="col-4 p-3 align-items-center">
          <h2>Estado: {Element.status}</h2>
          <h2>Genero: {Element.gender}</h2>
          {(() => {
            if (Element.type !== "") {
              return <h2>Tipo: {Element.type}</h2>;
            }
          })()}
          <h2>Especie: {Element.species}</h2>
          <hr></hr>
          <h2>Origen: {Element2.name}</h2>
          <h2>Localizacion: {Element3.name}</h2>
          
          
        </div>
        <div className="col-4">
          <img
            src={Element.image} alt=""
            style={{ height: "400px", width: "400px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default infoElement;
