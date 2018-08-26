import Containers from './Containers';
import withData from '../fetch/withData';

const withProjects = withData('https://idr.openmicroscopy.org/webgateway/proj/list/');
export default withProjects(Containers);
