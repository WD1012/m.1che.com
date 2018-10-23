import React from 'react';
export default props => {
  return (
    <a href={`/newsDetail/${props.p}/${props.aid}`}>
      <div className="news-ceremony">
        <img src={props.imgsrc} alt="" className="news-img" />
        <p className="news-dec">{props.title}</p>
      </div>
    </a>
  );
};
