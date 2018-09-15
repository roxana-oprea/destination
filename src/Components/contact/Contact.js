import React, {Component} from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Contact.css';

const TitleMessage = () => {
  return (
    <div>
      <span><h3>Send a </h3></span>
      <h1>Message</h1>
      <p>Do you have anything in your mind to tell us?
        Please don't hesitate to get in touch to us via our contact form.
      </p>
    </div>
  )
};

const FormItem = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="name"/>
          <Input type="name" name="name" id="name" placeholder="Your name*" required/>
        </FormGroup>
        <FormGroup>
          <Label for="email"/>
          <Input type="email" name="email" id="email" placeholder="Your email*" required/>
        </FormGroup>
        <FormGroup>
          <Label for="phone"/>
          <Input type="tel" name="phone" id="phone" placeholder="Your phone*" required/>
        </FormGroup>
        <FormGroup>
          <Label for="textArea"/>
          <Input type="textarea" name="text" id="textArea" placeholder="Your message*" required/>
        </FormGroup>
        <div className="d-flex justify-content-center p-5">
          <Button>Submit</Button>
        </div>
      </Form>
    </div>
  )
};

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col sm="3">
            </Col>
            <Col sm="6">
              <TitleMessage/>
            </Col>
            <Col sm="3">
            </Col>
          </Row>
          <Row>
            <Col sm="3">
            </Col>
            <Col sm="6">
              <FormItem/>
            </Col>
            <Col sm="3">
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Contact;


