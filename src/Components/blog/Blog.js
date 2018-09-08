import React, {Component} from 'react';
import {Container, Row, Col, Card, CardTitle, CardImg, CardText} from 'reactstrap';
import './Blog.css';
import image1 from '../images/img-4.jpg';
import image2 from '../images/img-5.jpg';
import image3 from '../images/img-6.jpg';


const CardContent = () => {
  return (
    <div>
      <Row>
        <Col sm="4">
          <Card body className="card-bg">
            <CardImg top width="100%" src={image1}/>
            <CardTitle>Our top destinations</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardText>
              <small>BY SUZI September 13, 2018 - 4 COMMENTS</small>
            </CardText>
            <hr/>
            <a href="" className="read-more">Read More...</a>
          </Card>
        </Col>
        <Col sm="4">
          <Card body className="card-bg">
            <CardImg top width="100%" src={image2}/>
            <CardTitle>Hotel Room</CardTitle>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardText>
              <small>BY BOBBY August 22, 2018 - 10 COMMENTS</small>
            </CardText>
            <hr/>
            <a href="" className="read-more">Read More...</a>
          </Card>
        </Col>
        <Col sm="4">
          <Card body className="card-bg">
            <CardImg top width="100%" src={image3}/>
            <CardTitle>Hotel Room</CardTitle>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardText>
              <small>BY CARL JULY 01, 2018 3 COMMENTS</small>
            </CardText>
            <hr/>
            <a href="" className="read-more">Read More...</a>
          </Card>
        </Col>
      </Row>
    </div>
  )
};

const MainContent = () => {
  return (
    <div className="p-5">
      <CardContent/>
    </div>
  )
};


class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col>
              <MainContent/>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Blog;
