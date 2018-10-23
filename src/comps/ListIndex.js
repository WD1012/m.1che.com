import React from 'react';
export default props => (
  <a href={props.href}>
    <span
      className="il-link"
      style={{
        backgroundImage: 'url(' + props.src + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <h3 className="il-h">{props.name}</h3>
      <p className="il-p">{props.sub}</p>
    </span>
  </a>
);
