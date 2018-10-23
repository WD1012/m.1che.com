import React, { Component } from 'react';
import { DatePicker, Toast } from 'antd-mobile';
import axios from 'axios';
import act_close from '../images/act-close.png';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
let oDate = new Date();
oDate.setYear(oDate.getFullYear() + 1);
const maxDate = oDate;

const CustomChildren = ({ extra, onClick, children }) => (
  <div onClick={onClick} className="act-time">
    {children}
    <span className="act-ext">{extra}</span>
  </div>
);

class ActionAppoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.isShow,
      date: now,
      maxDate: maxDate,
      customChildValue: null,
      city: [{ deptName: '请选择城市' }],
      store: [{ id: null, deptName: '请选择门店' }],
      storeId: null,
      telPatt: /^1[3-9][0-9]\d{8}$/,
      telValid: false,
      mobile: null,
      namePatt: /^[\u4E00-\u9FA5A-Za-z]+$/,
      nameValid: false,
      customerName: null,
      appointDate: null,
      appointTime: null,
      flag: true
    };
  }
  hideMask = () => {
    this.setState({
      show: false,
      date: now,
      maxDate: maxDate,
      customChildValue: null,
      store: [],
      storeId: null,
      telPatt: /^1[3-9][0-9]\d{8}$/,
      telValid: false,
      mobile: null,
      namePatt: /^[\u4E00-\u9FA5A-Za-z]+$/,
      nameValid: false,
      customerName: null,
      appointDate: null,
      appointTime: null
    });
    this.props.callbackParent(false);
  };
  componentDidMount() {
    const self = this;
    axios({
      method: 'get',
      url: '/v2/api/icar/n/common/queryAvailableCity'
    })
      .then(function(response) {
        let data = response.data.data.store;
        self.setState({ city: data });
      })
      .catch(function(error) {
        console.log(error);
      });
    axios({
      method: 'get',
      url: '/v2/api/icar/n/common/queryAreaStores',
      params: {
        cityName: 'all'
      }
    })
      .then(function(response) {
        let data = response.data.data.store;
        self.setState({
          store: data,
          storeId: data[0].id
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  componentWillUnmount() {
    //重写组件的setState方法，直接返回空
    this.setState = (state, callback) => {
      return;
    };
  }
  getStores = e => {
    const self = this;
    const value = e.target.value;
    this.setState({ storeId: null });
    console.log(value);
    axios({
      method: 'get',
      url: '/v2/api/icar/n/common/queryAreaStores',
      params: {
        cityName: value
      }
    })
      .then(function(response) {
        let data = response.data.data.store;
        self.setState({
          store: data,
          storeId: data[0].id
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  choiceStore = e => {
    const value = e.target.value;
    this.setState({
      storeId: value
    });
  };
  checkMobile = e => {
    const patt = this.state.telPatt;
    let value = e.target.value;
    if (patt.test(value)) {
      this.setState({
        telValid: true,
        mobile: value
      });
    } else {
      this.setState({
        telValid: false
      });
    }
  };
  checkName = e => {
    const patt = this.state.namePatt;
    let value = e.target.value;
    if (patt.test(value)) {
      this.setState({
        nameValid: true,
        customerName: value
      });
    } else {
      this.setState({
        nameValid: false
      });
    }
  };
  postAppoint = () => {
    if (this.state.flag) {
      let telValid = this.state.telValid;
      let nameValid = this.state.nameValid;
      let self = this;
      if (!nameValid) {
        Toast.info('请填写有效的姓名！', 1);
        return false;
      }
      if (!telValid) {
        Toast.info('请填写有效的手机号码！', 1);
        return false;
      }
      if (!this.state.customChildValue) {
        Toast.info('请选择到店时间！', 1);
        return false;
      }
      if (!this.state.storeId) {
        Toast.info('请选择门店！', 1);
        return false;
      }
      axios({
        method: 'post',
        url: '/v2/api/icar/n/order/appointment',
        data: {
          customerName: this.state.customerName,
          mobile: this.state.mobile,
          appointDate: this.state.appointDate,
          appointTime: this.state.appointTime,
          storeId: this.state.storeId
        }
      })
        .then(function(response) {
          let data = response.data;
          Toast.info(data.msg, 2);
          self.setState({
            flag: false
          });
          setTimeout(() => {
            self.setState({ flag: true });
          }, 10000);
          self.hideMask();
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      Toast.info('请勿频繁提交！', 1);
    }
  };
  formatTime = t => {
    let date = new Date(t);
    let seperator1 = '-';
    let seperator2 = ':';
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }
    let currentdate =
      date.getFullYear() +
      seperator1 +
      month +
      seperator1 +
      strDate +
      '/' +
      date.getHours() +
      seperator2 +
      date.getMinutes() +
      seperator2 +
      date.getSeconds();
    let arr = currentdate.split('/');
    this.setState({
      customChildValue: t,
      appointDate: arr[0],
      appointTime: arr[1]
    });
  };
  render() {
    let r = null;
    let rcity = null;
    let rstore = null;

    rcity = this.state.city.map((v, i) => {
      if (i == 0) {
        return (
          <option key={i} value="all">
            {v.deptName}
          </option>
        );
      } else {
        return (
          <option key={i} value={v.deptName}>
            {v.deptName}
          </option>
        );
      }
    });

    rstore = this.state.store.map((v, i) => (
      <option key={i} value={v.id}>
        {v.deptName}
      </option>
    ));
    if (this.props.isShow) {
      r = (
        <div className="act-w">
          <div
            id="actOverlay"
            className="act-overlay"
            onClick={this.hideMask}
          />
          <div id="actAppoint" className="act-box act-apt animated anmBottom">
            <img
              onClick={this.hideMask}
              src={act_close}
              alt=""
              className="act-close"
            />
            <div className="act-h apt-h">预约看车</div>
            <input
              type="text"
              className="act-input"
              placeholder="请填写联系人姓名"
              onChange={e => this.checkName(e)}
            />
            <input
              type="tel"
              className="act-input"
              placeholder="请填写联系人电话"
              onChange={e => this.checkMobile(e)}
            />
            <DatePicker
              mode="datetime"
              format="YYYY-MM-DD HH:mm"
              title="选择时间"
              value={this.state.customChildValue}
              minDate={this.state.date}
              maxDate={this.state.maxDate}
              extra=" "
              onChange={v => this.formatTime(v)}
            >
              <CustomChildren>
                <input readOnly type="text" placeholder="预约时间" />
              </CustomChildren>
            </DatePicker>
            <div className="act-area cfix">
              <select className="act-sel" onChange={e => this.getStores(e)}>
                {rcity}
              </select>
              <select
                className="act-sel act-sel-r"
                onChange={e => this.choiceStore(e)}
              >
                {rstore}
              </select>
            </div>
            <div className="act-btn apt-btn" onClick={this.postAppoint}>
              提交申请
            </div>
          </div>
        </div>
      );
    } else {
      r = null;
    }
    return r;
  }
}
export default ActionAppoint;
