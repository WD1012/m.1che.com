import React from 'react';
export default props => {
  return (
    <a href={`/newsDetail/${props.p}/${props.aid}`}>
      <div className="news-list cfix">
        <div className="news-l">
          <h3
            className="news-title"
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
          <p className="news-time cfix">
            <span className="news-trade">{props.trade}</span>
            <span className="news-name">{props.name}</span>
            <span className="news-data">{props.time}</span>
          </p>
        </div>
        <img src={props.img} alt="" className="news-r" />
      </div>
    </a>
  );
};
