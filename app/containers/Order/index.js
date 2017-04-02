import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUser } from 'containers/App/selectors';
import { loadCountries } from './actions';
import { makeSelectCountries } from './selectors';

import Select from 'components/Select';
import SocialNav from 'components/SocialNav';

class Order extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    countries: React.PropTypes.array,
    loadCountries: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.loadCountries();
  }

  render() {
    const { user, countries } = this.props;
    return (
      <div>
        <Helmet title="Order" />
        {countries &&
          <div className="account-page">
            <div className="container">
              {user &&
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
                  {!user &&
                    <form className="row buy-step">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Name</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby />
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
                  <form action className="row buy-step">
                    <div className="col-12 text-center">
                      <div className="heading heading--mod-bottom mb-5" data-reveal="true">
                        <h1 className="heading__title"><span>Billing Address </span></h1>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" aria-describedby="emailHelp" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Surname</label>
                        <div>
                          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Surname" aria-describedby="emailHelp" data-text="Ahojky" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Company</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Company" aria-describedby="emailHelp" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Address" aria-describedby="emailHelp" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">ZIP code</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="ZIP Code" aria-describedby="emailHelp" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">City</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="City" aria-describedby="emailHelp" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">County / Province</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Country / Province" aria-describedby="emailHelp" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Country</label>
                        <Select className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          {
                            countries.map((country) =>
                              <option value={country.code} key={country.uid}>{country.name}</option>
                            )
                          }
                        </Select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Telephone</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Telephone" aria-describedby="emailHelp" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Telephone alternative</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Telephone alternative" aria-describedby="emailHelp" />
                      </div>
                    </div>
                    <div className="col-12 col-md-8 mt-5 mb-5 text-center">
                      <button className="btn text-uppercase ">proceed to shipping and payment</button>
                    </div>
                  </form>
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
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  countries: makeSelectCountries(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
