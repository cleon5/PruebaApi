import React from "react";

const Episode = ({ Episodes = [] }) => {
  return (
    <div className="row">
      <ol className="list-group list-group-numbered">
        {Episodes.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.name}</div>
              <hr />
              <p>Episodio: {item.episode}</p>
              <p>Personajes: {item.characters.length}</p>
            </div>
            <span className="badge bg-primary rounded-pill">
              {item.air_date}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Episode;
