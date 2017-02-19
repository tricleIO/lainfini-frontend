import React from 'react';
import classNames from 'classnames';

export default class Visual extends React.PureComponent {

    static propTypes = {
        children: React.PropTypes.node,
        bg: React.PropTypes.string,
        bgColor: React.PropTypes.string,
        subtitle: React.PropTypes.string,
        title: React.PropTypes.string,
        mod: React.PropTypes.string,
    };

    render() {
        let style = {
            'backgroundImage': this.props.bg ? 'url(' + this.props.bg + ')' : 'none',
            'backgroundColor': this.props.bgColor ? this.props.bgColor : 'none',
        };
        return (
            <section className={classNames('visual', this.props.mod)} style={style}>
                <div className="visual__heading text-center" data-reveal>
                    {this.props.subtitle && 
                        <p className="visual__subtitle ">{this.props.subtitle}</p>
                    }
                    {this.props.title && 
                        <h1 className="visual__title">{this.props.title}</h1>
                    }
                </div>
            </section>
        );
    }

}