import React, {Component} from 'react';
import HeaderItem from './Components/Header';
import CarouselEx from './Components/Carousel';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }


  componentWillMount() {
    this.setState({
      projects: [
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

  handleAddProject(project) {
    //console.log(project);
    let projects = [project].concat(this.state.projects);
    this.setState({projects});
  };

  handleDeleteProject(id) {
    this.setState({
      projects: this.state.projects.filter(item => item.id !== id)
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
        <CarouselEx/>
        <Row>
          <Col>
            <AddProject addProject={this.handleAddProject.bind(this)}/>
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default App;
