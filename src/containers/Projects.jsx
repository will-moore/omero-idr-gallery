import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchJsonp from 'fetch-jsonp';
import { Link } from 'react-router-dom';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';
import { blockLink } from '../styles';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
    this.setSelectedId = this.setSelectedId.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { url } = this.props;
    if (prevProps.url !== url) {
      this.fetchData();
    }
  }

  setSelectedId(event) {
    const { setSelectedId } = this.props;
    const projectId = event.target.getAttribute('data-projectid');
    setSelectedId(parseInt(projectId, 10));
  }

  fetchData() {
    const { url, setLoading } = this.props;
    setLoading(true);
    fetchJsonp(url)
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

  render() {
    const { projects } = this.state;
    return (
      <UlGroup>
        {projects.length === 0 ? (
          <LiGroupItem>
            <span>
              { 'Loading...' }
            </span>
          </LiGroupItem>
        )
          : projects.map(p => (
            <LiGroupItem
              key={p.id}
            >
              <Link
                to={`/project/${p.id}`}
                style={blockLink}
              >
                {p.name}
              </Link>
            </LiGroupItem>
          ))
        }
      </UlGroup>
    );
  }
}

Projects.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default Projects;
