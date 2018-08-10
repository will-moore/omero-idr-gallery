import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    fetchJsonp('http://idr.openmicroscopy.org/webgateway/proj/list/')
      .then(response => response.json())
      .then((projects) => {
        projects.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        this.setState({ projects });
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  }

  render() {
    const { projects } = this.state;
    return (
      <UlGroup>
        {projects.length === 0 ? (
          <LiGroupItem>
Loading Studies...
          </LiGroupItem>
        )
          : projects.map(p => (
            <LiGroupItem
              key={p.id}
            >
              {p.name}
            </LiGroupItem>
          ))
        }
      </UlGroup>
    );
  }
}

export default Projects;
