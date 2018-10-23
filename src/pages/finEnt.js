// 金融产品  车商详情
import React, { Component } from 'react';
import fin_icon from '../images/fin-icon.png';

function FinEntDetail(props) {
  return (
    <div className="fin-detail">
      <div className="fin-deImg">
        <div className="fin-deImg-t">
          <img src={fin_icon} alt="" />
          {props.name}
        </div>
        <div className="fin-deImg-s">
          <label className="fin-img-l1">
            <span className="label-s">授信额度</span>
            <br />
            <strong className="label-st">{props.creditLine}</strong>
          </label>
          <label>
            <span className="label-s">产品期限</span>
            <br />
            <strong className="label-st">{props.time}</strong>
          </label>
        </div>
      </div>
      <div className="fin-deTxt">
        <h3 className="fin-deTxt-h">
          <em />基本信息
        </h3>
        <div className="fin-deTxt-div">
          <label className="fin-basic">
            <span className="fin-basic-l">保证金比例</span>
            <p className="fin-basic-r">{props.depositPer}</p>
          </label>
          <label className="fin-basic">
            <span className="fin-basic-l">付款方式</span>
            <p className="fin-basic-r">{props.payType}</p>
          </label>
          <label className="fin-basic">
            <span className="fin-basic-l">融资主体</span>
            <p className="fin-basic-r">{props.cusType}</p>
          </label>
          <label className="fin-basic">
            <span className="fin-basic-l">目标用户</span>
            <p className="fin-basic-r">{props.customer}</p>
          </label>
        </div>
      </div>
      <div className="fin-deTxt">
        <h3 className="fin-deTxt-h">
          <em />产品介绍
        </h3>
        <div className="fin-deTxt-div">
          <p className="fin-deTxt-p">{props.introduce}</p>
        </div>
      </div>
      <div className="fin-deTxt">
        <h3 className="fin-deTxt-h">
          <em />产品优势
        </h3>
        <div className="fin-deTxt-div">
          {props.superiority.map((item, index) => (
            <p className="fin-deTxt-p txtInd" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <a href={props.link}>
        <span className="app-btn">立即申请</span>
      </a>
    </div>
  );
}

// this.props.match.params.id
class FinanceEnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finEntList: [
        {
          name: '·车存宝·',
          creditLine: '50万~5000万',
          time: '1、3、6个月',
          depositPer: '5%',
          payType: '按月付息，到期还本',
          cusType: '个人/企业',
          customer: '二手车经销商、新车经销商(4S店)、新车综合卖场',
          link: 'http://m.dycd.com/platform/down.html',
          introduce:
            '“车存宝”是第1车贷针对汽车经销商（包括二手车经销商和新车经销商）为日常运营或扩大业务时面临资金不足，而设计的车商可通过自有库存车辆为质押物，获得流动资金的金融服务。',
          superiority: [
            '1.为汽车经销商解决经营的流动资金，培植强大的汽车经销商，尤其是二手车经销商；',
            '2.对中小型二手车经销商，简化手续，提高用款效率，快速占领小商户市场；',
            '3.汽车经销商可进一步经营并扩大自有业务；',
            '4.强化锋之行和汽车经销商的业务合作。'
          ]
        },
        {
          name: '·1车贷·',
          creditLine: '50万~5000万',
          time: '90天',
          depositPer: '5%',
          payType: '按天计息，随借随还',
          cusType: '个人/企业',
          customer: '二手车经销商、新车经销商(4S店)、新车综合卖场',
          link: 'http://m.dycd.com/platform/down.html',
          introduce:
            '“1车贷”是第1车贷针对汽车经销商（包括二手车经销商和新车经销商）为日常运营或扩大业务时面临资金不足，而设计的车商可通过自有在库单车为质押物，获得流动资金的金融服务。',
          superiority: [
            '1.按天计息，解决部分商户对利率敏感的问题；',
            '2.以单车为单位，降低融资金额，且还款灵活；',
            '3.评估放款操作全部线上化，操作便捷，融资迅速。'
          ]
        },
        {
          name: '·微商宝·',
          creditLine: '50万~5000万',
          time: '90天~180天',
          depositPer: '5%',
          payType: '按月付息，到期还本',
          cusType: '个人/企业',
          customer: '整车物流商',
          link: 'http://m.dycd.com/platform/down.html',
          introduce:
            '“微商宝”是第1车贷为整车物流商提供的专属类保理金融服务，提前支持物流商应付账款，增加物流公司日常运营资金，增加采购车辆资金，真正做到扩大经营。',
          superiority: [
            '1.为汽车供应链中物流环节的整车物流商提供融资服务；',
            '2.把握自身有效资源，真正解决物流企业运营资金不足的企业痛点。'
          ]
        },
        {
          name: '·租融宝·',
          creditLine: '50万~5000万',
          time: '12个月',
          depositPer: '5%',
          payType: '等额本息',
          cusType: '企业',
          customer: '经营性汽车租赁公司',
          link: 'http://m.dycd.com/platform/down.html',
          introduce:
            '“租融宝”是第1车贷为汽车租赁公司提供的用于车辆采购或日常经营的资金支持的金融服务，帮助汽车租赁公司扩大公司规模。',
          superiority: [
            '1.为中小型汽车经营租赁公司的扩大发展提供金融服务；',
            '2.满足经营性租赁公司的需求，推出经营性融资服务以补充企业日常营运资金的缺口。'
          ]
        },
        {
          name: '·订融宝·',
          creditLine: '50万~5000万',
          time: '15天',
          depositPer: '10%',
          payType: '按日计息，随借随还',
          cusType: '个人/企业',
          customer: '二手车经销商、新车经销商(4S店)、新车综合卖场',
          link: 'http://m.dycd.com/platform/down.html',
          introduce:
            '“订融宝”是第1车贷针对汽车经销商（包括二手车经销商和新车经销商）为采购车辆时面临的资金不足，提供资金支持的金融服务。',
          superiority: [
            '1.为汽车经销商解决短期车辆采购资金缺口，尤其是二手车经销商；',
            '2.汽车经销商可进一步经营并扩大自有业务；',
            '3.强化锋之行和汽车经销商的业务合作。'
          ]
        }
      ]
    };
  }
  // static async getInitialProps({query}) {
  // 	const sEnt = query.sEnt;
  // 	return {sEnt}
  // }
  render() {
    document.title = '金融服务-第1车贷';
    // const sEnt=this.props.sEnt;
    const sEnt = this.props.match.params.id;
    let r = null;
    let data = this.state.finEntList[parseInt(sEnt)];
    r = <FinEntDetail {...data} />;
    // switch (parseInt(sEnt)){
    //     case 0:
    //         r= <FinEntDetail {...data}/>;
    //         break;
    //     case 1:
    //         r=<div>1</div>
    //         break;
    //     case 2:
    //         r=<div>2</div>
    //         break;
    //     case 3:
    //         r=<div>3</div>
    //         break;
    //     case 4:
    //         r=<div>4</div>
    //         break;
    //     default:
    //         break;
    // }
    return (
      <div>
        {r}
        <style jsx="true" global="true">{`
          .drw-content {
            padding-bottom: 56px;
          }
        `}</style>
      </div>
    );
  }
}
export default FinanceEnt;
