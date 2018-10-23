//关于我们-发展历程
import React, { Component } from 'react';
import imgRoad from '../images/road.jpg';

class Develop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    document.title = '发展历程-第1车贷';
    return (
      <div className="df-develop">
        <div className="lock-box">
          <img src={imgRoad} alt="" className="dev-img" />
          <div className="one-lock">
            <div className="dev-big dev-big-one" />
            <div className="dev-small dev-small-one" />
            <div className="dev-content dev-content-one">
              <p className="dev-title">2017.09</p>
              <p>第1车贷交易服务平台启动</p>
            </div>
          </div>
          <div className="one-lock">
            <div className="dev-big dev-big-two" />
            <div className="dev-small dev-small-two" />
            <div className="dev-content dev-content-two">
              <p className="dev-title">2017.08</p>
              <p>支付结算基础设施建立</p>
            </div>
          </div>
          <div className="one-lock">
            <div className="dev-big dev-big-three" />
            <div className="dev-small dev-small-three" />
            <div className="dev-content dev-content-three">
              <p className="dev-title">2017.07</p>
              <p>梦享车上线</p>
            </div>
          </div>
          <div className="one-lock">
            <div className="dev-big dev-big-four" />
            <div className="dev-small dev-small-four" />
            <div className="dev-content dev-content-four">
              <p className="dev-title">2016.12</p>
              <p>完成B轮融资</p>
            </div>
          </div>
          <div className="one-lock">
            <div className="dev-big dev-big-five" />
            <div className="dev-small dev-small-five" />
            <div className="dev-content dev-content-five">
              <p className="dev-title">2016.11</p>
              <p>业务规模破百亿</p>
            </div>
          </div>
          <div className="one-lock">
            <div className="dev-big dev-big-six" />
            <div className="dev-small dev-small-six" />
            <div className="dev-content dev-content-six">
              <p className="dev-title">2015.12</p>
              <p>A+轮融资</p>
            </div>
          </div>
          <div className="one-lock">
            <div className="dev-big dev-big-seven" />
            <div className="dev-small dev-small-seven" />
            <div className="dev-content dev-content-seven">
              <p className="dev-title">2015.06</p>
              <p>A轮融资业务规模破10亿</p>
            </div>
          </div>
          <div className="one-lock">
            <div className="dev-big dev-big-eight" />
            <div className="dev-small dev-small-eight" />
            <div className="dev-content dev-content-eight">
              <p className="dev-title">2014.05</p>
              <p>业务规模破亿</p>
            </div>
          </div>
          <div className="one-lock">
            <div className="dev-big dev-big-nine" />
            <div className="dev-small dev-small-nine" />
            <div className="dev-content dev-content-nine">
              <p className="dev-title">2013.11</p>
              <p>公司正式注册成立</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Develop;
