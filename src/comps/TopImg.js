/**
 * Created by zhengshaohua on 2018/1/23.
 */
import React, { Component } from 'react';

function TopImg(props) {
  let style = {
    backgroundImage: 'url(' + props.topImg.src + ')',
    backgroundSize: 'cover'
  };
  return (
    <div className="ind-topImg" style={style}>
      <h2 className="ind-topH">{props.topImg.name}</h2>
      <p className="ind-topP">{props.topImg.sub}</p>
    </div>
  );
}

export default TopImg;
