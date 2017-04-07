import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';

import { makeSelectOrder } from './selectors';

class PayByStripe extends React.Component {

  static propTypes = {
    order: React.PropTypes.object,
    redirectNoOrder: React.PropTypes.func,
  }

  componentWillMount() {
    if (!this.props.order) {
      this.props.redirectNoOrder();
    }
  }

  render() {
    const { order } = this.props;
    console.log(order);

    return (
      <form className="user-card">
        {this.props.order &&
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="order-info">
                <h2>Payment and order info</h2>
                <ul>
                  <li>Price: {order.totalPrice}$</li>
                  <li>Shipping price: {order.shipping.price}$</li>
                  <li>Total price: {order.totalPriceWithShipping}$</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="checkout">
                <div className="credit-card-box">
                  <div className="flip">
                    <div className="front">
                      <div className="chip" />
                      <div className="logo">


                      </div>
                      <div className="number" />
                      <div className="card-holder">
                        <label>Card holder</label>
                        <div />
                      </div>
                      <div className="card-expiration-date">
                        <label>Expires</label>
                        <div />
                      </div>
                    </div>
                    <div className="back">
                      <div className="strip" />
                      <div className="logo">


                      </div>
                      <div className="ccv">
                        <label>CCV</label>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form">
                  <fieldset>
                    <label htmlFor="card-number">Card Number</label>
                    <input type="num" id="card-number" className="input-cart-number" maxLength={4} />
                    <input type="num" id="card-number-1" className="input-cart-number" maxLength={4} />
                    <input type="num" id="card-number-2" className="input-cart-number" maxLength={4} />
                    <input type="num" id="card-number-3" className="input-cart-number" maxLength={4} />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="card-holder">Card holder</label>
                    <input type="text" id="card-holder" />
                  </fieldset>
                  <fieldset className="fieldset-expiration">
                    <label htmlFor="card-expiration-month">Expiration date</label>
                    <div className="select">
                      <select id="card-expiration-month">
                        <option />
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                    </div>
                    <div className="select">
                      <select id="card-expiration-year">
                        <option />
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset className="fieldset-ccv">
                    <label htmlFor="card-ccv">CCV</label>
                    <input type="text" id="card-ccv" maxLength={3} />
                  </fieldset>
                  <button className="btn"><i className="fa fa-lock" /> submit</button>
                </div>
              </div>
            </div>
          </div>
        }
      </form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  order: makeSelectOrder(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectNoOrder: () => dispatch(push('/catalog')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PayByStripe);
