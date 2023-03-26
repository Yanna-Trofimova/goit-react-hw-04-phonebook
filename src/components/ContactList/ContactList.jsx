import React from "react";
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
    
    <ul className={css.contactList}>
        {contacts.map(({ id,name, number }) => (
            <li key={id} className={css.contactItem}>

                
                <p className="TodoList__text"><span className={css.contactName} >{name}</span> :  { number}</p>
                <button 
                    type="button"
                    className={css.contactBtn}
                    onClick={() => onDeleteContact(id)}
                >
                    Удалить
                </button>

            </li>
        ))}
    </ul>
)

ContactList.propTypes = {
    contacts:PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired})),
    onDeleteContact: PropTypes.func.isRequired ,
}

 export default ContactList