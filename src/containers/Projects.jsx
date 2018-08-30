import Containers from './Containers';
import connect from '../fetch/connect';

const withProjects = connect(() => ({
  dataFetch: 'https://idr.openmicroscopy.org/webgateway/proj/list/',
}));
export default withProjects(Containers);
