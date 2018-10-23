import React, { Component } from 'react';
import Footer from './comps/Footer';
import imgLogo from './images/logo.png';
import imgMenu from './images/menu.png';
import IndCarPer from './pages/indCarPer';
import Download from './pages/download';
import Coop from './pages/coop';
import Home from './pages/home';
import Finance from './pages/finance';
import finEnt from './pages/finEnt';
import finPer from './pages/finPer';
import About from './pages/about';
import aboutEdu from './pages/aboutEdu';
import aboutDev from './pages/aboutDev';
import aboutHonour from './pages/aboutHonour';
import aboutTeam from './pages/aboutTeam';
import aboutCont from './pages/aboutCont';
import aboutAdd from './pages/aboutAdd';
import aboutDuction from './pages/aboutDuction';
import indCarCho from './pages/indCarCho';
import News from './pages/news';
import newsDetail from './pages/newsDetail';
import noMatch from './pages/noMatch';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      bg: false
    };
  }

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <Router>
        <div className="ind-w">
          <header className="ind-header">
            <img className="ind-logo" src={imgLogo} alt="" />
            <span className="ind-drw-r" onClick={this.onOpenChange}>
              <img src={imgMenu} alt="" />
            </span>
          </header>
          <div
            className="ind-drw cfix"
            style={this.state.bg ? { background: '#333' } : null}
          >
            <div
              className={
                this.state.open
                  ? 'drw-siderbar-show drw-siderbar '
                  : 'drw-siderbar-hide drw-siderbar '
              }
            >
              <NavLink
                exact
                onClick={this.onOpenChange}
                className="ind-NavLink"
                to="/"
                activeStyle={{ fontWeight: 'bold' }}
              >
                首页
              </NavLink>
              <NavLink
                onClick={this.onOpenChange}
                className="ind-NavLink"
                to="/indCarPer"
                activeStyle={{ fontWeight: 'bold' }}
              >
                梦享车
              </NavLink>
              <NavLink
                onClick={this.onOpenChange}
                className="ind-NavLink"
                to="/down/1"
                activeStyle={{ fontWeight: 'bold' }}
              >
                1车
              </NavLink>
              <NavLink
                onClick={this.onOpenChange}
                className="ind-NavLink"
                to="/news/1"
                activeStyle={{ fontWeight: 'bold' }}
              >
                媒体报道
              </NavLink>
              <NavLink
                onClick={this.onOpenChange}
                className="ind-NavLink"
                to="/coop"
                activeStyle={{ fontWeight: 'bold' }}
              >
                合作伙伴
              </NavLink>
              <NavLink
                onClick={this.onOpenChange}
                className="ind-NavLink"
                to="/about"
                activeStyle={{ fontWeight: 'bold' }}
              >
                关于我们
              </NavLink>
            </div>
            <div
              className={
                this.state.open ? 'drw-overlay drw-overlay-show' : 'drw-overlay'
              }
              onClick={this.onOpenChange}
            />
            <div className="drw-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/indCarPer" component={IndCarPer} />
                <Route path="/indCarCho" component={indCarCho} />
                <Route path="/coop" component={Coop} />
                <Route path="/down/:id" component={Download} />
                <Route path="/finance/:id" component={Finance} />
                <Route path="/finEnt/:id" component={finEnt} />
                <Route path="/finPer/:id" component={finPer} />
                <Route path="/news/:p" component={News} />
                <Route path="/newsDetail/:p/:aid" component={newsDetail} />
                <Route exact path="/about" component={About} />
                <Route path="/about/aboutEdu" component={aboutEdu} />
                <Route path="/about/aboutDev" component={aboutDev} />
                <Route path="/about/aboutHonour" component={aboutHonour} />
                <Route path="/about/aboutTeam" component={aboutTeam} />
                <Route path="/about/aboutCont" component={aboutCont} />
                <Route path="/about/aboutAdd" component={aboutAdd} />
                <Route path="/about/aboutDuction" component={aboutDuction} />
                <Route component={noMatch} />
              </Switch>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
