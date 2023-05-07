import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  handleDelBtnClick = () => {
    const { id, onDeleteContact } = this.props;
    onDeleteContact(id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <>
        <p>
          {name}: {number}
        </p>
        <button type="submit" onClick={this.handleDelBtnClick}>
          Delete
        </button>
      </>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
