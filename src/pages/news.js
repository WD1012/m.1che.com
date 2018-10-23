// 媒体报道
import React, { Component } from 'react';

import NewsList from '../comps/NewsList';
import NewsTitle from '../comps/NewsTitle';
import axios from 'axios';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsTitle: [],
      newList: [],
      load: false,
      p: this.props.match.params.p - 0,
      more: true
    };
  }

  componentDidMount() {
    const self = this;
    console.log(this.state.newList.length);
    console.log(this.props.match);
    function getArticleHome() {
      return axios.get('/v1/api/article/home');
    }

    function getArticleList() {
      return axios.get('/v1/api/article', {
        params: {
          p: 1,
          rows: 5 * self.state.p
        }
      });
    }

    axios.all([getArticleHome(), getArticleList()]).then(
      axios.spread(function(ah, al) {
        let newsTitle = ah.data.data.lists.slice(2, 4);
        let newList = al.data.data.lists;
        self.setState({ newsTitle: newsTitle, newList: newList, load: true });
      })
    );
  }

  loadMore = () => {
    const self = this;
    let p = this.state.p + 1;
    let oldData = this.state.newList;
    axios({
      method: 'get',
      url: '/v1/api/article',
      params: {
        p: p,
        rows: 5
      }
    })
      .then(function(response) {
        let data = response.data.data.lists;
        console.log(data);
        if (data) {
          let newData = oldData.concat(data);
          self.setState({
            newList: newData,
            p: p
          });
        } else {
          self.setState({
            more: false
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    document.title = '媒体报道-第1车贷';
    console.log(this.state.p);
    const newsTitle = this.state.newsTitle;
    const newList = this.state.newList;
    let r = null;
    if (!this.state.load) {
      r = <div className="content-loading">loading...</div>;
    } else {
      r = (
        <div>
          {newsTitle.map((v, l) => {
            return (
              <NewsTitle
                aid={v.aid}
                key={l}
                imgsrc={v.focus_img}
                title={v.title}
                p={this.state.p}
              />
            );
          })}
          <h3 className="news-sub">媒体报道</h3>
          <div className="news-box">
            {newList.map((v, i) => {
              return (
                <NewsList
                  key={i}
                  aid={v.aid}
                  img={v.focus_img}
                  title={v.title}
                  trade={v.afrom}
                  name={v.author}
                  time={v.pub_time}
                  p={this.state.p}
                />
              );
            })}
          </div>
        </div>
      );
    }
    let b = this.state.more ? (
      <div className="b-new">
        <button onClick={this.loadMore} className="d-back">
          加载更多
        </button>
      </div>
    ) : (
      <div className="b-new">
        <button className="d-nomore">没有更多了~</button>
      </div>
    );
    return (
      <div className="df-news">
        {r}
        {b}
      </div>
    );
  }
}

export default News;
