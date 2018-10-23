import React from 'react';
import bg_car from '../images/bg-car.jpg';
export default () => (
  <div className="footer">
    <div className="df-footer">
      <div className="foot-t cfix">
        <div className="foot-l">
          <p className="foot-series">客服电话：4008-365-111 010-59230000</p>
          <p className="foot-series">服务时间：周一至周五9:00至18:00</p>
          <p className="foot-series foot-email">邮箱：kefu@dycd.com</p>
          <p className="foot-series foot-medium">媒体公关：pr@dycd.com</p>
        </div>
        <img src={bg_car} alt="" className="foot-r" />
      </div>
      <p className="foot-b">
        ©北京知闲信息科技有限公司 &nbsp;&nbsp;<a
          href="http://www.miitbeian.gov.cn/"
          target="_blank"
          className="df-record"
        >
          京ICP备17056407号-1
        </a>
      </p>
    </div>
  </div>
);
