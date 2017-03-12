import React from 'react';
import classNames from 'classnames';

export default class Visual extends React.PureComponent {

  static propTypes = {
    bg: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    title: React.PropTypes.string,
    mod: React.PropTypes.string,
  };

  render() {
    const style = {
      backgroundImage: this.props.bg ? 'url(' + this.props.bg + ')' : 'none',
      backgroundColor: this.props.bgColor ? this.props.bgColor : 'none',
    };
    return (
      <section className={classNames('visual', this.props.mod)} style={style}>
        <div className="visual__alternative-title offset-vertical-50 text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 fadeInUp animated">
                alternativní headline promo 10 % sleva
              </div>
            </div>
          </div>
        </div>
        <div className="visual__heading text-center" data-reveal>
          {this.props.subtitle &&
            <p className="visual__subtitle offset-vertical-30">{this.props.subtitle}</p>
          }
          {this.props.title &&
            <h1 className="visual__title">{this.props.title}</h1>
          }
        </div>
      </section>
    );
  }

}
