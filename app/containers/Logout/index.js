import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { logout } from 'containers/App/actions';

class Logout extends React.Component {

  static propTypes = {
    logout: React.PropTypes.func,
    redirect: React.PropTypes.func,
  };

  componentWillMount() {
    this.props.logout();
    this.props.redirect();
  }

  render() {
    return <div />;
  }

}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    redirect: () => dispatch(push('/')),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
