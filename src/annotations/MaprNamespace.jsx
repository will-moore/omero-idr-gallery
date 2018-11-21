import React from 'react';
import PropTypes from 'prop-types';

const config = {
  'openmicroscopy.org/mapr/cell_line': 'Cell Line',
  'openmicroscopy.org/mapr/gene': 'Gene',
  'openmicroscopy.org/mapr/gene/supplementary': 'Gene supplementary',
  'openmicroscopy.org/mapr/organism': 'Organism',
  'openmicroscopy.org/mapr/phenotype': 'Phenotype',
  'openmicroscopy.org/omero/bulk_annotations': 'Others',
};

const MaprNamespace = ({ ns }) => (
  <span>
    {config[ns] || ns}
  </span>
);

MaprNamespace.propTypes = {
  ns: PropTypes.string.isRequired,
};

export default MaprNamespace;
