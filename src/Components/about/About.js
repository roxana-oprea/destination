import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import './About.css';
import image1 from '../images/img-1.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-3.jpg';


const JunbotronItem = () => {
  return (
    <div className="p-5">
      <h1 className="display-4">Welcome, we can plan your next destination.</h1>
      <p className="lead">At Destinations, our passion is to connect our guests to the very best of our destinations.
        From the beaches of Hawaii and Bermuda to the deserts of the United Arab Emirates or to the heart of London, we
        offer extraordinary places. Add great service, and the result is an unforgettable guest experience.</p>
      <hr className="my-2"/>
      <p>Make Destinations your personal gateway to exploring the world’s most extraordinary places and to having your
        most memorable experiences.
      </p>
    </div>
  )
};

const SectionItem = () => {
  return (
    <div className="cards-items p-5">
      <div className="card-item d-flex flex-column justify-content-center align-items-center">
        <div className="display-4"><strong>200</strong></div>
        <h3 className="title-item">Hotels</h3>
      </div>
      <div className="card-item d-flex flex-column justify-content-center align-items-center">
        <div className="display-4"><strong>250</strong></div>
        <h3 className="title-item">Restaurants</h3>
      </div>
      <div className="card-item d-flex flex-column justify-content-center align-items-center">
        <div className="display-4"><strong>450</strong></div>
        <h3 className="title-item">Destinations</h3>
      </div>
    </div>
  )
};

const MainItem = () => {
  return (
    <div>
      <div className="card-deck p-5">
        <div className="card">
          <img className="card-img-top img-hover" src={image1} alt="Card image cap"/>
        </div>
        <div className="card">
          <img className="card-img-top img-hover" src={image2} alt="Card image cap"/>
        </div>
        <div className="card">
          <img className="card-img-top img-hover" src={image3} alt="Card image cap"/>
        </div>
      </div>
    </div>
  )
};

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col>
              <JunbotronItem/>
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionItem/>
            </Col>
          </Row>
          <Row>
            <Col>
              <MainItem/>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default About;


