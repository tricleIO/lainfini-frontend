import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';

import config from 'config';

import {
  makeSelectCarouselImages,
  makeSelectWorkImages,
} from './selectors';

import {
  loadCarouselImages,
  loadWorkImages,
} from './actions';

import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2';

import SocialNav from 'components/SocialNav';

class Profile extends React.Component {

  static propTypes = {
    carouselImages: React.PropTypes.object,
    workImages: React.PropTypes.object,
    loadCarouselImages: React.PropTypes.func,
    loadWorkImages: React.PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.mirkaImg = require('./img/mirka.png');
    this.img1Img = require('./img/img-1.jpg');
    this.img2Img = require('./img/img-2.jpg');
  }

  componentWillMount() {
    this.props.loadCarouselImages();
    this.props.loadWorkImages();
  }

  componentDidUpdate(prevProps) {
    if (!_(prevProps.carouselImages).isObject() && _(this.props.carouselImages).isObject()) {
      $(this.profileGallerySlider).slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        infinite: true,
        speed: 500,
        centerMode: false,
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
  }

  render() {
    const { workImages, carouselImages } = this.props;

    return (
      <div>
        <Helmet title="Profile" />
        <section className="profil">
          <div className="profil__image" style={{ backgroundImage: 'url("' + this.mirkaImg + '")' }} data-reveal />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6" data-reveal>
                <div className="profil__info">
                  <div className="profil__head" data-name="Mirka">
                    <div className="profil__head__subtitle">
                      <p>Profile</p>
                    </div>
                    <div className="profil__head__title">
                      <h1>Mirka Talavašková</h1>
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

        {_(carouselImages).isObject() &&
          <div className="profil-gallery">
            <div className="container-fluid" data-reveal>
              <div className="row">
                <div className="col-12 profil-gallery__slider" ref={(c) => { this.profileGallerySlider = c; }}>
                  {carouselImages.files.map((file, index) =>
                    <div className="profil-gallery__item" style={{ backgroundImage: 'url("' + config.apiUrl + 'files/' + file.fileIndex + '.jpg")' }} key={index} />
                  )}
                </div>
              </div>
            </div>
          </div>
        }

        <div className="text-page" data-reveal>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1">
                <div className="wsw">
                  <h1>“I prefer moderate elegance in a luxury design!”</h1>
                  <p>
                    Mirka has wanted to be a fashion designer since she was 4-years-old. Inspired mainly by her mother, she grew up in a creative environment. When she won her first competition at the University level, she realized that clothing design can be taken very seriously and that she could do it for living. Graduating from the Fashion Design at the famous Academy of Arts, Architecture and Design (UMPRUM) in Prague, she gained priceless experience at École Supérieure des Arts Appliqués Duperré in Paris.<br />
                  </p>
                  <p>
                    While training at Atelier du Sartel, Mirka was able to take a peek under the lid of the fashion capital moving her to work at the European level. She achieved several awards, including Top Styl Designer and was nominated for the Czech Grand Design award.<br />
                  </p>
                  <p>
                    Mirka’s attitude is to create each piece of clothing that allows its owner to combine it with their own wardrobe and all kinds of accessories – shoes, handbags, and jewelry. Her aim is to give a woman freedom in decision-making, certainty with high quality clothing that emphasizes the client’s personality. She is one of the founders of the Atelier LAINFINI project.<br />
                  </p>

                  <h2>selected works</h2>
                  {_(workImages).isObject() &&
                    <div className="row">
                      {workImages.files.map((file, index) =>
                        <div className="col-12 col-sm-4" key={index}>
                          <a href={config.apiUrl + 'files/' + file.fileIndex + '.jpg'} data-lightbox="profile-lightbox"><img src={config.apiUrl + 'files/' + file.fileIndex + '.jpg'} alt="" /></a>
                        </div>
                      )}
                    </div>
                  }
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

const mapStateToProps = createStructuredSelector({
  workImages: makeSelectWorkImages(),
  carouselImages: makeSelectCarouselImages(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadCarouselImages: () => dispatch(loadCarouselImages()),
    loadWorkImages: () => dispatch(loadWorkImages()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
