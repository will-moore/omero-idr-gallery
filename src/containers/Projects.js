import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { listGroup, listGroupItem } from '../styles';

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
        projects.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0
        });
        this.setState({projects: projects});
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <ul style={listGroup} >
        {this.state.projects.length === 0 ? <ul style={listGroupItem}>Loading Studies...</ul> :
        this.state.projects.map(p => (
          <li key={p.id}
              style={listGroupItem}>
            {p.name}
          </li>
        ))
        }
      </ul>
    );
  }
}

export default Projects;
