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

import Visual from 'components/Visual';
import ArrivalsSlider from 'components/ArrivalsSlider';
import CategoryCard from 'components/CategoryCard';
import Designers from 'components/Designers';
import SocialNav from 'components/SocialNav';

const visualBg = require('./img/visual-bg.jpg');

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Visual bg={visualBg} subtitle="original design" title="Unique and inspired" />
        <ArrivalsSlider />
        <CategoryCard type="h2" />
        <Designers type="h2" />
        <SocialNav />
      </div>
    );
  }
}
