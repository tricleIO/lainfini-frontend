/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import classNames from 'classnames';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../../sass/app.scss';

import {
  makeSelectMenuActive,
  makeIsHomepage,
  makeSelectNotifications,
  makeSelectNotificationsUpdate,
  makeSelectLoadings,
  makeSelectLoadingsCount,
} from './selectors';

import {
  initApp,
  showedNotification,
} from './actions';

import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import Cookies from './Cookies';

import Helmet from 'react-helmet';

import NotificationSystem from 'react-notification-system';

import _ from 'lodash';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    menuActive: React.PropTypes.bool,
    isHomepage: React.PropTypes.bool,
    initApp: React.PropTypes.func,
    showedNotification: React.PropTypes.func,
    loadingsCount: React.PropTypes.number,
  };

  componentWillMount() {
    this.props.initApp();
  }

  componentWillReceiveProps(nextProps) {
    const notifications = _(nextProps.notifications).filter({ showed: false }).value();
    if (notifications) {
      notifications.map((notification) => this.addNotification(notification));
    }
  }

  addNotification(notification) {
    if (this.notificationSystem) {
      const noti = _({ level: 'info', autoDismiss: 5, dismissable: true, position: 'br' }).merge(notification).value();
      this.props.showedNotification(noti.uuid);
      this.notificationSystem.addNotification(noti);
    }
  }

  render() {
    return (
      <div id="body" className={classNames({ hp: this.props.isHomepage, sp: !this.props.isHomepage })}>
        <Helmet
          htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
          titleTemplate="%s | LAINFINI"
          defaultTitle="Homepage | LAINFINI"
        />
        { this.props.loadingsCount > 0 &&
        <div className="loading">
          <div className="absolute">
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
          </div>
        </div>
        }
        <NotificationSystem ref={(c) => { this.notificationSystem = c; }} />
        <Header />
        <main id="page">
          <input type="checkbox" id="op" checked={this.props.menuActive} />
          <div className="overlay overlay__hugeinc">
            <label htmlFor="op"></label>
            <Menu />
          </div>
          {React.Children.toArray(this.props.children)}
        </main>
        <Cookies />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  menuActive: makeSelectMenuActive(),
  isHomepage: makeIsHomepage(),
  notifications: makeSelectNotifications(),
  notificationsUpdate: makeSelectNotificationsUpdate(),
  loadings: makeSelectLoadings(),
  loadingsCount: makeSelectLoadingsCount(),
});

function mapDispatchToProps(dispatch) {
  return {
    initApp: () => dispatch(initApp()),
    showedNotification: (uuid) => dispatch(showedNotification(uuid)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
