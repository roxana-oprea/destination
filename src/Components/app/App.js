import React, {Component} from 'react';
import HeaderItem from './Header';
import FooterItem from './Footer';
import {Container, Row, Col} from 'reactstrap';
import './App.css';
import routes from '../../routes';

class App extends Component {
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
        <Row>
          <Col>
            <main>{routes}</main>
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


