//关于我们-荣誉奖项
import React, { Component } from 'react';
import HonourList from '../comps/HonourList';

class Honour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [
        {
          title: ['“中国汽车互联网+创新企业100强”'],
          dec: '2017年9月，荣获中国汽车经销商媒体颁发'
        },
        {
          title: ['“2017中国科技金融先锋榜”'],
          dec: '2017年9月，荣获证券时报颁发'
        },
        {
          title: ['“最佳汽车融资租赁企业”'],
          dec: '2016年11月，荣获搜狐颁发的2016中国汽车金融创新大奖'
        },
        {
          title: ['“中国最具投资价值企业50强”'],
          dec: '2016年10月，荣获2016年清科集团颁发'
        },
        {
          title: ['“二手车经销商战略合作伙伴奖”'],
          dec: '2016年10月，荣获全国工商联汽车二手车行业发展委员会颁发'
        },
        {
          title: ['“诚信创建企业”称号'],
          dec: '2016年8月，荣获上海市企业诚信创建活动组委会颁发的上海市'
        },
        {
          title: [
            '“2015-2016中国二手车市场影响力品牌”',
            '“2015-2016中国二手车大会杰出贡献奖” ',
            '“2015-2016中国二手车金融创新成就奖”'
          ],
          dec: '2016年7月，荣获荣获中国汽车流通协会颁发'
        },
        {
          title: [
            '“2015全国二手车行业创新成就金奖”',
            '“2015中国汽车流通行业经营服务模式创新奖”'
          ],
          dec: '2015年11月，荣获中国汽车流通协会颁发'
        },
        {
          title: ['“汽车物流行业优秀技术装备供应商”'],
          dec: '2015年11月，荣获中国物流与采购联合会汽车物流分会颁发'
        },
        {
          title: ['“2014-2015中国二手车行业最具价值品牌”'],
          dec: '2015年6月，荣获中国汽车流通协会颁发'
        },
        {
          title: ['“年度产业链贡献奖”'],
          dec: '2014年11月，荣获AutoLab汽车实验室、法国马赛商学院颁发'
        },
        {
          title: ['“2014中国二手车行业影响力品牌奖”'],
          dec: '2014年11月，荣获中国汽车流通协会颁发的“汽车金融服务创新奖'
        }
      ]
    };
  }

  render() {
    document.title = '荣誉奖项-第1车贷';
    const List = this.state.List;
    return (
      <div className="df-honour">
        <div className="honour-ind">
          <h1 className="honour-h">第1车贷—汽车互联生态服务平台</h1>
        </div>
        <div className="hon-box">
          <ul className="hon-ul">
            {List.map((v, i) => {
              return <HonourList key={i} title={v.title} dec={v.dec} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Honour;
