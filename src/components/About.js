import React from 'react';
import './About.css';
import collectionImage from '../images/collection.png';

export default function About() {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 about-image">
            <img src={collectionImage} className="img-fluid" alt="Collection" />
          </div>
          <div className="col-md-6 panel-content">
            <h3 className="about-title">ABOUT<br />
              <span>TON 2048</span>
            </h3>
            <p className="about-content">Ton 2048 is not just another clicker game on Telegram—it's your gateway to endless fun and earnings! </p>
            <p className="about-content">Slide and combine tiles to reach higher and higher numbers with no limits, all while stacking up rewards. It’s easy to learn, challenging to master, and even more thrilling when you’re earning as you play.</p>
            {/* <div className="row justify-content-around">
              <Card title="Sync & track" value="93%" />
              <Card title="Up value" value="2.5X" />
              <Card title="Of members" value="50K+" />
            </div> */}
          </div>

          <div className="row justify-content-center boxs">
            <div className="col-md-4">
              <div className="box">
                <i class="bi bi-dice-4-fill"></i>
                <h2>400K+</h2>
                <p>Total rounds</p>
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-circle"></i>
                <h2>2M+</h2>
                <p>Total 2048</p>
              </div>
            </div> */}
            <div className="col-md-4">
              <div className="box">
                <i className="bi bi-person-hearts"></i>
                <h2>1860+</h2>
                <p>Daily Players</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <i class="bi bi-person-fill-check"></i>
                <h2>5M+</h2>
                <p>Channel Subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ title, value }) => {
  return (
    <div className="col-md-3 about-card">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};


