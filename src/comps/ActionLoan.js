// import React, { Component } from 'react';
// import { Toast } from 'antd-mobile';
// import axios from 'axios';
// import act_close from '../images/act-close.png';
//
// class ActionLoan extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: props.isShow,
//       telPatt: /^1[3-9][0-9]\d{8}$/,
//       telValid: false,
//       telValue: '',
//       desPatt: /\S/,
//       desValid: false,
//       desValue: '',
//       flag: true
//     };
//     // this.checkMobile=this.checkMobile.bind(this)
//   }
//
//   hideMask = () => {
//     this.setState({
//       show: false,
//       telValid: false,
//       telValue: '',
//       desValid: false,
//       desValue: ''
//     });
//     this.props.callbackParent(false);
//   };
//   postLoan = () => {
//     if (this.state.flag) {
//       let telValid = this.state.telValid;
//       let desValid = this.state.desValid;
//       let self = this;
//       if (!telValid) {
//         Toast.info('请填写有效的手机号码！', 1);
//         return false;
//       }
//       if (!desValid) {
//         Toast.info('请填写用款理由！', 1);
//         return false;
//       }
//
//       axios({
//         method: 'post',
//         url: '/v1/api/borrow/submit',
//         data: {
//           description: this.state.desValue,
//           mobile: this.state.telValue
//         }
//       })
//         .then(function(response) {
//           let data = response.data;
//           if (data.code == 0) {
//             Toast.info('提交成功！', 2);
//             self.setState({
//               flag: false
//             });
//             setTimeout(() => {
//               self.setState({ flag: true });
//             }, 10000);
//             self.hideMask();
//           }
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//     } else {
//       Toast.info('请勿频繁提交！', 1);
//     }
//   };
//   checkMobile = e => {
//     const patt = this.state.telPatt;
//     let value = e.target.value;
//     if (patt.test(value)) {
//       this.setState({
//         telValid: true,
//         telValue: value
//       });
//     } else {
//       this.setState({
//         telValid: false,
//         telValue: value
//       });
//     }
//   };
//   checkDes = e => {
//     const patt = this.state.desPatt;
//     let value = e.target.value;
//     console.log(value);
//     if (patt.test(value)) {
//       this.setState({
//         desValid: true,
//         desValue: value
//       });
//     } else {
//       this.setState({
//         desValid: false,
//         desValue: value
//       });
//     }
//   };
//
//   componentDidMount() {}
//
//   render() {
//     let r = null;
//     if (this.props.isShow) {
//       r = (
//         <div className="act-w">
//           <div
//             id="actOverlay"
//             className="act-overlay"
//             onClick={this.hideMask}
//           />
//           <div id="actAppoint" className="act-box act-loan animated anmBottom">
//             <img
//               onClick={this.hideMask}
//               src={act_close}
//               alt=""
//               className="act-close"
//             />
//             <div className="act-h loan-h">车商贷款</div>
//             <input
//               type="tel"
//               className="act-input"
//               placeholder="请填写联系人电话"
//               onChange={e => this.checkMobile(e)}
//             />
//             <input
//               type="text"
//               className="act-input"
//               placeholder="请填写用款描述理由，如：资金周转"
//               onChange={e => this.checkDes(e)}
//             />
//             <div className="act-btn loan-btn" onClick={this.postLoan}>
//               提交申请
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       r = null;
//     }
//     return r;
//   }
// }
//
// export default ActionLoan;
