import React, {Component} from 'react';
import CarouselElement from './Carousel';
import Destination from './Destination';
import AddDestination from './AddDestination';
import uuid from 'uuid';
import {Container, Row, Col} from 'reactstrap';
import '../app/App.css';


class Home extends Component {
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
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;


