import React from 'react';

import Heading from '../Heading';

export default class Visual extends React.PureComponent {

  static propTypes = {
    bg: React.PropTypes.string,
    bgColor: React.PropTypes.string,
  };

  render() {
    const style = {
      backgroundImage: this.props.bg ? 'url(' + this.props.bg + ')' : 'none',
      backgroundColor: this.props.bgColor ? this.props.bgColor : 'none',
    };

    return (
      <section className="visual" style={style}>
        <div className="container visual--mod">
          <div className="row">
            <div className="col-12 text-center animated fadeInUp">
              <Heading subtitle="carefully prepared just for you" title="“Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.”" type="h3" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
