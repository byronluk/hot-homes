import { connect } from 'react-redux';
import LandlordDashboard from './LandLordDashboard';

const mapStateToProps = ({ currentSession }) => {
  return { currentSession };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandlordDashboard);
