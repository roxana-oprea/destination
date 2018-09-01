import React, {Component} from 'react';
import PropTypes from "prop-type";


class DestinationItem extends Component {
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
                  onClick={this.deleteDestination.bind(this, this.props.destination.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}


DestinationItem.propTypes =
  {
    destination: PropTypes.object,
    onDelete: PropTypes.func
  };

export default DestinationItem;
