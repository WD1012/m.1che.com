//关于我们-第一车贷简介
import React, { Component } from 'react';

class Duction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    document.title = '车贷简介-第1车贷';
    return (
      <div className="df-briefly">
        <div className="briefly-ind" />
        <div className="briefly-prent">
          <div className="briefly-box">
            <h1 className="briefly-title">第1车贷—汽车互联生态服务平台</h1>
            <p>
              第1车贷是一家在新车及二手车领域同时为B端和C端用户提供一站式服务的汽车互联网平台。
              过去，通过四年多的发展，已建立覆盖新车、二手车领域的B2B交易服务、B2C以租代售服务平台等服务。截止2017年9月，业务覆盖城市超过180多个，累计服务规模超过270亿元。现在，在汽车产业流通新趋势的背景下，第1车贷正在建立全国网络的B端交易服务平台和C端以租代售为核心的开放式服务平台，并致力于开发基于微服务、云服务、区块链、大数据、物联网等技术的全方位服务平台。未来，第1车贷将为中国万亿级汽车市场及汽车生态体系提供其提升能力所需的关键产品、平台以及开放式服务，从而提升汽车行业流通效率，与行业同仁共建有生命力的汽车产业链生态圈。
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Duction;
