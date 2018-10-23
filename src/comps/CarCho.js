/**
 * Created by zhengshaohua on 2018/1/23.
 */
import React, { Component } from 'react';
import BtnMore from '../comps/BtnMore';

function CarCho(props) {
  let style = {
    backgroundImage: 'url(' + props.bgsrc + ')',
    backgroundSize: 'cover'
  };
  return (
    <div>
      <div className="car-choBg" style={style}>
        <BtnMore
          btnLink={props.btnLink}
          btnTxt={props.btnTxt}
          btnBg={props.btnBg}
        />
      </div>
    </div>
  );
}

export default CarCho;
