
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid'

import { useState, useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  });
  const [filter, setFilter] = useState('');



  useEffect(() => {

    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    
  }, [contacts]);
  

  useEffect(() => {
     const contacts = window.localStorage.getItem('contacts');
    const parselContacts = JSON.parse(contacts);

    if (parselContacts) {
      setContacts(parselContacts);
    }

    
  },[]);
  


  const addContact = ( name, number )  => {
    // console.log(name);
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(cont => contact.name.toLowerCase() === cont.name.toLowerCase(),) ?
      alert(`${name} is already in contacts`)
      : setContacts(prevState => 
       [...prevState, contact],
    );
  };

  const deleteContact = contactId => { 
    // console.log(contactId);
    setContacts(prevState => (
       prevState.filter(contact => contact.id !== contactId) 
    ))

  };

 const changeFilter = e => {
    setFilter( e.currentTarget.value );
 }
  
  
  const getVisibleTodos = () => {

    const normalaziedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalaziedFilter),);
  }

  

    
    const visibleTodos = getVisibleTodos();
    
    return (
    <div>
      <h1 >Phonebook</h1>
        <ContactForm onSubmit={addContact}/>

      <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleTodos} onDeleteContact={deleteContact}/>
    </div>
  );
};
  
  

  export default App