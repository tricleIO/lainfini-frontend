import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  saveCookieAccepted,
} from '../actions';

import {
  makeSelectCookiesAccepted,
} from '../selectors';

class Cookies extends React.Component {

  static propTypes = {
    cookiesAccepted: React.PropTypes.bool,
    saveCookieAccepted: React.PropTypes.func,
  }

  componentWillMount() {
    if (!this.props.cookiesAccepted) {
      const cookies = this.getCookies();
      if (parseInt(cookies.euCookiesAccepted, 10) === 1) {
        this.props.saveCookieAccepted(true);
      }
    }
  }

  setHideToCookies() {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = 'euCookiesAccepted=1; path=/; expires=' + date.toGMTString();
  }

  getCookies() {
    const cookies = {};
    for (const cookie of document.cookie.split('; ')) {
      const [name, value] = cookie.split('=');
      cookies[name] = decodeURIComponent(value);
    }
    return cookies;
  }

  cookiesAccepted() {
    this.setHideToCookies();
    this.props.saveCookieAccepted(true);
  }

  render() {
    const el = !this.props.cookiesAccepted ?
      <div className="cookies">
        <div className="container">
          <div className="row">
            <div className="col-11">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam asperiores cupiditate debitis!</p>
            </div>
            <div className="col-1">
              <a onClick={() => this.cookiesAccepted()}>
                <i className="icon icon-close"></i>
              </a>
            </div>
          </div>
        </div>
      </div> : null;
    return el;
  }

}

function mapDispatchToProps(dispatch) {
  return {
    saveCookieAccepted: (cookies) => dispatch(saveCookieAccepted(cookies)),
  };
}

const mapStateToProps = createStructuredSelector({
  cookiesAccepted: makeSelectCookiesAccepted(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cookies);
