
import { BASE_URL } from '../fetch/constants';
import Containers from './Containers';
import connect from '../fetch/connect';

const withDatasets = connect(({ match }) => ({
  dataFetch: `${BASE_URL}/api/v0/m/projects/${match.params.id}/datasets/`,
}));
export default withDatasets(Containers);
