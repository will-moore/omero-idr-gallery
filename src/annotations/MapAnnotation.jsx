import React from 'react';
import PropTypes from 'prop-types';
import MaprNamespace from './MaprNamespace';

const MapAnnotation = ({ ann }) => (
  <li
    key={ann.id}
  >
    <div>
      <MaprNamespace
        ns={ann.ns}
      />
    </div>
    <div className="map_ann">
      <table>
        <thead>
          {ann.values.map((v, row) => (
            <tr key={`${row}-${v[1]}`}>
              <th>
                {v[0]}
              </th>
              <td>
                {v[1]}
              </td>
            </tr>))}
        </thead>
      </table>
    </div>
  </li>
);

MapAnnotation.propTypes = {
  ann: PropTypes.shape({
    values: PropTypes.array,
  }).isRequired,
};

export default MapAnnotation;
