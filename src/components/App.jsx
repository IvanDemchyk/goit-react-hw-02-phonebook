import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  onFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  onFilterContacts = () => {
    let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }

    return filterContact;
  };

  onDelete = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => {
      return { ...prevState, contacts: [...filteredContacts] };
    });
  };

  render() {
    return (
      <>
        <ContactForm onSave={this.addContact} contacts={this.state.contacts} />
        <Filter onFilter={this.onFilter} filter={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          filterContacts={this.onFilterContacts}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}
