
import Containers from './Containers';
import withData from '../fetch/withData';

const withDatasets = withData(({ match }) => (
  `https://idr.openmicroscopy.org/webgateway/proj/${match.params.id}/children/`
));
export default withDatasets(Containers);
