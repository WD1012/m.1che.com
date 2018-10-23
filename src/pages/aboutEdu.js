//关于我们-企业文化
import React, { Component } from 'react';

class Culture extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    document.title = '企业文化-第1车贷';
    return (
      <div className="df-culture">
        <div className="culture-box culture-box1">
          <p className="culture-title ">·使命·</p>
          <p className="culture-content">
            引领中国汽车科技金融的发展，为汽车后市场产业链上的经营者与消费者提供专业可靠、高效便捷的一站式综合解决方案，共建有生命力的汽车产业链生态圈。
          </p>
        </div>
        <div className="culture-box culture-box2">
          <p className="culture-title">·愿景·</p>
          <p className="culture-content">成为中国汽车后市场中最有价值的企业</p>
        </div>
        <div className="culture-box culture-box3">
          <p className="culture-title">·价值观·</p>
          <p className="culture-content">拼搏进取 简单高效 严谨务实</p>
        </div>
      </div>
    );
  }
}
export default Culture;
