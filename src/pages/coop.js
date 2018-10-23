// 官方合作
import React, { Component } from 'react';
import ListCoop from '../comps/ListCoop';
import axios from 'axios';

class Coop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aCoop: null
      // [
      // 		{
      // 			img: '/static/dist/images/coop-ind01.jpg',
      // 			contant: '中国人民保险，综合性保险金融公司，世界500强企业。业务领域覆盖财产保险、人寿保险、健康保险以及信托、基金等多个领域。'
      // 		},
      // 		{
      // 			img: '/static/dist/images/coop-ind02.jpg',
      // 			contant: '浦发银行，大型国有控股全国性股份制商业银行，1999年在上海证券交易所挂牌上市，连续多年被《中国品牌价值研究院》评为“中国品牌。'
      // 		},
      // 		{
      // 			img: '/static/dist/images/coop-ind03.jpg',
      // 			contant: '中国民生银行，2009年于香港交易所挂牌上市，中国银行业改革的试验田。'
      // 		},
      // 		{
      // 			img: '/static/dist/images/coop-ind04.jpg',
      // 			contant: '宁波通商银行，由外资银行成功改制的城市商业银行，致力于为商贸领域中小企业提供最专业的金融服务。'
      // 		},
      // 		{
      // 			img: '/static/dist/images/coop-ind05.jpg',
      // 			contant: '正通汽车，豪华汽车品牌经销集团，知名上市汽车经销集团，致力于经销豪华及超豪华品牌，依托正通现有销售渠道，为相关品牌汽车终端客户和经销商提供汽车金融服务。'
      // 		},
      // 		{
      // 			img: '/static/dist/images/coop-ind06.jpg',
      // 			contant: '鸿逸汽车作为“平行进口车第一股”，长期为客户提供海外品牌引入、通关物流、智能研发、售后保养等一站式服务，致力于成为平行进口车领域的“全产业链运营商”。'
      // 		}
      // 	]
    };
  }
  componentDidMount() {
    const self = this;
    axios({
      method: 'get',
      url: '/v1/api/partner'
    })
      .then(function(response) {
        let data = response.data.data.lists;
        console.log(data);
        self.setState({ aCoop: data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    document.title = '合作伙伴-第1车贷';
    let r = null;

    if (this.state.aCoop) {
      r = this.state.aCoop.map((v, i) => {
        if (i % 2 == 0 ? true : false) {
          return (
            <ListCoop
              key={i}
              src={v.img}
              class="coop-in-l"
              contant={v.content}
            />
          );
        } else {
          return (
            <ListCoop
              key={i}
              src={v.img}
              class="coop-in-r"
              contant={v.content}
            />
          );
        }
      });
    } else {
      r = <div className="coop-load">loading</div>;
    }

    return (
      <div className="dc-coop">
        <div className="coop-banner">
          <h1 className="coop-h">第1车贷—汽车互联生态服务平台</h1>
        </div>
        <ul className="coop-box cfix">{r}</ul>
      </div>
    );
  }
}
export default Coop;
