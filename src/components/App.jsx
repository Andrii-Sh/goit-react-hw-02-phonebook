import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    // name: '',
  };

  addContact = ({ name }) => {
    const contact = {
      name,
      id: nanoid(),
    };

    this.setState(prevstate => ({
      contacts: [contact, ...prevstate.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} />
        React homework template
      </div>
    );
  }
}

// handleChange = evt => {
//   this.setState({ name: evt.target.value });
// };

// handleSubmit = evt => {
//   evt.preventDefault();
//   console.log(this.state.name);
//   this.props.onSubmit({ ...this.state });
//   addContact();
//   this.reset();
// };

// reset = () => {
//   this.setState({ name: '' });
// };

// name={name}
// handleChange={this.handleChange}
// handleSubmit={this.handleSubmit}
