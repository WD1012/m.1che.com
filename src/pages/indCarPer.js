// 梦享车 个人车源
import React, { Component } from 'react';
import TopImg from '../comps/TopImg';
import ActionAppoint from '../comps/ActionAppoint';
import det_car01 from '../images/det-car01.png';
import det_car02 from '../images/det-car02.png';
import det_car03 from '../images/det-car03.png';
import indlink_04 from '../images/indlink_04.jpg';

function CarList(props) {
  let carItem = props.cars.map((car, index) => (
    <li className="car-item" key={index}>
      <div className="car-item-img">
        <img src={car.src} alt="" className="car-img" />
        {/*<img src="/static/dist/images/car-tip.png" alt="" className="car-tip"/>*/}
      </div>
      <div className="car-item-txt">
        <h3 className="car-item-title">
          {car.title} <br /> {car.model}
        </h3>
        <p className="car-item-price">
          <span className="car-price">
            月供 <strong>{car.price}</strong> 元 <em>|</em>12期
          </span>
        </p>
        <span className="car-item-btn" onClick={props.callbackApt}>
          预约看车
        </span>
      </div>
    </li>
  ));
  return <ul className="car_list">{carItem}</ul>;
}

class MxCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topImg: {
        name: '·个人车源·',
        sub: '第1车贷—汽车互联生态服务平台',
        src: indlink_04
      },
      showApt: false
    };
  }
  showActApt = () => {
    this.setState({ showApt: true });
  };
  onChildChangedApt = newState => {
    this.setState({
      showApt: newState
    });
  };
  render() {
    document.title = '梦享车-第1车贷';
    let carList = [
      {
        src: det_car01,
        title: '大众迈腾 2017款 330TSI DSG',
        model: '领先型',
        price: '6538'
      },
      {
        src: det_car02,
        title: 'JEEP 自由侠 2017款 180T',
        model: '自动高能版',
        price: '3358'
      },
      {
        src: det_car03,
        title: '广汽 凯美瑞 2016款 2.0E',
        model: '十周年精英版',
        price: '4148'
      }
    ];

    return (
      <div className="mxcar">
        <TopImg topImg={this.state.topImg} />
        <CarList cars={carList} callbackApt={this.showActApt} />
        {/*<span className="car-more" onClick={this.showActApt}>查看更多车型</span>*/}
        {this.state.showApt ? (
          <ActionAppoint
            isShow={this.state.showApt}
            callbackParent={this.onChildChangedApt}
          />
        ) : null}
      </div>
      // {this.state.showApt?<ActionAppoint isShow={this.state.showApt} callbackParent={this.onChildChangedApt}/>:null}
    );
  }
}
export default MxCar;
