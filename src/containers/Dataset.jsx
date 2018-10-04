
import { BASE_URL } from '../fetch/constants';
import Container from './Container';
import connect from '../fetch/connect';

const withData = connect(({ match }) => ({
  dataFetch: `${BASE_URL}/api/v0/m/datasets/${match.params.id}/`,
}));
export default withData(Container);
