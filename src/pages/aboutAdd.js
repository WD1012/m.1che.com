//关于我们-加入我们
import React, { Component } from 'react';
import { Accordion } from 'antd-mobile';
import axios from 'axios';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cid: 1,
      types: null,
      lists: null,
      typeClass: 'type-list'
    };
    this.changeTab = this.changeTab.bind(this);
  }
  changeTab = e => {
    let id = e.target.getAttribute('data-id');
    let index = e.target.getAttribute('data-index');
    const self = this;
    let types = this.state.types;
    for (let i = 0; i < types.length; i++) {
      types[i].style = 'type-list';
    }
    types[index].style = 'type-color';
    this.setState({
      types: types
    });
    axios({
      method: 'get',
      url: '/v1/api/job',
      params: {
        cid: id
      }
    })
      .then(function(response) {
        let data = response.data.data.lists;
        if (data) {
          self.setState({
            cid: id,
            lists: data
          });
        } else {
          self.setState({
            lists: '暂无相关职位～'
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    const self = this;
    axios({
      method: 'get',
      url: '/v1/api/job/category'
    })
      .then(function(response) {
        let data = response.data.data;
        for (var i = 0; i < data.length; i++) {
          if (i == 0) {
            data[i].style = 'type-color';
          } else {
            data[i].style = 'type-list';
          }
        }
        self.setState({ types: data });
      })
      .catch(function(error) {
        console.log(error);
      });
    axios({
      method: 'get',
      url: '/v1/api/job',
      params: {
        cid: this.state.cid
      }
    })
      .then(function(response) {
        let data = response.data.data.lists;
        if (data) {
          self.setState({
            lists: data
          });
        } else {
          self.setState({
            lists: '暂无相关职位～'
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    document.title = '加入我们-第1车贷';
    const types = this.state.types;
    const lists = this.state.lists;
    let r = null;
    let t = null;
    if (types) {
      t = types.map((v, i) => {
        return (
          <span
            key={i}
            className={v.style}
            data-id={v.id}
            data-index={i}
            onClick={e => this.changeTab(e)}
          >
            {v.name}
          </span>
        );
      });
    } else {
      t = null;
    }

    if (lists) {
      if (lists instanceof Array) {
        r = lists.map((v, i) => (
          <Accordion
            key={i}
            defaultActiveKey=""
            className="am-accordion"
            onChange={this.onChange}
          >
            <Accordion.Panel
              header={
                <div className="duty-top">
                  <ul>
                    <li className="job-list">{v.title}</li>
                  </ul>
                </div>
              }
            >
              <div className="duty-b">
                <div className="duty-t cfix">
                  <p className="req-num">
                    需求人数：<span>{v.num}</span>人
                  </p>
                  <p className="job-add">
                    地点：<span>{v.job_city}</span>
                  </p>
                </div>
                <div>
                  <h3 className="job-duty">岗位职责</h3>
                  <p
                    className="duty-cont"
                    dangerouslySetInnerHTML={{ __html: v.job_duty }}
                  />
                </div>
                <div>
                  <h3 className="job-duty">岗位要求</h3>
                  <p
                    className="duty-cont"
                    dangerouslySetInnerHTML={{ __html: v.job_require }}
                  />
                </div>
              </div>
            </Accordion.Panel>
          </Accordion>
        ));
      } else {
        r = <div className="job-no">{lists}</div>;
      }
    } else {
      r = null;
    }
    return (
      <div className="df-add">
        <div className="add-email">
          <p>简历请发至 hr@dycd.com</p>
          <p>邮件标题请注 “城市+岗位+姓名+工作年限”</p>
        </div>
        <div className="add-type cfix">{t}</div>
        <div className="duty-box">{r}</div>
      </div>
    );
  }
}
export default Add;
