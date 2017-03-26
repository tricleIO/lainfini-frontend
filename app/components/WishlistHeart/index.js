import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import _ from 'lodash';

import classNames from 'classnames';

import {
  makeSelectUser,
  makeSelectWishlist,
} from 'containers/App/selectors';

import {
  addToWishlist,
  deleteFromWishlist,
} from 'containers/App/actions';

class WishlistHeart extends React.Component {

  static propTypes = {
    addToWishlist: React.PropTypes.func,
    deleteFromWishlist: React.PropTypes.func,
    uid: React.PropTypes.string,
    user: React.PropTypes.object,
    wishlist: React.PropTypes.array,
  }

  onClick() {
    const { wishlist, uid } = this.props;
    if (this.isActive()) {
      this.props.deleteFromWishlist(_(wishlist).find({ productUid: uid }).uid);
    } else {
      this.props.addToWishlist(uid);
    }
  }

  isActive() {
    const { wishlist, uid } = this.props;
    return Boolean(_(wishlist).find({ productUid: uid }));
  }

  render() {
    const { user } = this.props;
    const comp = user.uid ?
      <a className={classNames('add_wishlist', { active: this.isActive() })} onClick={(e) => this.onClick(e)}>
        <i className="icon icon-wishlist"></i>
      </a>
      : null;
    return comp;
  }

}

function mapDispatchToProps(dispatch) {
  return {
    addToWishlist: (uid) => dispatch(addToWishlist(uid)),
    deleteFromWishlist: (uid) => dispatch(deleteFromWishlist(uid)),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  wishlist: makeSelectWishlist(),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistHeart);
