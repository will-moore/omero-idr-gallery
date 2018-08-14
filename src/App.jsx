import React, { Component } from 'react';
import IdrLogo from './svg/IdrLogo';
import './App.css';
import Projects from './containers/Projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    const { loading } = this.state;
    const l = loading ? 'loading' : '';
    return (
      <div className="App">
        <header className={`App-header ${l}`}>
          <IdrLogo />
        </header>
        <Projects setLoading={this.setLoading} />
      </div>
    );
  }
}

export default App;
