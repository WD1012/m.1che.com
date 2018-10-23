import React, { Component } from 'react';
import AboutList from '../comps/AboutList';
import about_ind01 from '../images/about-ind01.jpg';
import about_ind02 from '../images/about-ind02.jpg';
import about_ind03 from '../images/about-ind03.jpg';
import about_ind04 from '../images/about-ind04.jpg';
import about_ind05 from '../images/about-ind05.jpg';
import about_ind06 from '../images/about-ind06.jpg';
import aboutus_ind from '../images/aboutus-ind.png';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [
        {
          pathname: '/about/aboutEdu',
          img: about_ind01,
          content: '企业文化'
        },
        {
          pathname: '/about/aboutDev',
          img: about_ind02,
          content: '发展历程'
        },
        {
          pathname: '/about/aboutHonour',
          img: about_ind03,
          content: '荣誉奖项'
        },
        {
          pathname: '/about/aboutTeam',
          img: about_ind04,
          content: '核心团队'
        },
        {
          pathname: '/about/aboutCont',
          img: about_ind05,
          content: '联系我们'
        },
        {
          pathname: '/about/aboutAdd',
          img: about_ind06,
          content: '加入我们'
        }
      ]
    };
  }
  render() {
    document.title = '关于我们-第1车贷';
    let alist = null;
    const about = this.state.about;
    alist = (
      <div className="df-about">
        <div className="about-banner">
          <h1 className="about-h">第1车贷—汽车互联生态服务平台</h1>
        </div>
        <div className="about-box">
          <a href="/about/aboutDuction">
            <div className="about-briefly">
              <img src={aboutus_ind} alt="" className="about-img" />
              <p className="about-title">第1车贷简介</p>
            </div>
          </a>
          <ul className="about-list">
            {about.map(function(v, i) {
              if (i % 2 == 0 ? true : false) {
                return (
                  <AboutList
                    key={i}
                    img={v.img}
                    content={v.content}
                    href={v.pathname}
                    class="about-l"
                  />
                );
              } else {
                return (
                  <AboutList
                    key={i}
                    img={v.img}
                    content={v.content}
                    href={v.pathname}
                    class="about-r"
                  />
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
    return alist;
  }
}

export default About;
