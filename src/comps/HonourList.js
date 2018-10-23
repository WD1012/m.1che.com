import React from 'react';

export default props => {
  return (
    <li className="hon-list">
      {props.title.map((lv, lk) => {
        if (props.title.length > 1) {
          return (
            <h2 key={lk} className="hon-h hon-two">
              {lv}
            </h2>
          );
        } else {
          return (
            <h2 key={lk} className="hon-h">
              {lv}
            </h2>
          );
        }
      })}
      <p className="hon-dec">{props.dec}</p>
    </li>
  );
};
