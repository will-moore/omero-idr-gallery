import { BASE_URL } from '../fetch/constants';
import Containers from './Containers';
import connect from '../fetch/connect';

const withProjects = connect(() => ({
  dataFetch: `${BASE_URL}/api/v0/m/projects/`,
}));
export default withProjects(Containers);
