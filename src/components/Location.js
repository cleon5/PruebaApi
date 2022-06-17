import React from "react";

const Location = ({ Location = [] }) => {
  return (
    <div>
      <ol className="list-group list-group-numbered">
        {Location.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.name}</div>
              <hr />
              <p>Tipo: {item.type}</p>
              <p>Dimension: {item.dimension}</p>
              <p>Residentes: {item.residents.length}</p>
            </div>
            <span className="badge bg-primary rounded-pill"></span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Location;
