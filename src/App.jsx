import React, { Component } from 'react';
import IdrLogo from './svg/IdrLogo';
import './App.css';
import Projects from './containers/Projects';

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
            url="http://idr.openmicroscopy.org/webgateway/proj/list/"
            setLoading={this.setLoading}
            setSelectedId={this.setProjectId}
          />
          {projectId && (
            <Projects
              url={`http://idr.openmicroscopy.org/webgateway/proj/${projectId}/children/`}
              setLoading={this.setLoading}
              setSelectedId={this.setProjectId}
            />)}
        </div>
      </div>
    );
  }
}

export default App;
