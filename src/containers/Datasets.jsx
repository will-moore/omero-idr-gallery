
import Containers from './Containers';
import connect from '../fetch/connect';

const withDatasets = connect(({ match }) => ({
  dataFetch: `https://idr.openmicroscopy.org/webgateway/proj/${match.params.id}/children/`,
}));
export default withDatasets(Containers);
