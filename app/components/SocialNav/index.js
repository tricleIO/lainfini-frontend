import React from 'react';

import { Link } from 'react-router';

import config from 'config';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {
  makeSelectUser,
} from 'containers/App/selectors';

class SocialNav extends React.PureComponent {

  static propTypes = {
    links: React.PropTypes.bool,
    user: React.PropTypes.object,
  };

  render() {
    return (
      <div className="social-nav" data-reveal>
        <div className="container">
          <div className="row">
            {this.props.links &&
              <div className="col-12 text-center">
                <div className="d-inline-block">
                  <nav className="social-nav__links offset-vertical-50">
                    <ul>
                      <li><Link to="/faq">FAQ</Link></li>
                      <li><Link to="/terms-of-service">Terms of Service</Link></li>
                      { this.props.user.uid && <li><Link to="/user">Customer Service</Link></li> }
                      { this.props.user.uid && <li><Link to="/user/order-history">Order history</Link></li> }
                      { this.props.user.uid && <li><Link to="/user/complaints">Complaints</Link></li> }
                      { !this.props.user.uid && <li><Link to="/login">Login / Register</Link></li> }
                    </ul>
                  </nav>
                </div>
              </div>
            }
            <div className="col-12 text-center">
              <div className="d-inline-block">
                <ul className="social-nav__icons">
                  <li><a href={config.facebookLink}><i className="icon icon-facebook" /></a></li>
                  <li><a href={config.twitterLink}><i className="icon icon-twitter" /></a></li>
                  <li><a href={config.instagramLink}><i className="icon icon-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

export default connect(mapStateToProps)(SocialNav);
