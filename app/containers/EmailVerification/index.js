import React from 'react';
import { connect } from 'react-redux';

import { activateAccount } from './actions';

class EmailVerification extends React.Component {

  static propTypes = {
    activateAccount: React.PropTypes.func,
    params: React.PropTypes.object,
  }

  componentWillMount() {
    this.props.activateAccount(this.props.params.token);
  }

  render() {
    return <div />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    activateAccount: (token) => dispatch(activateAccount(token)),
  };
}

export default connect(null, mapDispatchToProps)(EmailVerification);
