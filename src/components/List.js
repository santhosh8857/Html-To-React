import React from "react";

const List = (props) => {
  return (
    <ul className="fa-ul">
      {props.arr.map((data, key) => {
        return (
          <li
            key={key}
            className={key > 3 && props.price === 0 ? "text-muted" : ""}
          >
            {props.price === 0 && key > 3 ? (
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
            ) : (
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
            )}
            {data}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
