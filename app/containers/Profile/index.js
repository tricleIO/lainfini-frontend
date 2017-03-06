import React from 'react';

import $ from 'jquery';
import 'slick-carousel';

import SocialNav from 'components/SocialNav';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.mirkaImg = require('./img/mirka.jpg');
    this.img1Img = require('./img/img-1.jpg');
    this.img2Img = require('./img/img-2.jpg');
    this.wswImg1Img = require('./img/wsw-img-1.jpg');
    this.wswImg2Img = require('./img/wsw-img-2.jpg');
    this.wswImg3Img = require('./img/wsw-img-3.jpg');
    this.wswImg4Img = require('./img/wsw-img-4.jpg');
  }

  componentDidMount() {
    $(this.profileGallerySlider).slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      infinite: true,
      speed: 500,
      centerMode: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <section className="profil">
          <div className="profil__image" style={{ backgroundImage: 'url("' + this.mirkaImg + '")' }} data-reveal />
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6" data-reveal>
                <div className="profil__info">
                  <div className="profil__head" data-name="Alexandra">
                    <div className="profil__head__subtitle">
                      <p>Profile</p>
                    </div>
                    <div className="profil__head__title">
                      <h1>Alexandra talavaskova</h1>
                    </div>
                    <div className="profil__head__prof">
                      <p>Fashion Designer &amp; Head of LAINFINI STUDIO</p>
                    </div>
                  </div>
                  <div className="profil__body">
                    <ul>
                      <li>Atelier du Sartes in Paris</li>
                      <li>2x Top Style Designer of the Year</li>
                      <li>1x Czech Grand Design</li>
                      <li>Delor luxury tailoring</li>
                      <li>Chia Collection for the Mooyyy</li>
                      <li>Lainfini project</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 profil__slogan" data-reveal>
                <span className="bq">The purpose of art is washing the dust of daily life off our souls.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="profil-gallery">
          <div className="container-fluid" data-reveal>
            <div className="row">
              <div className="col-12 profil-gallery__slider" ref={(c) => { this.profileGallerySlider = c; }}>
                <div className="profil-gallery__item" style={{ backgroundImage: 'url("' + this.img1Img + '")' }} />
                <div className="profil-gallery__item" style={{ backgroundImage: 'url("' + this.img2Img + '")' }} />
                <div className="profil-gallery__item" style={{ backgroundImage: 'url("' + this.img1Img + '")' }} />
                <div className="profil-gallery__item" style={{ backgroundImage: 'url("' + this.img2Img + '")' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-page" data-reveal>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1">
                <div className="wsw">
                  <h1>this is my true story headline</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.<br />
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.<br />
                  </p>
                  <h2>Heading second level</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.<br />
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.<br />
                  </p>
                  <h3>Heading 3th level</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.<br />
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.<br />
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.<br />
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.<br />
                  </p>
                  <div className="row">
                    <div className="col-12 col-sm-4">
                      <ul className="text-center d-block">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li><a href="">Visit link</a></li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-4">
                      <ul className="text-center d-block">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li><a href="">Visit link</a></li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-4">
                      <ul className="text-center d-block">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li><a href="">Visit link</a></li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-4">
                      <img src="//placehold.it/480x460" className="block-center" alt="placeholder" />
                    </div>
                    <div className="col-12 col-sm-4">
                      <img src="//placehold.it/480x460" className="block-center" alt="placeholder" />
                    </div>
                    <div className="col-12 col-sm-4">
                      <img src="//placehold.it/480x460" className="block-center" alt="placeholder" />
                    </div>
                  </div>
                  <h2>selected works</h2>
                  <div className="row">
                    <div className="col-12 col-sm-4">
                      <img src={this.wswImg1Img} alt="" />
                    </div>
                    <div className="col-12 col-sm-4">
                      <img src={this.wswImg2Img} alt="" />
                    </div>
                    <div className="col-12 col-sm-4">
                      <img src={this.wswImg3Img} alt="" />
                    </div>
                    <div className="col-12 col-sm-4">
                      <img src={this.wswImg4Img} alt="" />
                    </div>
                    <div className="col-12 col-sm-4">
                      <img src={this.wswImg3Img} alt="" />
                    </div>
                    <div className="col-12 col-sm-4">
                      <img src={this.wswImg1Img} alt="" />
                    </div>
                  </div>
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
