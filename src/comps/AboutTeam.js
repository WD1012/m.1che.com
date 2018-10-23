//关于我们-核心团队
import React, { Component } from 'react';
class AboutTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  showDesc = () => {
    this.setState((prevState, props) => ({
      show: !prevState.show
    }));
  };
  render() {
    let r = (
      <div className="team-dec">
        <p className="team-name">{this.props.name}</p>
        <p className="team-job">{this.props.job}</p>
        <p className="team-b">{this.props.dec}</p>
      </div>
    );
    if (this.state.show) {
      r = (
        <div className="team-dec team-show">
          <p className="team-name">{this.props.name}</p>
          <p className="team-job">{this.props.job}</p>
          <p className="team-b">{this.props.dec}</p>
        </div>
      );
    }
    return (
      <li className={this.props.class} onClick={this.showDesc}>
        <img src={this.props.img} alt="" className="team-img" />
        {r}
      </li>
    );
  }
}
export default AboutTeam;
