import React from 'react';

class Wishlist extends React.Component {

  render() {
    return (
      <div className="wishlist">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading  heading--mod-bottom" data-reveal>
                <div className="heading__subtitle" />
                <h3 className="heading__title">your wishlist</h3>
              </div>
            </div>
          </div>
          <div className="row wishlist-product-list text-center animated fadeInUp">
            <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
              <div className="wish-product">
                <div className="wish-product__background">
                  <img className="img-fluid" src="../userfiles/arrival-1.png" alt="product img" />
                </div>
                <div className="wish-product__content">
                  <div className="wish-product__title">
                    <h4>Blue moon</h4>
                    <i className="icon icon-shop" />
                  </div>
                  <div className="wish-product__price">
                    <span>$239.00</span>
                  </div>
                </div>
                <div className="social-nav" data-reveal>
                  <div className="row">
                    <div className="col-12 text-center">
                      <div className="d-inline-block">
                        <ul className="social-nav__icons">
                          <li><a href><i className="icon icon-facebook" /></a></li>
                          <li><a href><i className="icon icon-twitter" /></a></li>
                          <li><a href><i className="icon icon-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center offset-top-50" data-reveal>
              <a href="" className="btn">save your wishlist</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Wishlist;
