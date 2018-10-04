import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import ObjectLink from './ObjectLink';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';
import { blockLink } from '../styles';

const Containers = ({ dataFetch, datatype }) => (
  <UlGroup>
    {dataFetch.pending && (
      <LiGroupItem>
        <span style={blockLink}>
          Loading...
        </span>
      </LiGroupItem>
    )}
    <CSSTransitionGroup
      className="cssGroup"
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={0}
    >
      {dataFetch.rejected && (
        <li key="rejected">
          {dataFetch.reason}
        </li>
      )}

      {dataFetch.fulfilled && (
        dataFetch.value.data.map((p, i) => (
          <LiGroupItem
            key={p['@id']}
            index={i}
          >
            <ObjectLink
              style={blockLink}
              datatype={datatype}
              id={p['@id']}
            >
              {p.Name}
            </ObjectLink>
          </LiGroupItem>
        ))
      )}
    </CSSTransitionGroup>
  </UlGroup>
);

Containers.propTypes = {
  // see https://github.com/heroku/react-refetch#example
  dataFetch: PropTypes.shape({
    values: PropTypes.array,
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    reason: PropTypes.string,
    fulfilled: PropTypes.bool,
  }).isRequired,
  datatype: PropTypes.string.isRequired,
};

export default Containers;
