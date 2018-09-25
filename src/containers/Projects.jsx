import { BASE_URL } from '../fetch/constants';
import Containers from './Containers';
import connect from '../fetch/connect';

const withProjects = connect(() => ({
  dataFetch: `${BASE_URL}/webgateway/proj/list/`,
}));
export default withProjects(Containers);
