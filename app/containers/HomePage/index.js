/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import { connect } from 'react-redux';

import {
  changeHomepageState,
} from 'containers/App/actions';

import Visual from 'components/Visual';
import ArrivalsSlider from 'components/ArrivalsSlider';
import CategoryCard from 'components/CategoryCard';
import Designers from 'components/Designers';
import Currator from 'components/Currator';
import Lookbook from 'components/Lookbook';
import SocialNav from 'components/SocialNav';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const visualBg = require('./img/visual-bg.jpg');

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-functional

  static propTypes = {
    changeIsHomepage: React.PropTypes.func,
  };

  componentWillMount() {
    this.props.changeIsHomepage(true);
  }

  componentWillUnmount() {
    this.props.changeIsHomepage(false);
  }

  render() {
    return (
      <div>
        <Visual bg={visualBg} subtitle={<FormattedMessage {...messages.smallTitle} />} title={<FormattedMessage {...messages.bigTitle} />} />
        <ArrivalsSlider />
        <CategoryCard type="h2" />
        <Designers type="h2" />
        <Currator type="h3" />
        <Lookbook type="h3" />
        <SocialNav />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    changeIsHomepage: (state) => dispatch(changeHomepageState(state)),
  };
}

export default connect(null, mapDispatchToProps)(HomePage);

