import React, {Component} from 'react';
import PropTypes from "prop-type";


class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  };

  render() {
    return (
      <tr>
        <td className="Project">
          <strong>{this.props.project.title}</strong>
        </td>
        <td>{this.props.project.category}</td>
        <td>
          <button className="btn btn-sm submit-button" onClick={this.deleteProject.bind(this, this.props.project.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}


ProjectItem.propTypes =
  {
    project: PropTypes.object,
    onDelete: PropTypes.func
  };

export default ProjectItem;
