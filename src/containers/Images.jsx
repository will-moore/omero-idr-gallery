import { BASE_URL } from '../fetch/constants';
import Containers from './Containers';
import connect from '../fetch/connect';

const withData = connect(({ match }) => ({
  dataFetch: `${BASE_URL}/api/v0/m/datasets/${match.params.id}/images/`,
}));
export default withData(Containers);
