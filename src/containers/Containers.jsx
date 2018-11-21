import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import ObjectLink from './ObjectLink';
import Header from '../header/Header';

const Containers = ({ dataFetch, datatype }) => (
  <div>
    <Header />
    <div className="containerContainer">
      <ul>
        {dataFetch.pending && (
          <li
            index={0}
          >
            <span>
              Loading...
            </span>
          </li>
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
              <li
                key={p['@id']}
                style={{ transitionDelay: `${(i * 0.02)}s` }}
                className="underline"
              >
                <ObjectLink
                  datatype={datatype}
                  id={p['@id']}
                >
                  {p.Name}
                </ObjectLink>
              </li>
            ))
          )}
        </CSSTransitionGroup>
      </ul>
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
