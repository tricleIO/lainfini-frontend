import React from 'react';

import SocialNav from 'components/SocialNav';
import LastView from 'components/LastView';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import _ from 'lodash';

import { makeSelectCart } from 'containers/App/selectors';
import { updateCartQty, deleteFromCart } from 'containers/App/actions';

import ItemCounter from 'components/ItemCounter';

import config from 'config';

import { Link } from 'react-router';

class Basket extends React.Component {

  static propTypes = {
    basket: React.PropTypes.object,
    updateCartQty: React.PropTypes.func,
    deleteFromCart: React.PropTypes.func,
  };

  updateQty(uid, qty) {
    this.props.updateCartQty(uid, qty);
  }

  render() {
    const { basket } = this.props;
    console.log(basket);
    if (basket) {
      basket.items = _(basket.items).map((obj) => {
        const o = obj;
        o.totalPrice = obj.quantity * obj.product.price;
        return o;
      }).value();
    }
    return (
      <main id="page">
        <div className="basket">
          <div className="product-list">
            <div className="container">
              <div className="row">
                {basket && _(basket.items).size() > 0 && basket.items.map((i, index) =>
                  <div className="col-12 product-list__item" key={index}>
                    <div className="product-list__item--flex">
                      <div className="product-list__bg col-12 col-sm-2">
                        <img src={config.apiUrl + 'files/' + i.product.mainImage.fileIndex + '.jpg'} alt="basket product" />
                      </div>
                      <div className="product-list__content col-12 col-sm-10">
                        <div className="product-list__title col-12 col-sm-4">
                          <h4>{i.product.name}</h4>
                          <ItemCounter defaultValue={i.quantity} value={i.quantity} onChange={(qty) => this.updateQty(i.productUid, qty)} />
                        </div>
                        <div className="product-list__info col-12 col-sm-4">
                          {i.product.size.value} <br />
                          {i.product.material.name} <br />
                          {i.product.material.composition}
                        </div>
                        <div className="product-list__price col-12 col-sm-3">
                          <span>${i.totalPrice}</span>
                        </div>
                        <div className="product-list__action col-12 col-sm-1" onClick={() => this.props.deleteFromCart(i.productUid)}>
                          <i className="icon icon-close" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="row">
                <div className="col-12 col-sm-5 offset-sm-6">
                  <div className="ui-total-price">
                    <div className="title">
                      subtotal
                    </div>
                    <div className="price">
                      ${_(basket.items).sumBy('totalPrice')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ui-btn-double-type">
                  <div className="col-12 col-sm-4 offset-sm-2">
                    <div className="btn__inline offset-vertical-30">
                      <Link to="/catalog" data-reveal>continue shopping</Link>
                    </div>
                  </div>
                  <div className="col-12 col-sm-5">
                    <div className="btn__inline offset-vertical-30">
                      <a href="" className="btn" data-reveal>check out your basket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LastView />
        <SocialNav links />
      </main>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  basket: makeSelectCart(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateCartQty: (item, qty) => dispatch(updateCartQty(item, qty)),
    deleteFromCart: (item) => dispatch(deleteFromCart(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
