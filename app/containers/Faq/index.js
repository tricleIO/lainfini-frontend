import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';

import { getFaq } from './actions';
import { makeSelectFaq } from './selectors';

import SocialNav from 'components/SocialNav';

class Faq extends React.Component {

  static propTypes = {
    loadFaqs: React.PropTypes.func,
    faqs: React.PropTypes.array,
  }

  componentDidMount() {
    this.props.loadFaqs();
  }

  render() {
    const { faqs } = this.props;
    return (
      <div>
        <Helmet title="FAQ" />
        <div className="text-page" data-reveal>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1">
                <div className="wsw">
                  <h1>FAQ</h1>
                  {_(faqs).isArray() && faqs.map((faq) =>
                    <div>
                      <p><b>{faq.question}</b></p>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <SocialNav />
      </div>
    );
  }

}

export function mapDispatchToProps(dispatch) {
  return {
    loadFaqs: () => dispatch(getFaq()),
  };
}

const mapStateToProps = createStructuredSelector({
  faqs: makeSelectFaq(),
});


export default connect(mapStateToProps, mapDispatchToProps)(Faq);
