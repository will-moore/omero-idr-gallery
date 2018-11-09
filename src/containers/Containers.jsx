import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import ObjectLink from './ObjectLink';
import Header from '../header/Header';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';

const Containers = ({ dataFetch, datatype }) => (
  <div>
    <Header />
    <div className="containerContainer">
      <UlGroup>
        {dataFetch.pending && (
          <LiGroupItem
            index={0}
          >
            <span>
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
    </div>
  </div>
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
