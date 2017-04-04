import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';

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
              <div className="row">
                <div className="col-12">
                  {!user.uid &&
                    <form className="row buy-step">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Name</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Surname</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Password</label>
                          <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                      </div>
                      <div className="col-6">
                        <p>Or aloow to sign in with your existing  account</p>
                        <ul className="social-nav__icons">
                          <li><a href><i className="icon icon-facebook" /></a></li>
                          <li><a href><i className="icon icon-twitter" /></a></li>
                          <li><a href><i className="icon icon-instagram" /></a></li>
                        </ul>
                      </div>
                      <div className="col-6 text-right">
                        <button className="save-changes">save changes</button>
                      </div>
                    </form>
                  }
                  <OrderForm countries={countries} onSubmit={(values) => this.onSubmit(values)} initialValues={formInitialValues} />
                </div>
              </div>
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
