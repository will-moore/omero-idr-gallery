import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchJsonp from 'fetch-jsonp';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
    this.setProjectId = this.setProjectId.bind(this);
  }

  componentDidMount() {
    const { setLoading } = this.props;
    setLoading(true);
    fetchJsonp('http://idr.openmicroscopy.org/webgateway/proj/list/')
      .then(response => response.json())
      .then((projects) => {
        setLoading(false);
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

  setProjectId(event) {
    const { setProjectId } = this.props;
    const projectId = event.target.getAttribute('data-projectid');
    setProjectId(parseInt(projectId, 10));
  }

  render() {
    const { projects } = this.state;
    return (
      <UlGroup>
        {projects.length === 0 ? (
          <LiGroupItem>
            <span>
              { 'Loading Studies...' }
            </span>
          </LiGroupItem>
        )
          : projects.map(p => (
            <LiGroupItem
              key={p.id}
            >
              <button
                onClick={this.setProjectId}
                type="button"
                data-projectid={p.id}
              >
                {p.name}
              </button>
            </LiGroupItem>
          ))
        }
      </UlGroup>
    );
  }
}

Projects.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setProjectId: PropTypes.func.isRequired,
};

export default Projects;
