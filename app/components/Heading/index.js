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
        return (
            <div class="heading {{#if mod}}heading--mod-light{{/if}}" data-reveal>
    <div class="heading__subtitle">{{subtitle}}</div>
    <{{type}} class="heading__title">{{title}}</{{type}}>
    {{#if intro}}
        <p class="heading__intro">
            {{intro}}
        </p>
    {{/if}}
</div>
        );
    }

}