import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUser } from 'containers/App/selectors';

import SocialNav from 'components/SocialNav';

class Order extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Helmet title="Order" />
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
                      <input type="text" className="form-control" id="exampleInputEmail1" placeholder="John" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group has-danger">
                      <label htmlFor="exampleInputEmail1">Surname</label>
                      <div>
                        <input type="text" className="form-control err" id="exampleInputEmail1" placeholder="Doe" aria-describedby="emailHelp" data-text="Ahojky" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Address</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">ZIP code</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">City</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">County / Province</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Country</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Telephone</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Telephone alternative</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
        <SocialNav links />
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

export default connect(mapStateToProps)(Order);
