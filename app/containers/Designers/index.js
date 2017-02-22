import React from 'react';

import Welcome from 'components/Welcome';
import Lookbook from 'components/Lookbook';
import SocialNav from 'components/SocialNav';


export default class Designers extends React.Component {
  render() {
    return (
      <div>
        <Welcome type="h1" bgColor="#f9e5d3" />

        <div className="designers-list">
          <div className="col-12 col-sm-6">
            <div className="designers-list__bg" data-reveal>
              <img src="//placehold.it/1024" className="img-fluid" alt="profil karel" />
              <div className="designers-list__content text-center">
                <span className="d-block">Karel novák</span>
                <a href="" className="btn">see full resume</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="designers-list__bg" data-reveal>
              <img src="//placehold.it/1024" className="img-fluid" alt="profil karel" />
              <div className="designers-list__content text-center">
                <span className="d-block">Karel novák</span>
                <a href="" className="btn">see full resume</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="designers-list__bg" data-reveal>
              <img src="//placehold.it/1024" className="img-fluid" alt="profil karel" />
              <div className="designers-list__content text-center">
                <span className="d-block">Karel novák</span>
                <a href="" className="btn">see full resume</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="designers-list__bg" data-reveal>
              <img src="//placehold.it/1024" className="img-fluid" alt="profil karel" />
              <div className="designers-list__content text-center">
                <span className="d-block">Karel novák</span>
                <a href="" className="btn">see full resume</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="designers-list__bg" data-reveal>
              <img src="//placehold.it/1024" className="img-fluid" alt="profil karel" />
              <div className="designers-list__content text-center">
                <span className="d-block">Karel novák</span>
                <a href="" className="btn">see full resume</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="designers-list__bg" data-reveal>
              <img src="//placehold.it/1024" className="img-fluid" alt="profil karel" />
              <div className="designers-list__content text-center">
                <span className="d-block">Karel novák</span>
                <a href="" className="btn">see full resume</a>
              </div>
            </div>
          </div>
        </div>

        <Lookbook type="h2" />
        <SocialNav />
      </div>
    );
  }
}
