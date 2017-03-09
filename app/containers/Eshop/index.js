import React from 'react';

import Visual from 'components/Visual';
import Peoples from 'components/Peoples';
import SocialNav from 'components/SocialNav';

import ProductSlider from './productSlider';

import { Link } from 'react-router';

export default class Eshop extends React.Component {
  constructor(props) {
    super(props);

    this.eshopProduktBigImg = require('./img/eshop-produkt-big.png');
    this.eshopProduktExampleImg = require('./img/eshop-product-example.jpg');
    this.eshopSmallSecondImg = require('./img/eshop-small-second.png');
  }

  render() {
    return (
      <div>
        <Visual bg="//placehold.it/1920x260" mod="visual--small" />

        <div className="filter">
          <div className="container">
            <div className="row text-center">
              <div className="col-10 offset-1">
                <div className="filter__heading">
                  <h1 className="filter__title">original handmade scarves</h1>
                  <span className="filter__subtitle">Filter by</span>
                </div>
              </div>
              <div className="col-12 col-sm-4" />
              <div className="col-12 col-sm-4" />
              <div className="col-12 col-sm-4" />
            </div>
          </div>
        </div>

        <div className="product-list">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 product-list__item">
                <div className="product-list__bg">
                  <ProductSlider img={this.eshopProduktBigImg} />
                  <img src={this.eshopProduktExampleImg} className="product-list__small-image" alt="example" />
                </div>
                <div className="product-list__content">
                  <div className="product-list__title">
                    <h4>Blue moon</h4>
                    <span>$239.00</span>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">size</div>
                    <div className="col-4">60x50 cm <br /> 50x30cm</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">material</div>
                    <div className="col-4">printed fine silk</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">design</div>
                    <div className="col-4">Jabob Borrows</div>
                  </div>
                  <div className="row product-list__action">
                    <div className="col-6">
                      <i className="icon icon-wishlist" />
                      <span>Add to wishlist</span>
                    </div>
                    <div className="col-6">
                      <Link to="/eshop/detail/1" className="btn">See detail</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 product-list__item product-list__item--top-left ">
                <div className="product-list__bg">
                  <ProductSlider img={this.eshopProduktBigImg} />
                  <img src={this.eshopSmallSecondImg} className="product-list__small-image" alt="example" />
                </div>
                <div className="product-list__content">
                  <div className="product-list__title">
                    <h4>Blue moon</h4>
                    <span>$239.00</span>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">size</div>
                    <div className="col-4">60x50 cm <br /> 50x30cm</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">material</div>
                    <div className="col-4">printed fine silk</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">design</div>
                    <div className="col-4">Jabob Borrows</div>
                  </div>
                  <div className="row product-list__action">
                    <div className="col-6">
                      <i className="icon icon-wishlist" />
                      <span>Add to wishlist</span>
                    </div>
                    <div className="col-6">
                      <Link to="/eshop/detail/1" className="btn">See detail</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 product-list__item product-list__item--top-right ">
                <div className="product-list__bg">
                  <ProductSlider img={this.eshopProduktBigImg} />
                  <img src={this.eshopProduktExampleImg} className="product-list__small-image" alt="example" />
                </div>
                <div className="product-list__content">
                  <div className="product-list__title">
                    <h4>Blue moon</h4>
                    <span>$239.00</span>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">size</div>
                    <div className="col-4">60x50 cm <br /> 50x30cm</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">material</div>
                    <div className="col-4">printed fine silk</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">design</div>
                    <div className="col-4">Jabob Borrows</div>
                  </div>
                  <div className="row product-list__action">
                    <div className="col-6">
                      <i className="icon icon-wishlist" />
                      <span>Add to wishlist</span>
                    </div>
                    <div className="col-6">
                      <Link to="/eshop/detail/1" className="btn">See detail</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 product-list__item product-list__item--bottom-left">
                <div className="product-list__bg">
                  <ProductSlider img={this.eshopProduktBigImg} />
                  <img src={this.eshopSmallSecondImg} className="product-list__small-image" alt="example" />
                </div>
                <div className="product-list__content">
                  <div className="product-list__title">
                    <h4>Blue moon</h4>
                    <span>$239.00</span>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">size</div>
                    <div className="col-4">60x50 cm <br /> 50x30cm</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">material</div>
                    <div className="col-4">printed fine silk</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">design</div>
                    <div className="col-4">Jabob Borrows</div>
                  </div>
                  <div className="row product-list__action">
                    <div className="col-6">
                      <i className="icon icon-wishlist" />
                      <span>Add to wishlist</span>
                    </div>
                    <div className="col-6">
                      <Link to="/eshop/detail/1" className="btn">See detail</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 product-list__item">
                <div className="product-list__bg">
                  <ProductSlider img={this.eshopProduktBigImg} />
                  <img src={this.eshopProduktExampleImg} className="product-list__small-image" alt="example" />
                </div>
                <div className="product-list__content">
                  <div className="product-list__title">
                    <h4>Blue moon</h4>
                    <span>$239.00</span>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">size</div>
                    <div className="col-4">60x50 cm <br /> 50x30cm</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">material</div>
                    <div className="col-4">printed fine silk</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">design</div>
                    <div className="col-4">Jabob Borrows</div>
                  </div>
                  <div className="row product-list__action">
                    <div className="col-6">
                      <i className="icon icon-wishlist" />
                      <span>Add to wishlist</span>
                    </div>
                    <div className="col-6">
                      <Link to="/eshop/detail/1" className="btn">See detail</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 product-list__item product-list__item--top-left ">
                <div className="product-list__bg">
                  <ProductSlider img={this.eshopProduktBigImg} />
                  <img src={this.eshopSmallSecondImg} className="product-list__small-image" alt="example" />
                </div>
                <div className="product-list__content">
                  <div className="product-list__title">
                    <h4>Blue moon</h4>
                    <span>$239.00</span>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">size</div>
                    <div className="col-4">60x50 cm <br /> 50x30cm</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">material</div>
                    <div className="col-4">printed fine silk</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">design</div>
                    <div className="col-4">Jabob Borrows</div>
                  </div>
                  <div className="row product-list__action">
                    <div className="col-6">
                      <i className="icon icon-wishlist" />
                      <span>Add to wishlist</span>
                    </div>
                    <div className="col-6">
                      <Link to="/eshop/detail/1" className="btn">See detail</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 product-list__item product-list__item--top-right ">
                <div className="product-list__bg">
                  <ProductSlider img={this.eshopProduktBigImg} />
                  <img src={this.eshopProduktExampleImg} className="product-list__small-image" alt="example" />
                </div>
                <div className="product-list__content">
                  <div className="product-list__title">
                    <h4>Blue moon</h4>
                    <span>$239.00</span>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">size</div>
                    <div className="col-4">60x50 cm <br /> 50x30cm</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">material</div>
                    <div className="col-4">printed fine silk</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">design</div>
                    <div className="col-4">Jabob Borrows</div>
                  </div>
                  <div className="row product-list__action">
                    <div className="col-6">
                      <i className="icon icon-wishlist" />
                      <span>Add to wishlist</span>
                    </div>
                    <div className="col-6">
                      <Link to="/eshop/detail/1" className="btn">See detail</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 product-list__item product-list__item--bottom-left">
                <div className="product-list__bg">
                  <ProductSlider img={this.eshopProduktBigImg} />
                  <img src={this.eshopSmallSecondImg} className="product-list__small-image" alt="example" />
                </div>
                <div className="product-list__content">
                  <div className="product-list__title">
                    <h4>Blue moon</h4>
                    <span>$239.00</span>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">size</div>
                    <div className="col-4">60x50 cm <br /> 50x30cm</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">material</div>
                    <div className="col-4">printed fine silk</div>
                  </div>
                  <div className="row product-list__info">
                    <div className="col-7">design</div>
                    <div className="col-4">Jabob Borrows</div>
                  </div>
                  <div className="row product-list__action">
                    <div className="col-6">
                      <i className="icon icon-wishlist" />
                      <span>Add to wishlist</span>
                    </div>
                    <div className="col-6">
                      <Link to="/eshop/detail/1" className="btn">See detail</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Peoples btnInline isShop />
        <SocialNav links />
      </div>
    );
  }
}
