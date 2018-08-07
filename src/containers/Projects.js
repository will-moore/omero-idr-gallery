import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
        projects: []
    };
  }

  componentDidMount() {
    fetchJsonp('http://idr.openmicroscopy.org/webgateway/proj/list/')
      .then(response => response.json())
      .then(projects => {
        console.log('parsed json', projects)
        this.setState({projects: projects});
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <ul>
        {this.state.projects.map(p => (
          <li key={p.id}>
            {p.name}
          </li>
        ))
        }
      </ul>
    );
  }
}

export default Projects;
