import React, { Component } from 'react';

class NoMatch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    document.title = '404-第1车贷';
    return (
      <div>
        <p className="no-match">404</p>
        <p className="no-p">糟糕，您想要的页面还不在！</p>
      </div>
    );
  }
}

export default NoMatch;
