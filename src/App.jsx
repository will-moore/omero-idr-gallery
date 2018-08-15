import React, { Component } from 'react';
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
      <div className="App">
        <header className={`App-header ${l}`}>
          <IdrLogo />
        </header>
        <div className={`containerContainer ${projectChosen}`}>
          <Projects
            setLoading={this.setLoading}
            setProjectId={this.setProjectId}
          />
          {projectId && (
            <Datasets
              setLoading={this.setLoading}
              projectId={projectId}
            />)}
        </div>
      </div>
    );
  }
}

export default App;
