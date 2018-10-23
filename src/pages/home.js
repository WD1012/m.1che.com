import React, { Component } from 'react';
import { Carousel, Toast } from 'antd-mobile';
import ListIndex from '../comps/ListIndex';
import indent_01 from '../images/indent_01.png';
import indent_02 from '../images/indent_02.png';
import indlink_01 from '../images/indlink_01.jpg';
import indlink_02 from '../images/indlink_02.jpg';
import indlink_03 from '../images/indlink_03.jpg';
import indlink_04 from '../images/indlink_04.jpg';
import indlink_05 from '../images/indlink_05.jpg';
import indlink_06 from '../images/indlink_06.jpg';
import ind_loan from '../images/ind-loan.png';
import ind_apo from '../images/ind-apo.png';
import banner_01 from '../images/banner_01.jpg';
import banner_02 from '../images/banner_02.jpg';
import ActionAppoint from '../comps/ActionAppoint';
// import ActionLoan from '../comps/ActionLoan';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      oc: [banner_01, banner_02],
      imgHeight: 'px2rem(400px)',
      ol: [
        {
          name: '·精选车源·',
          sub: '第1车贷—汽车互联生态服务平台',
          src: indlink_02,
          href: '/indCarCho'
        },
        {
          name: '·个人车源·',
          sub: '第1车贷—汽车互联生态服务平台',
          src: indlink_04,
          href: '/indCarPer'
        },
        {
          name: '·媒体报道·',
          sub: '第1车贷—汽车互联生态服务平台',
          src: indlink_05,
          href: '/news/1'
        },
        {
          name: '·APP下载·',
          sub: '第1车贷—汽车互联生态服务平台',
          src: indlink_06,
          href: '/down/1'
        }
      ],
      showApt: false,
      showLoan: false
    };
  }
  onChildChangedApt = newState => {
    this.setState({
      showApt: newState
    });
  };
  onChildChangedLoan = newState => {
    this.setState({
      showLoan: newState
    });
  };
  componentDidMount() {
    this.setState({
      load: true
    });
    setTimeout(() => {
      this.setState({
        oc: [banner_01, banner_02]
      });
    }, 100);
  }
  showActApt = () => {
    this.setState({ showApt: true });
  };
  showActLoan = () => {
    this.setState({ showLoan: true });
  };
  render() {
    document.title = '首页-第1车贷';
    let el = null;
    let ol = this.state.ol;
    let oc = this.state.oc;
    el = (
      <div className="App">
        <div className="ind-banner">
          <Carousel autoplay={true} infinite selectedIndex={2}>
            {oc.map(val => (
              <div
                key={val}
                style={{
                  display: 'inline-block',
                  width: '100%',
                  height: this.state.imgHeight
                }}
              >
                <img
                  src={`${val}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="ind-enter-box">
          <div className="ind-ent-w">
            <div className="ind-ent cfix">
              <a href="/down/1" className="ind-ent-l ind-ent-item">
                <img className="ind-ent-img" src={indent_02} alt="" />车商入口
              </a>
              <a href="/down/2" className="ind-ent-r ind-ent-item">
                <img className="ind-ent-img" src={indent_01} alt="" />个人入口
              </a>
            </div>
          </div>
        </div>
        <div className="ind-list">
          {ol.map((val, i) => (
            <ListIndex
              key={i}
              name={val.name}
              sub={val.sub}
              src={val.src}
              href={val.href}
            />
          ))}
        </div>
        <div className="ind-sw">
          <img
            onClick={this.showActApt}
            src={ind_apo}
            className="ind-apo"
            alt=""
          />
        </div>
        {this.state.showApt ? (
          <ActionAppoint
            isShow={this.state.showApt}
            callbackParent={this.onChildChangedApt}
          />
        ) : null}
        {/*{this.state.showLoan ? (*/}
        {/*<ActionLoan*/}
        {/*isShow={this.state.showLoan}*/}
        {/*callbackParent={this.onChildChangedLoan}*/}
        {/*/>*/}
        {/*) : null}*/}
        <style global="true" jsx="true">{`
          body {
            background: #1e1e1e !important;
          }
          .df-footer {
            border-top: 1px solid #353535;
          }
        `}</style>
      </div>
    );
    return el;
  }
}

export default Home;
