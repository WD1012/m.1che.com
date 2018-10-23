import React from 'react';

export default props => (
  <a href={props.href}>
    <li className={props.class}>
      <img src={props.img} alt="" className="list-img" />
      <p className="about-culture">{props.content}</p>
    </li>
  </a>
);
