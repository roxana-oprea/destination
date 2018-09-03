import React, {Component} from 'react';
import PropTypes from "prop-types";


class DestinationItem extends Component {
  static propTypes = {
    destination: PropTypes.object,
    onDelete: PropTypes.func
  };

  deleteDestination(id) {
    this.props.onDelete(id);
  };

  render() {
    return (
      <tr>
        <td className="Destination">
          <strong>{this.props.destination.title}</strong>
        </td>
        <td>{this.props.destination.category}</td>
        <td>
          <button className="btn btn-sm submit-button"
                  onClick={() => this.deleteDestination(this.props.destination.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default DestinationItem;
