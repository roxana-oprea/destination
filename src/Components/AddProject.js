import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-type';
import {Container, Row, Col, Form, FormGroup, Label, Button} from 'reactstrap';


class AddProject extends Component {
  static defaultProps = {
    categories: ['Asia', 'Middle East', 'Europe']
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.refs.title.value === '') {
      alert('Title is required')
    } else {
      this.props.addProject({
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      });
      this.refs.title.value = '';
    }
  };

  render() {
    let categoryOptions = this.props.categories.map(category => {
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

AddProject.propTypes =
  {
    categories: PropTypes.array,
    addProject: PropTypes.func
  };


export default AddProject;
