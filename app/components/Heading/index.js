import React from 'react';

import classNames from 'classnames';

export default class Heading extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        children: React.PropTypes.node,
        mod: React.PropTypes.bool,
        subtitle: React.PropTypes.string,
        title: React.PropTypes.string,
        type: React.PropTypes.string,
        intro: React.PropTypes.string,
    };

    render() {
        let headingElement = React.createElement(this.props.type, {className: "heading__title"}, this.props.title);
        return (
            <div className={classNames("heading", {"heading--mod-light": this.props.mod})} data-reveal>
                <div className="heading__subtitle">{this.props.subtitle}</div>
                {headingElement}
                { this.props.intro &&
                    <p class="heading__intro">
                        {this.props.intro}
                    </p>
                }
            </div>
        );
    }

}