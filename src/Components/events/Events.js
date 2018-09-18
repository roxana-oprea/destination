import React, {Component} from 'react';
import {
  Container, Row, CardBody, CardImg, Card, CardText,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import './Events.css';
import image1 from '../images/img-7.jpg';
import image2 from '../images/img-8.jpg';
import image3 from '../images/img-9.jpg';
import image4 from '../images/img-10.jpg';

const items1 = [
  {id: 1, title: 'Pool Party', src: image1, date: '10 September - 2018'},
  {id: 2, title: 'Music Party', src: image2, date: '19 September - 2018'},
];

const items2 = [
  {id: 3, title: 'Wedding J & C', src: image3, date: '25 October - 2018'},
  {id: 4, title: 'BBQ & Beer', src: image4, date: '29 October - 2018'},
];


const CardItem = ({title, src, date}) => {
  return (
    <Card body className="card-bg">
      <CardImg top width="100%" src={src}/>
      <h1 className="p-3 h-2">{title}</h1>
      <CardText className="p-3 date">{date}</CardText>
      <CardBody>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged.
      </CardBody>
      <hr/>
      <a href="" className="read-more">Read More...</a>
    </Card>
  )
};

class CenteredNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };
  }

  toggle = (event) => {
    event.preventDefault();

    const tab = event.currentTarget.getAttribute('data-tab');

    if (this.state.activeTab !== tab) {
      this.setState({activeTab: tab});
    }
  };

  render() {
    return (
      <div>
        <div>
          <Nav className="mb-3 justify-content-center">
            <NavItem>
              <NavLink href="#" data-tab="1" onClick={this.toggle}
                       className={{active: this.state.activeTab === '1'}}>
                <span className="p-4">Happening</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" data-tab="2" onClick={this.toggle}
                       className={{active: this.state.activeTab === '2'}}>
                <span className="p-4">Upcoming</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" data-tab="3" onClick={this.toggle}
                       className={{active: this.state.activeTab === '3'}}>
                <span className="p-4">Expired</span>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Container>
                <Row>
                  {items1.map(({id, title, src, date}) => {
                    return (
                      <Col sm="6" key={id}>
                        <CardItem title={title} src={src} date={date}/>
                      </Col>
                    )
                  })}
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="2">
              <Container>
                <Row>
                  {items2.map(({id, title, src, date}) => {
                    return (
                      <Col sm="6" key={id}>
                        <CardItem title={title} src={src} date={date}/>
                      </Col>
                    )
                  })}
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="3">
              <Container>
                <Row>
                  <Col sm="6">
                    <CardItem/>
                  </Col>
                  <Col sm="6">
                    <CardItem/>
                  </Col>
                </Row>
              </Container>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}


class Events extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <CenteredNav/>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Events;


