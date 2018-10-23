/**
 * Created by zhengshaohua on 2018/1/23.
 */
import React, { Component } from 'react';

function BtnMore(props) {
  let bgColor;
  if (props.btnBg == 'bus') {
    bgColor = {
      backgroundColor: '#f34d19'
    };
  } else if (props.btnBg == 'per') {
    bgColor = {
      backgroundColor: '#02d9d6'
    };
  }
  return (
    <a href={props.btnLink}>
      <span className="more-car" style={bgColor}>
        {' '}
        {props.btnTxt}{' '}
      </span>
    </a>
  );
}

export default BtnMore;
