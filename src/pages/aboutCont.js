//关于我们-联系我们
import React, { Component } from 'react';
import { Accordion } from 'antd-mobile';

class Connect extends Component {
  constructor(props) {
    super(props);
  }
  onChange = key => {
    console.log(key);
  };
  render() {
    document.title = '联系我们-第1车贷';
    const dyCities = [
      { pro: '北京', city: '' },
      { pro: '天津', city: '' },
      { pro: '上海', city: '' },
      { pro: '重庆', city: '' },
      {
        pro: '黑龙江',
        city: [
          '哈尔滨',
          '齐齐哈尔',
          '牡丹江',
          '大庆',
          '佳木斯',
          '七台河',
          '黑河',
          '双鸭山',
          '鸡西'
        ]
      },
      {
        pro: '河北',
        city: [
          '沧州',
          '唐山',
          '秦皇岛',
          '石家庄',
          '保定',
          '邯郸',
          '廊坊',
          '张家口',
          '衡水',
          '邢台',
          '承德'
        ]
      },
      {
        pro: '山东',
        city: [
          '青岛',
          '临沂',
          '济宁',
          '济南',
          '烟台',
          '泰安',
          '聊城',
          '威海',
          '淄博',
          '潍坊',
          '东营',
          '日照',
          '滨州',
          '枣庄',
          '菏泽',
          '德州',
          '滕州',
          '莱芜'
        ]
      },
      {
        pro: '河南',
        city: [
          '洛阳',
          '郑州',
          '开封',
          '信阳',
          '濮阳',
          '商丘',
          '三门峡',
          '平顶山',
          '安阳',
          '南阳',
          '周口',
          '新乡',
          '焦作',
          '许昌',
          '驻马店',
          '济源'
        ]
      },
      {
        pro: '安徽',
        city: [
          '合肥',
          '阜阳',
          '芜湖',
          '池州',
          '亳州',
          '宿州',
          '蚌埠',
          '铜陵',
          '六安',
          '滁州',
          ' 淮南',
          '马鞍山',
          '黄山',
          '宣城',
          '巢湖',
          '安庆'
        ]
      },
      {
        pro: '江苏',
        city: [
          '苏州',
          '常州',
          '南京',
          '南通',
          '徐州',
          '无锡',
          '淮安',
          '宿迁',
          '扬州',
          '镇江',
          '连云港',
          '盐城',
          '泰州'
        ]
      },
      {
        pro: '浙江',
        city: [
          '杭州',
          '金华',
          '台州',
          '绍兴',
          '丽水',
          '宁波',
          '温州',
          ' 湖州',
          '衢州',
          '嘉兴',
          '舟山'
        ]
      },
      {
        pro: '江西',
        city: [
          '南昌',
          '赣州',
          '上饶',
          '鹰潭',
          '景德镇',
          '九江',
          '新余',
          '抚州',
          '吉安',
          '萍乡',
          '宜春'
        ]
      },
      {
        pro: '福建',
        city: [
          '泉州',
          '厦门',
          '三明',
          '南平',
          '福州',
          '龙岩',
          '漳州',
          '莆田',
          '宁德'
        ]
      },
      {
        pro: '广东',
        city: [
          '深圳',
          '东莞',
          '佛山',
          '广州',
          '中山',
          '惠州',
          '阳江',
          '湛江',
          '珠海',
          '汕尾',
          '茂名',
          '河源',
          '韶关',
          '潮州',
          '汕头',
          '梅州',
          '肇庆',
          '清远',
          '江门',
          '揭阳',
          '云浮'
        ]
      },
      {
        pro: '广西',
        city: [
          '百色',
          '南宁',
          '柳州',
          '桂林',
          '贵港',
          '北海',
          '钦州',
          '贺州',
          '玉林',
          '防城港',
          '来宾',
          '梧州',
          '河池',
          '崇左'
        ]
      },
      {
        pro: '吉林',
        city: [
          '长春',
          '辽源',
          '吉林',
          '白山',
          '延边',
          '通化',
          '四平',
          '白城',
          '松原',
          '榆树'
        ]
      },
      {
        pro: '辽宁',
        city: [
          '大连',
          '沈阳',
          '辽宁',
          '抚顺',
          '营口',
          '锦州',
          '本溪',
          '鞍山',
          '阜新',
          '葫芦岛',
          '辽阳',
          '丹东',
          '盘锦'
        ]
      },
      {
        pro: '内蒙古',
        city: [
          '鄂尔多斯',
          '包头',
          '呼和浩特',
          '兴安',
          '呼伦贝尔',
          '通辽',
          '巴彦淖尔',
          '赤峰',
          '锡林郭勒',
          '乌兰察布'
        ]
      },
      { pro: '宁夏', city: ['银川', '中卫'] },
      {
        pro: '甘肃',
        city: ['兰州', '庆阳', '酒泉', '白银', '张掖', '嘉峪关', '临夏', '武威']
      },
      {
        pro: '山西',
        city: [
          '太原',
          '大同',
          '运城',
          '晋中',
          '临汾',
          '晋城',
          '长治',
          '朔州',
          '吕梁'
        ]
      },
      {
        pro: '陕西',
        city: ['西安', '榆林', '渭南', '安康', '汉中', '咸阳', '宝鸡', '延安']
      },
      { pro: '青海', city: ['西宁', '海西'] },
      {
        pro: '湖北',
        city: [
          '荆州',
          '武汉',
          '十堰',
          '宜昌',
          '随州',
          '仙桃',
          '黄石',
          '孝感',
          '荆门',
          '咸宁',
          '襄阳',
          '恩施',
          '黄冈',
          '潜江'
        ]
      },
      {
        pro: '四川',
        city: [
          '成都',
          '乐山',
          '绵阳',
          '广安',
          '攀枝花',
          '泸州',
          '凉山',
          '达州',
          '自贡',
          '德阳',
          '遂宁',
          '南充',
          '巴中',
          '宜宾',
          '内江',
          '资阳',
          '广元',
          '眉山',
          '雅安'
        ]
      },
      {
        pro: '湖南',
        city: [
          '长沙',
          '株洲',
          '衡阳',
          '岳阳',
          '郴州',
          '常德',
          '娄底',
          '益阳',
          '永州',
          '怀化',
          '邵阳',
          '湘潭'
        ]
      },
      {
        pro: '贵州',
        city: [
          '贵阳',
          '黔西南',
          '遵义',
          '黔东南',
          '铜仁',
          '六盘水',
          '黔南',
          '毕节',
          '安顺'
        ]
      },
      {
        pro: '云南',
        city: [
          '昆明',
          '曲靖',
          '玉溪',
          '丽江',
          '红河',
          '文山',
          '大理',
          '德宏',
          '昭通',
          '楚雄',
          '普洱'
        ]
      },
      { pro: '海南', city: ['海口', '琼海', '东方', '三亚'] },
      { pro: '新疆', city: ['乌鲁木齐', '伊宁', '伊犁', '哈密', '克拉玛依'] }
    ];
    return (
      <div className="df-content">
        <div className="content-banner">
          <h1 className="content-h">第1车贷—汽车互联生态服务平台</h1>
        </div>
        <div className="content-box">
          <div className="content-top">
            <div className="content-address">
              <h3 className="content-way">联系方式</h3>
              <p className="content-serve">
                地址：北京市朝阳区霄云路甲26号海航大厦11层
              </p>
              <p className="content-serve">邮箱：pr@dycd.com kefu@dycd.com</p>
              <p className="content-serve">客服：4008-365-111</p>
              <p className="content-serve">前台：010-59230000</p>
              <p className="content-serve">邮编：100026</p>
            </div>
            <div className="content-city-box">
              {dyCities.map((v, i) => {
                const num = v.city.length;
                const city = v.city;
                if (city) {
                  return (
                    <Accordion
                      key={i}
                      defaultActiveKey=""
                      className="am-accordion"
                      onChange={this.onChange}
                    >
                      <Accordion.Panel
                        header={
                          <div className="content-citylist">
                            <span className="content-only">{v.pro}</span>
                            <span className="content-add">{num}</span>
                          </div>
                        }
                      >
                        <div className="con-box">
                          {city.map((lv, lk) => {
                            return (
                              <span key={lk} className="content-con">
                                {lv}
                              </span>
                            );
                          })}
                        </div>
                      </Accordion.Panel>
                    </Accordion>
                  );
                } else {
                  return (
                    <div key={i} className="content-city content-only">
                      <span>{v.pro}</span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Connect;
