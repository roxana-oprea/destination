import React, {Component} from 'react';
import HeaderItem from './Components/Header';
import CarouselElement from './Components/Carousel';
import Destination from './Components/Destination';
import AddDestination from './Components/AddDestination';
import FooterItem from './Components/Footer';
import uuid from 'uuid';
import {Container, Row, Col} from 'reactstrap';
import './App.css';


class App extends Component {
  state = {
    destinations: []
  };

  componentWillMount() {
    this.setState({
      destinations: [
        {
          id: uuid.v4(),
          title: 'Indonesia',
          category: 'Asia'
        },
        {
          id: uuid.v4(),
          title: 'Iran',
          category: 'Middle East'
        },
        {
          id: uuid.v4(),
          title: 'Spain',
          category: 'Europe'
        },
      ]
    })
  }

  handleAddDestination = (destination) => {
    let destinations = [destination, ...this.state.destinations];
    this.setState({destinations});
  };

  handleDeleteDestination = (id) => {
    this.setState({
      destinations: this.state.destinations.filter(item => item.id !== id)
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col>
              <HeaderItem/>
            </Col>
          </Row>
        </Container>
        <CarouselElement/>
        <Row>
          <Col>
            <AddDestination addDestination={this.handleAddDestination}/>
            <Destination destinations={this.state.destinations} onDelete={this.handleDeleteDestination}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <FooterItem/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default App;
