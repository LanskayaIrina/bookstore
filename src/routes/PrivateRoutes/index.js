import { connect } from 'react-redux';

import { PrivateRoutes } from './PrivateRoutes';

const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
});

export default connect(mapStateToProps)(PrivateRoutes);
