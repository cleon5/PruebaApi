import React from "react";

const Pagination = ({onPrevius, onNext, prev, next}) => {
  const Prev = () => {
    onPrevius();
  };
  const Next = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={Prev}>
              Prev
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={Next}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
export default Pagination;
