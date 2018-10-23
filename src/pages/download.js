// 梦享车 个人车源
import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import CarCho from '../comps/CarCho';
import { mxcUrl, dycdUrl } from '../comps/DownloadUrl';
import download_01 from '../images/mbg_01.jpg';
import download_02 from '../images/download_02.jpg';
import dy_1che from '../images/dy-1che.jpg';
import dy_mxc from '../images/dy-mxc.jpg';

function DownLoadTxt(props) {
  return (
    <div className="dy-con">
      <p className="dy-txt">{props.txt}</p>
      <div className="dy-ewm">
        <img src={props.ewmSrc} />
        <span>扫码下载APP</span>
      </div>
    </div>
  );
}
// this.props.match.params.id
class DownLoad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    document.title = '1车-第1车贷';
    const tabs = [
      { title: <div className="dy-tabs">第1车贷</div> },
      { title: <div className="dy-tabs">梦享车</div> }
    ];
    const actTab = this.props.match.params.id;
    console.log(actTab);
    console.log(typeof actTab);
    let r = null;
    switch (parseInt(actTab)) {
      case 1:
        r = (
          <Tabs tabs={tabs} initialPage={0} swipeable={false}>
            <div className="dy-tab-c">
              <CarCho
                bgsrc={download_01}
                btnLink={dycdUrl}
                btnTxt="立即下载"
                btnBg="per"
              />
              <DownLoadTxt
                txt="面向二手车商和新车经销商推出的集车源、交易、物流、车商SAAS为一体的汽车互联生态服务平台。 靠谱车源，实力卖家，个性化方案，尽在第1车贷APP。"
                ewmSrc={dy_1che}
              />
            </div>
            <div className="dy-tab-c">
              <CarCho
                bgsrc={download_02}
                btnLink={mxcUrl}
                btnTxt="立即下载"
                btnBg="bus"
              />
              <DownLoadTxt
                txt="面向个人用户推出的一站式汽车金融服务平台。海量优质车源、个性化金融信息服务、一站式用车管家服务。 让您即刻步入有车一族，尽享有车"
                ewmSrc={dy_mxc}
              />
            </div>
          </Tabs>
        );
        break;
      case 2:
        r = (
          <Tabs tabs={tabs} initialPage={1} swipeable={false}>
            <div className="dy-tab-c">
              <CarCho
                bgsrc={download_01}
                btnLink={dycdUrl}
                btnTxt="立即下载"
                btnBg="per"
              />
              <DownLoadTxt
                txt="面向二手车商和新车经销商推出的集车源、交易、融资、物流、车商SAAS为一体的汽车互联生态服务平台。 靠谱车源，实力卖家，个性化金融方案，尽在第1车贷App。"
                ewmSrc={dy_1che}
              />
            </div>
            <div className="dy-tab-c">
              <CarCho
                bgsrc={download_02}
                btnLink={mxcUrl}
                btnTxt="立即下载"
                btnBg="bus"
              />
              <DownLoadTxt
                txt="面向个人用户推出的一站式汽车金融服务平台。海量优质车源、个性化金融信息服务、一站式用车管家服务。 让您即刻步入有车一族，尽享有车"
                ewmSrc={dy_mxc}
              />
            </div>
          </Tabs>
        );
        break;
      default:
        r = (
          <Tabs tabs={tabs} initialPage={0} swipeable={false}>
            <div className="dy-tab-c">
              <CarCho
                bgsrc={download_01}
                btnLink={dycdUrl}
                btnTxt="立即下载"
                btnBg="per"
              />
              <DownLoadTxt
                txt="面向二手车商和新车经销商推出的集车源、交易、融资、物流、车商SAAS为一体的汽车互联生态服务平台。 靠谱车源，实力卖家，个性化金融方案，尽在第1车贷App。"
                ewmSrc={dy_1che}
              />
            </div>
            <div className="dy-tab-c">
              <CarCho
                bgsrc={download_02}
                btnLink={mxcUrl}
                btnTxt="立即下载"
                btnBg="bus"
              />
              <DownLoadTxt
                txt="面向个人用户推出的一站式汽车金融服务平台。海量优质车源、个性化金融信息服务、一站式用车管家服务。 让您即刻步入有车一族，尽享有车"
                ewmSrc={dy_mxc}
              />
            </div>
          </Tabs>
        );
        break;
    }
    return <div>{r}</div>;
  }
}

export default DownLoad;
