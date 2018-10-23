//关于我们-核心团队
import React, { Component } from 'react';
import AboutTeam from '../comps/AboutTeam';
import manger_1 from '../images/manger-1.jpg';
import manger_2 from '../images/manger-2.jpg';
import manger_3 from '../images/manger-3.jpg';
import manger_4 from '../images/manger-4.jpg';
import manger_5 from '../images/manger-5.jpg';
import manger_6 from '../images/manger-6.jpg';

class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    document.title = '核心团队-第1车贷';
    const manger = [
      {
        img: manger_1,
        name: '·李海燕·',
        job: '创始人/董事长',
        dec:
          '15年汽车行业经验，历任长久集团汽车销售系统总裁及汽车金融系统总裁。曾管理80余家4S店，负责8,000余家4S店的库存车融资监管服务。'
      },
      {
        img: manger_2,
        name: '·郭 超·',
        job: '创始人/CEO',
        dec:
          '10余年供应链金融经验，曾任中国远洋物流有限公司总经理、长久集团融资租赁公司总经理。'
      },
      {
        img: manger_3,
        name: '·邹大伟·',
        job: 'COO',
        dec:
          '15年汽车行业管理经验，丰富的4S店运营管理经验及品牌二手车销售经验。曾担任长久实业集团副总裁， 2014年10月创办品车会,现负责第1车贷业务及运营工作。'
      },
      {
        img: manger_4,
        name: '·褚华骏·',
        job: 'CSO',
        dec:
          '10余年投行、咨询、互联网支付工作经验，曾任职于光大银行、瑞士银行投资银行、支付宝、德勤管理咨询,现负责第1车贷战略规划、金融信息服务及资金合作工作。'
      },
      {
        img: manger_6,
        name: '·张 楠·',
        job: 'CRO',
        dec:
          '10余年世界500强企业高管工作经验，国有上市银行信贷高级独立审批官及一级大区支行副行长，现负责第1车贷风险控制工作。'
      }
    ];
    return (
      <div className="df-team">
        <ul className="cfix">
          {manger.map((v, i) => {
            if (i % 2 == 0 ? true : false) {
              return (
                <AboutTeam
                  key={i}
                  img={v.img}
                  name={v.name}
                  job={v.job}
                  dec={v.dec}
                  class="team-l"
                />
              );
            } else {
              return (
                <AboutTeam
                  key={i}
                  img={v.img}
                  name={v.name}
                  job={v.job}
                  dec={v.dec}
                  class="team-r"
                />
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
export default Team;
