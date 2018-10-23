//首页-精选车源
import React, { Component } from 'react';
import CarCho from '../comps/CarCho';
import { mxcUrl, dycdUrl } from '../comps/DownloadUrl';
import indcarcho_bg from '../images/indcarcho-bg.jpg';

class IndCarCho extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    document.title = '精选车源-第1车贷';
    const u = dycdUrl;
    return (
      <div>
        <div className="car-cho">
          <CarCho
            bgsrc={indcarcho_bg}
            btnLink={u}
            btnTxt="查看更多车源"
            btnBg="bus"
          />
        </div>
      </div>
    );
  }
}
export default IndCarCho;
