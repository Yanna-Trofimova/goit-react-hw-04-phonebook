import React, { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number:'',
    }

    handleChangeName = e => {
        this.setState({ name: e.currentTarget.value });
    };

    handleChangeNumber = e => { 
        this.setState({ number: e.currentTarget.value });
    };



    handelSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);

        this.setState({ name: '', number: '' });
        
    };
    
    render() {
        return (
        <form className={css.formOfContact} onSubmit={this.handelSubmit}>
                <p className={css.textName}>Name</p>
                <input
                    className={css.inputName}
                    value={this.state.name} 
                    onChange={this.handleChangeName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <p className={css.textNumber}>Number</p>
                <input
                    className={css.inputNumber}
                    value={this.state.number} 
                    onChange={this.handleChangeNumber}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />


                 <button className={css.btnContact} type="submit">
                    Add contact
                 </button>
            </form>
        );
    }
}


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}



export default ContactForm