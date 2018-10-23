// 金融产品  个人贷款
import React, { Component } from 'react';
import fin_step1 from '../images/fin-step1.jpg';
import fin_step2 from '../images/fin-step2.jpg';

function FinEntDetail(props) {
  let link, wrapCon, propty;
  if (props.type == 1) {
    link = (
      <a href={props.link}>
        <a className="fin-link apply">申请</a>
      </a>
    );
    wrapCon = 'fin-per1 lease';
    propty = <span className="fin-basic-l">首付比例</span>;
  } else if (props.type == 2) {
    link = <span className="fin-link forward">敬请期待</span>;
    wrapCon = 'fin-per1 stages';
    propty = <span className="fin-basic-l">车辆属性</span>;
  }

  return (
    <div className="fin-detail-per">
      <div className={wrapCon}>
        <div className="fin-perBasic">
          <h2 className="">{props.name}</h2>
          {link}
          <label className="fin-basic">
            <span className="fin-basic-l">客户类型</span>
            <p className="fin-basic-r">{props.cusType}</p>
          </label>
          <label className="fin-basic">
            {propty}
            <p className="fin-basic-r">{props.depositPer}</p>
          </label>
          <label className="fin-basic">
            <span className="fin-basic-l">还款方式</span>
            <p className="fin-basic-r">{props.payType}</p>
          </label>
          <label className="fin-basic">
            <span className="fin-basic-l">产品期限</span>
            <p className="fin-basic-r">{props.time}</p>
          </label>
        </div>
        <div className="fin-perDe">
          <h4>产品介绍</h4>
          <p>{props.introduce}</p>
        </div>
      </div>
      <div className="fin-per2">
        <h3 className="fin-deTxt-h">
          <em />消费分期步骤
        </h3>
        <div className="fin-deTxt-div">
          <img src={props.step} />
        </div>
      </div>
    </div>
  );
}

class FinanceEnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finEntList: [
        {
          name: '租赁业务',
          type: 1,
          time: '首年租赁+尾款N年分期',
          depositPer: '10%-20%',
          payType: '等额本息',
          cusType: '个人/企业',
          link: 'http://api.xiaoiche.com/static/icar/download.html',
          introduce:
            '租赁业务（梦享车）提供C端客户海量车型选择、现车供应及多种灵活金融方案，包含：中长期租赁业务产品、DIY金融方案产品、共享俱乐部等金融方案，其中针对尾款处理提供客户的多样性选择：1)留购买断 2)无忧退还 3)尾款分期提供低首付&低月供优惠方案，并提供C端用户一站式（客服+售后+理赔+救援+违章待处理）服务。',
          step: fin_step2
        },
        {
          name: '消费分期',
          type: 2,
          time: '12、24、36个月',
          depositPer: '新车/二手车',
          payType: '等额本息',
          cusType: '个人/企业',
          link: '',
          introduce:
            '消费分期业务准入车型及准入人群覆盖面广，所需资料简单（优质客户身份证+驾驶证、免征信及流水），金融方案提供更多低首付+低月供优惠供合作商选择；标准优质的审核评估团队为用户提供优质服务，第1车贷致力于解决C端用户购车/用车等多方面的金融需求。',
          step: fin_step1
        }
      ]
    };
  }

  render() {
    document.title = '金融服务-第1车贷';
    // const sEnt=this.props.sEnt;
    const sEnt = this.props.match.params.id;
    let r = null,
      data = this.state.finEntList[sEnt];

    r = <FinEntDetail {...data} />;
    // switch (parseInt(sEnt)){
    //     case 0:
    //         r = <div>0</div>
    //         break;
    //     case 1:
    //         r=<div>1</div>
    //         break;
    //     default:
    //         break;
    // }
    return <div>{r}</div>;
  }
}

export default FinanceEnt;
