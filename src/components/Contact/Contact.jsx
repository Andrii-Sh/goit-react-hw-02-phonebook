import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactInfo, DeleteButton } from './Contact.styled';

export class Contact extends Component {
  handleDelBtnClick = () => {
    const { id, onDeleteContact } = this.props;
    onDeleteContact(id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <>
        <ContactInfo>
          {name}: {number}
        </ContactInfo>
        <DeleteButton type="submit" onClick={this.handleDelBtnClick}>
          Delete
        </DeleteButton>
      </>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
