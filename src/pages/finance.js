//金融产品
import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import TopImg from '../comps/TopImg';
import indlink_01 from '../images/indlink_01.jpg';
import indlink_03 from '../images/indlink_03.jpg';
import fin_bus01 from '../images/fin-bus01.png';
import fin_bus02 from '../images/fin-bus02.png';
import fin_bus03 from '../images/fin-bus03.png';
import fin_bus04 from '../images/fin-bus04.png';
import fin_bus05 from '../images/fin-bus05.png';
import fin_per01 from '../images/fin-per01.png';
import fin_per02 from '../images/fin-per02.png';
import bus_step from '../images/bus-step.jpg';

function FinItem(props) {
  let item = props.data;
  let limitTag, btn;
  if (item.type == 1) {
    limitTag = <span>授信额度</span>;
    btn = <span className="item-link bus-btn">申请</span>;
  } else if (item.type == 2) {
    limitTag = '';
    btn = <span className="item-link per-btn">申请</span>;
  }

  return (
    <div className="fin-item">
      <a href={item.link}>
        <img src={item.icon} className="fin-item-icon" />
        <div className="fin-item-txt">
          <h3 className="item-h">
            {item.title}
            {limitTag}
          </h3>
          <p className="item-p">{item.sub}</p>
          <p className="item-p">期限：{item.term}</p>
        </div>
        {btn}
      </a>
    </div>
  );
}

class Finance extends Component {
  constructor(props) {
    super(props);
    this.banner = [
      {},
      { name: '·车商贷款·', sub: '汽车贷款 臻选第1车贷', src: indlink_01 },
      { name: '·个人贷款·', sub: '汽车贷款 臻选第1车贷', src: indlink_03 }
    ];
    this.state = {
      finBusList: [
        {
          icon: fin_bus01,
          title: '50万-5000万',
          sub: '付息：按月付息，到期还本',
          term: '1、3、6个月',
          recommend: true,
          type: 1,
          link: '/finEnt/0'
        },
        {
          icon: fin_bus02,
          title: '50万-5000万',
          sub: '付息：按日计息，随借随还',
          term: '90天',
          recommend: false,
          type: 1,
          link: '/finEnt/1'
        },
        {
          icon: fin_bus05,
          title: '50万-5000万',
          sub: '付息：按月付息，到期还本',
          term: '90~180天',
          recommend: false,
          type: 1,
          link: '/finEnt/2'
        },
        {
          icon: fin_bus03,
          title: '50万-5000万',
          sub: '付息：等额本息',
          term: '12个月',
          recommend: false,
          type: 1,
          link: '/finEnt/3'
        },
        {
          icon: fin_bus04,
          title: '50万-5000万',
          sub: '付息：按日计息，随借随还',
          term: '15天',
          recommend: false,
          type: 1,
          link: '/finEnt/4'
        }
      ],
      finPerList: [
        {
          icon: fin_per01,
          title: '首年租赁+尾款N年分期',
          sub: '主体：个人/企业',
          term: '首年租赁+尾款N年分期',
          recommend: true,
          type: 2,
          link: '/finPer/0'
        },
        {
          icon: fin_per02,
          title: '消费分期',
          sub: '主体：个人/企业',
          term: '12、24、36个月',
          recommend: true,
          type: 2,
          link: '/finPer/1'
        }
      ],
      perImg: {
        name: '·个人贷款·',
        sub: '汽车贷款 臻选第1车贷',
        src: indlink_03
      },
      busImg: {
        name: '·车商贷款·',
        sub: '汽车贷款 臻选第1车贷',
        src: indlink_01
      },
      actBanner: this.props.match.params.id || 2
    };
  }
  render() {
    document.title = '金融服务-第1车贷';
    const tabs = [
      { title: <div className="dy-tabs">车商·金融</div> },
      { title: <div className="dy-tabs">个人·金融</div> }
    ];
    let r = null,
      topImg = null;
    const actTab = this.props.match.params.id;
    topImg = <TopImg topImg={this.banner[this.state.actBanner]} />;
    if (actTab == 1) {
      r = (
        <Tabs
          tabs={tabs}
          initialPage={0}
          swipeable={false}
          onTabClick={(tab, index) => {
            if (index == 0) {
              this.setState({ actBanner: 1 });
            } else if (index == 1) {
              this.setState({ actBanner: 2 });
            }
          }}
        >
          <div className="dy-tab-c fin-tab-c">
            {this.state.finBusList.map((item, index) => (
              <FinItem key={index} data={item} />
            ))}
            <div className="fin-bus-step">
              <h2 className="fin-stepH3">
                <em />贷款步骤
              </h2>
              <div className="fin-stepImg">
                <img src={bus_step} />
              </div>
            </div>
          </div>
          <div className="dy-tab-c fin-tab-c">
            {this.state.finPerList.map((item, index) => (
              <FinItem key={index} data={item} />
            ))}
          </div>
        </Tabs>
      );
    } else if (actTab == 2) {
      r = (
        <Tabs
          tabs={tabs}
          initialPage={1}
          swipeable={false}
          onTabClick={(tab, index) => {
            if (index == 0) {
              this.setState({ actBanner: 1 });
            } else if (index == 1) {
              this.setState({ actBanner: 2 });
            }
          }}
        >
          <div className="dy-tab-c fin-tab-c">
            {this.state.finBusList.map((item, index) => (
              <FinItem key={index} data={item} />
            ))}
            <div className="fin-bus-step">
              <h2 className="fin-stepH3">
                <em />贷款步骤
              </h2>
              <div className="fin-stepImg">
                <img src={bus_step} />
              </div>
            </div>
          </div>
          <div className="dy-tab-c fin-tab-c">
            {this.state.finPerList.map((item, index) => (
              <FinItem key={index} data={item} />
            ))}
          </div>
        </Tabs>
      );
    }

    return (
      <div>
        {topImg}
        {r}
      </div>
    );
  }
}

export default Finance;
