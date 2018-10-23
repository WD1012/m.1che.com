// 媒体报道
import React, { Component } from 'react';
import axios from 'axios';
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      id: null,
      p: null
    };
  }
  componentDidMount() {
    const self = this;
    let id = this.props.match.params.aid;
    let p = this.props.match.params.p;
    this.setState({
      id: id,
      p: p
    });
    axios({
      method: 'get',
      url: `/v1/api/article/detail`,
      params: {
        id: id
      }
    })
      .then(function(response) {
        let data = response.data.data;
        console.log(data);
        self.setState({
          data: data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    document.title = '媒体报道-第1车贷';
    let r = null;
    if (!this.state.data) {
      r = <div className="detail-loading">加载中...</div>;
    } else {
      r = (
        <div className="detail-box">
          <h3 className="detail-title">{this.state.data.title}</h3>
          <p className="detail-souces">来源：{this.state.data.afrom}</p>
          <div
            className="detail-content"
            dangerouslySetInnerHTML={{ __html: this.state.data.content }}
          />
        </div>
      );
    }
    return (
      <div className="df-detail">
        <div className="detail-ind" />
        {r}
        <div className="back-new">
          <a className="detail-back" href={`/news/${this.state.p}`}>
            返回列表
          </a>
        </div>
      </div>
    );
  }
}
