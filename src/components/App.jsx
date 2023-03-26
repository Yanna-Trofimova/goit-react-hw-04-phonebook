import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid'


export class App extends Component {
  state = {
  contacts: [ ],
  filter: '',
}

  
  
  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts) {

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  componentDidMount() {

    const contacts = localStorage.getItem('contacts');
  

    const parselContacts = JSON.parse(contacts);

    if (parselContacts) {
      this.setState({ contacts: parselContacts });
    }

  }
  


  addContact = ({ name, number })  => {
    // console.log(name);
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.find(cont => contact.name.toLowerCase() === cont.name.toLowerCase(),) ?
      alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = contactId => { 
    // console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId) 
    }))

  };

 changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
 }
  
  
  getVisibleTodos = () => {
    const { filter, contacts } = this.state;

    const normalaziedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalaziedFilter),);
  }

  
  render() {
    const {  filter } = this.state;
    
    const visibleTodos = this.getVisibleTodos();
    
    return (
    <div>
      <h1 >Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>

      <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleTodos} onDeleteContact={this.deleteContact}/>
    </div>
  );
};
  }
  

  export default App