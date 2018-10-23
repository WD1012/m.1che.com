import React from 'react';
export default props => (
  <li className={props.class}>
    <div className="df-coop">
      <img src={props.src} alt="" className="coop-img" />
    </div>
    <p className="coop-contant">{props.contant}</p>
  </li>
);
