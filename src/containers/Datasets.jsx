
import { BASE_URL } from '../fetch/constants';
import Containers from './Containers';
import connect from '../fetch/connect';

const withDatasets = connect(({ match }) => ({
  dataFetch: `${BASE_URL}/webgateway/proj/${match.params.id}/children/`,
}));
export default withDatasets(Containers);
