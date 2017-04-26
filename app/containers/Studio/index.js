import React from 'react';
import Helmet from 'react-helmet';

import Heading from 'components/Heading';

import Visual from 'components/Visual';
import Peoples from 'components/Peoples';
import SocialNav from 'components/SocialNav';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Link } from 'react-router';

export default class Studio extends React.Component {

  constructor(props) {
    super(props);

    this.studioBgImg = require('./img/studio-bg.jpg');
    this.studioBackgroundImg = require('./img/studio-background.png');
    this.original4sImg = require('./img/original_4s.png');
    this.mirkaImg = require('./img/mirka.jpg');
    this.handImg = require('./img/hand.png');
    this.paintImg = require('./img/paint.png');
    this.silksImg = require('./img/silks.png');
  }

  render() {
    return (
      <div>
        <Helmet title="Atelier" />
        <Visual bg={this.studioBgImg} title={<FormattedMessage {...messages.pageTitle} />} />

        <div className="meetbox">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 meetbox__image">
                <img src={this.studioBackgroundImg} className="img-fluid" alt="" data-reveal />
              </div>
              <div className="col-12 col-sm-5 meetbox__text" data-reveal>
                <span className="meetbox__title">
                  Atelier Lainfini
                </span>
                <p>
                  Atelier LAINFINI presents gorgeous luxury scarves and shawls made by skilled Czech designers, offering them to the world. Our ambition is to spread the culture of creativity and liberty to showcase the beauty in each of us.
                  Atelier LAINFINI scarves come in a small series of no more than few pieces, all limited editon, using the most luxurious materials available for an outstanding quality you can feel in each artisanal garment. In addition, you can learn from their founders about old world technologies and methods used in making stylish clothing and accessories, with an unparalleled quality and design aesthetic. The selection of colors and materials all reflect the paths these designs have walked in their lives. The project was born in the minds of two people – Jaromír Caithaml, Founder, and Mirka Talavašková, the chief designer.
                </p>
              </div>
              <div className="col-12 text-center">
                <Heading mod subtitle="design is our passion" title="The Scarf Is A Piece Of Art" type="h3" />
              </div>
              <div className="col-12 col-sm-6 col-md-5  meetbox__text text-right" data-reveal>
                <span className="meetbox__title">Mirka Talavašková</span>
                <span className="meetbox__subtitle d-block">Fashion Designer And Head of Atelier LAINFINI</span>
                <p className="pb-5">
                  Mirka’s drive is to create pieces of luxury clothing that will allow the wearer to combine it with their own unique wardrobe and a variety of accessories, including bespoke shoes, designer handbags, and fine jewelry is the goal of the line. Her aim is to give a woman freedom in decision making by choosing high quality clothing that emphasizes the client’s personality in every way.
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 offset-md-1 meetbox__button" data-reveal>
                <img src={this.mirkaImg} className="img-fluid" alt="" />
                <Link className="btn" to="/profile">meet mirka</Link>
              </div>
            </div>
          </div>
        </div>

        <section className="single-box">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="pb-5">
                  <Heading subtitle="unique process of design and production" title="Every piece is the original art" type="h3" />
                </div>
              </div>
              <div className="col-12 col-sm-6 align-middle">
                <img src={this.original4sImg} className="img-fluid" alt="peace" data-reveal />
              </div>
              <div className="col-12 col-sm-6 align-middle">
                <div className="single-box__text" data-reveal>
                  <span className="single-box__title d-inline-block">Currated collections</span>
                  <p>
                    A whole team of designers with very distinctive styles work for Atelier LAINFINI. Under the supervision of Mirka Talavašková, the chief designer and curator of the first designs that transcend ordinary accesories. You will be surprised and delighted by the creativity and distinctiveness that all of our individual designs present in this limited edition series. No matter whether you love a wild print, natural motifs, or even just traditional shades of cobalt blue, you are sure to find your favorite at Atelier LAINFINI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Peoples />

        <div className="boxes">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <Heading subtitle="the proces of making of" title="original handmade scarves" type="h3" />
              </div>
            </div>
          </div>
          <div className="row boxes__items">
            <div className="boxes__half" data-reveal>
              <div className="boxes__background">
                <img src={this.handImg} alt="design" />
              </div>
            </div>
            <div className="boxes__half boxes--caption" data-reveal>
              <div className="col-12 col-sm-6 text-center boxes__text">
                <p>
                  Everything starts with an idea, pen, and paper. From sketches the drawing, and then taking that to graphic design. When our designers choose the right colors they adjust the draft and then make paper samples. Together with the head designer they are going to decide just the right material and print the first real samples.
                </p>
              </div>
              <div className="col-12 col-sm-6">
                <div className="boxes__background">
                  <img src={this.silksImg} alt="design" />
                </div>
              </div>
            </div>
            <div className="boxes__half boxes--caption" data-reveal>
              <div className="col-sm-12 text-center boxes__text">
                <p>
                  Finally once everything is perfect, we print the series. The final touches are made by the hands of craftswomen who stitch the ends of scarves and shawls by hand and wrap it into gorgeous gift boxes. When the order comes to our clients, it includes a certificate by hand and hope so that you feel all our love, which we put into each package. With love from Prague. Atelier LAINFINI.
                </p>
              </div>
            </div>
            <div className="boxes__half" data-reveal>
              <div className="boxes__background">
                <img src={this.paintImg} alt="design" />
              </div>
            </div>
          </div>
        </div>


        <SocialNav />
      </div>
    );
  }

}
