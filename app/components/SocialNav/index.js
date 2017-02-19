import React from 'react';

export default class SocialNav extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        children: React.PropTypes.node,
        links: React.PropTypes.bool,
    };

    render() {
        return (
            <div className="social-nav" data-reveal>
                <div className="container">
                    <div className="row">
                        {this.props.links &&
                            <div className="col-12 text-center">
                                <div className="d-inline-block">
                                    <nav className="social-nav__links offset-vertical-50">
                                        <ul>
                                            <li><a className="mod--1" href="#">Terms of Service</a></li>
                                            <li><a className="mod--1" href="#">Customer Service</a></li>
                                            <li><a className="mod--1" href="#">Returns</a></li>
                                            <li><a className="mod--1" href="#">Privacy Policy</a></li>
                                            <li><a className="mod--1" href="#">About Cookies</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        }
                        <div className="col-12 text-center">
                            <div className="d-inline-block">
                                <ul className="social-nav__icons">
                                    <li><a href=""><i className="icon icon-facebook" /></a></li>
                                    <li><a href=""><i className="icon icon-twitter" /></a></li>
                                    <li><a href=""><i className="icon icon-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}