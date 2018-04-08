import { connect } from 'react-redux';
import LandlordDashboard from './LandLordDashboard';

const mapStateToProps = ({ currentSession }) => {
  return { currentSession };
};

export default connect(mapStateToProps)(LandlordDashboard);
