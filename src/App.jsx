import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import IdrLogo from './svg/IdrLogo';
import './App.css';
import Projects from './containers/Projects';
import Datasets from './containers/Datasets';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const PropsRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => renderMergedProps(component, routeProps, rest)}
  />
);

PropsRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      projectId: undefined,
    };
    this.setLoading = this.setLoading.bind(this);
    this.setProjectId = this.setProjectId.bind(this);
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  setProjectId(projectId) {
    this.setState({ projectId });
  }

  render() {
    const { loading, projectId } = this.state;
    const l = loading ? 'loading' : '';
    const projectChosen = projectId ? 'projectChosen' : '';
    return (
      <Router>
        <div className="App">
          <header className={`App-header ${l}`}>
            <IdrLogo />
          </header>
          <div className={`containerContainer ${projectChosen}`}>
            <Projects
              url="https://idr.openmicroscopy.org/webgateway/proj/list/"
              setLoading={this.setLoading}
              setSelectedId={this.setProjectId}
            />
            <PropsRoute
              path="/project/:id"
              component={Datasets}
              setLoading={this.setLoading}
              setSelectedId={this.setProjectId}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
