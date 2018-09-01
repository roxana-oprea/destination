import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-type';
import {Container, Row, Col, Table} from 'reactstrap';


class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  };

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project}/>
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
                {projectItems}
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

Projects.propTypes =
  {
    projects: PropTypes.array,
    onDelete: PropTypes.func
  };

export default Projects;
