import React, {Component} from 'react';
import DestinationItem from './DestinationItem';
import PropTypes from 'prop-type';
import {Container, Row, Col, Table} from 'reactstrap';


class Destination extends Component {
  deleteDestination(id) {
    this.props.onDelete(id);
  };

  render() {
    let destinationItems;
    if (this.props.destinations) {
      destinationItems = this.props.destinations.map(destination => {
        return (
          <DestinationItem onDelete={this.deleteDestination.bind(this)} key={destination.id} destination={destination}/>
        )
      })
    }
    return (
      <div>
        <h3 className="text-center p-5">Latest Destinations</h3>
        <Container>
          <Row>
            <Col sm="1">
            </Col>
            <Col sm="10">
              <Table bordered>
                <thead>
                <tr>
                  <th>Country</th>
                  <th>Category</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {destinationItems}
                </tbody>
              </Table>
            </Col>
            <Col sm="1">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Destination.propTypes =
  {
    destinations: PropTypes.array,
    onDelete: PropTypes.func
  };

export default Destination;
