import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeLink from './links/HomeLink';
import IdrLogo from './svg/IdrLogo';
import './App.css';
import Projects from './containers/Projects';
import Datasets from './containers/Datasets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      projectId: undefined,
    };
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    const { loading, projectId } = this.state;
    const l = loading ? 'loading' : '';
    const projectChosen = projectId ? 'projectChosen' : '';
    return (
      <Router>
        <div className="App">
          <header className={`App-header ${l}`}>
            <div>
              <HomeLink />
            </div>
            <IdrLogo />
          </header>
          <div className={`containerContainer ${projectChosen}`}>
            <Route
              exact
              path="/"
              render={
                props => (
                  <Projects
                    {...props}
                    setLoading={this.setLoading}
                    url="https://idr.openmicroscopy.org/webgateway/proj/list/"
                  />
                )
              }
            />
            <Route
              path="/project/:id"
              render={
                props => <Datasets {...props} setLoading={this.setLoading} />
              }
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
