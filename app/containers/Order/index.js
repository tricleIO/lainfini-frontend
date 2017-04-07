import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';
import _ from 'lodash';

import { makeSelectUser } from 'containers/App/selectors';
import { loadCountries, saveBillingAddress } from './actions';
import { makeSelectCountries } from './selectors';

import OrderForm from './forms/order';
import SocialNav from 'components/SocialNav';

class Order extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    countries: React.PropTypes.array,
    loadCountries: React.PropTypes.func,
    saveBillingAddress: React.PropTypes.func,
    nextPage: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.loadCountries();
  }

  onSubmit(values) {
    const vals = values.toJS();

    if (!this.props.user.uid) {
      const errors = {};
      if (!vals.firstNameUnlogged) {
        errors.firstNameUnlogged = 'First name is required!';
      }
      if (!vals.lastNameUnlogged) {
        errors.lastNameUnlogged = 'Last name is required!';
      }
      if (!vals.emailUnlogged) {
        errors.emailUnlogged = 'Email is required!';
      }
      if (!_(errors).isEmpty()) {
        throw new SubmissionError(errors);
      }
    }

    if (!values.get('country')) {
      vals.country = this.props.countries[0].code;
    }
    this.props.saveBillingAddress(vals);
    this.props.nextPage();
  }

  render() {
    const { user, countries } = this.props;

    const formInitialValues = {
      firstName: user.uid ? user.firstName : '',
    };

    return (
      <div>
        <Helmet title="Order" />
        {countries &&
          <div className="account-page">
            <div className="container">
              {user.uid &&
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="heading heading--mod-bottom mb-5" data-reveal="true">
                      <h1 className="heading__title"><span>welcome {user.firstName} {user.lastName}, please fill in blanks</span></h1>
                    </div>
                  </div>
                </div>
              }
              <OrderForm countries={countries} onSubmit={(values) => this.onSubmit(values)} initialValues={formInitialValues} />
            </div>
          </div>
        }
        <SocialNav links />
      </div>
    );
  }

}

export function mapDispatchToProps(dispatch) {
  return {
    loadCountries: (state) => dispatch(loadCountries(state)),
    saveBillingAddress: (address) => dispatch(saveBillingAddress(address)),
    nextPage: () => dispatch(push('/order/shipping-and-payment')),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  countries: makeSelectCountries(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
