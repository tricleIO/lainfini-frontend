import React from 'react';

import Heading from 'components/Heading';

import Visual from 'components/Visual';
import Peoples from 'components/Peoples';
import SocialNav from 'components/SocialNav';


export default class Studio extends React.Component {

  constructor(props) {
    super(props);

    this.studioBgImg = require('./img/studio-bg.jpg');
    this.studioBackgroundImg = require('./img/studio-background.jpg');
    this.mirkaImg = require('./img/mirka.jpg');
    this.handImg = require('./img/hand.jpg');
    this.paintImg = require('./img/paint.jpg');
    this.silksImg = require('./img/silks.jpg');
  }

  render() {
    return (
      <div>
        <Visual bg={this.studioBgImg} title="The Studio" />

        <div className="meetbox">
          <div className="container">
            <div className="row">
              <div className="col-5 meetbox__image">
                <img src={this.studioBackgroundImg} className="img-fluid" alt="" data-reveal />
              </div>
              <div className="col-12 col-sm-4 offset-sm-1 meetbox__text" data-reveal>
                <span className="meetbox__title">
                  The studio lainfini
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                </p>
              </div>
              <div className="col-12 text-center">
                <Heading mod subtitle="design is our passion" title="scarves as a matter of art" type="h3" />
              </div>
              <div className="col-12 col-sm-6 col-md-5  meetbox__text text-right" data-reveal>
                <span className="meetbox__title">The studio lainfini</span>
                <span className="meetbox__subtitle d-block">Fashion Designer &amp; Head of LAINFINI STUDIO</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-5 offset-md-1 meetbox__button" data-reveal>
                <img src={this.mirkaImg} className="img-fluid" alt="" />
                <a href="" className="btn">meet mirka</a>
              </div>
            </div>
          </div>
        </div>

        <section className="single-box">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <Heading subtitle="unique process of design and production" title="Every piece is the original art" type="h3" />
              </div>
              <div className="col-12 col-sm-6 align-middle">
                <img src={this.studioBackgroundImg} className="img-fluid" alt="peace" data-reveal />
              </div>
              <div className="col-12 col-sm-6 align-middle">
                <div className="single-box__text" data-reveal>
                  <span className="single-box__title d-inline-block">Currated collections</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                  gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                  accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
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
                <span className="boxes__title">creation techniques</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
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
                <span className="boxes__title">unique materials comfortable to wear</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
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
