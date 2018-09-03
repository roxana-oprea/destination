import React, {Component} from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Button} from 'reactstrap';
import uuid from 'uuid';
import PropTypes from 'prop-types';


class AddDestination extends Component {
  static defaultProps = {
    categories: ['Asia', 'Middle East', 'Europe']
  };

  static propTypes = {
    categories: PropTypes.array,
    addDestination: PropTypes.func
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.refs.title.value === '') {
      alert('Country is required');
    } else {
      this.props.addDestination({
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      });
      this.refs.title.value = '';
    }
  };

  render() {
    const categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3 className="text-center p-5">Add Destination</h3>
        <Container>
          <Row>
            <Col sm="4">
            </Col>
            <Col sm="4">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="title">Country</Label><br/>
                  <input type="text" ref="title" className="form-control"/>
                </FormGroup>
                <FormGroup>
                  <Label for="category">Category</Label><br/>
                  <select ref="category" className="form-control">
                    {categoryOptions}
                  </select>
                </FormGroup>
                <br/>
                <Button type="submit" className="submit-button" block>SUBMIT</Button>
                <br/>
              </Form>
            </Col>
            <Col sm="4">
            </Col>
          </Row>
          <hr/>
        </Container>
      </div>
    );
  }
}

export default AddDestination;
