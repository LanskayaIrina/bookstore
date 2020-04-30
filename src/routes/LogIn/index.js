import { connect } from 'react-redux';

import { LogIn } from './LogIn';
import { authUser } from 'redux/Auth/actions';

const mapDispatchToProps = {
  authUser,
};

export default connect(null, mapDispatchToProps)(LogIn);
