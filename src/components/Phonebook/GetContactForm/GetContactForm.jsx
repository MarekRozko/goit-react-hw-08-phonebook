import { useState } from 'react';

import initialState from './initialState';
import styles from  "../GetContactForm/getContactForm.module.scss";

const GetContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({...initialState})
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return {...prevState, [name]: value}
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state});
    setState({ ...initialState });
  }


  const { name, number } = state;

  return (
      <form  onSubmit={handleSubmit} className={styles.wrapper}>
        <label className={styles.labelForm}>
          Name{' '}
          <input className={styles.field}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.labelFormTel}>
          Phone{' '}
          <input className={styles.field}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={styles.buttonAdd} type="submit">Add contact</button>
      </form>
    );
}


export default GetContactForm;


