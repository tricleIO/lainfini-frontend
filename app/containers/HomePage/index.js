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

import {
  loadArrivals,
} from './actions';

import Visual from 'components/Visual';
import ArrivalsSlider from 'components/ArrivalsSlider';
import CategoryCard from 'components/CategoryCard';
import Currator from 'components/Currator';
import Lookbook from 'components/Lookbook';
import SocialNav from 'components/SocialNav';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { createStructuredSelector } from 'reselect';

import { makeSelectProducts } from './selectors';

const visualBg = require('./img/visual-bg.png');

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-functional

  static propTypes = {
    changeIsHomepage: React.PropTypes.func,
    loadArrivals: React.PropTypes.func,
    products: React.PropTypes.object,
  };

  componentWillMount() {
    this.props.changeIsHomepage(true);
    this.props.loadArrivals();
  }

  componentWillUnmount() {
    this.props.changeIsHomepage(false);
  }

  render() {
    return (
      <div>
        <Visual bg={visualBg} subtitle={<FormattedMessage {...messages.smallTitle} />} title={<FormattedMessage {...messages.bigTitle} />} />
        { this.props.products.uid &&
          <ArrivalsSlider products={this.props.products} /> }
        <CategoryCard type="h2" />
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
    loadArrivals: () => dispatch(loadArrivals()),
  };
}

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

