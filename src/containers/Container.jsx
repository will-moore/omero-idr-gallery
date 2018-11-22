import React from 'react';
import PropTypes from 'prop-types';
import ChildrenLink from './ChildrenLink';
import MapAnnotations from '../annotations/MapAnnotations';
import Header from '../header/Header';

const Container = ({ dataFetch, match, datatype }) => (
  <div>
    <Header dataFetch={dataFetch} />
    <div className="containerContainer">
      <div>
        <h4>
          {datatype}
          {' ID: '}
          {match.params.id}
        </h4>

        <div>
          {dataFetch.rejected && dataFetch.reason}
          {(dataFetch.fulfilled && dataFetch.value.data.Description) && (`Description: ${dataFetch.value.data.Description}`)}
        </div>

        <ChildrenLink
          datatype={datatype}
          id={match.params.id}
        />

        <MapAnnotations
          datatype={datatype}
          id={match.params.id}
        />

      </div>
    </div>
  </div>
);


Container.propTypes = {
// see https://github.com/heroku/react-refetch#example
  dataFetch: PropTypes.shape({
    values: PropTypes.array,
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    reason: PropTypes.string,
    fulfilled: PropTypes.bool,
  }).isRequired,
  match: PropTypes.shape({}).isRequired,
  datatype: PropTypes.string.isRequired,
};

export default Container;
