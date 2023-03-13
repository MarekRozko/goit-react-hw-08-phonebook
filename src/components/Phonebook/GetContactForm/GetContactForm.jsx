import { useState } from 'react';

import inititalState from './initialState';
import styles from  "../GetContactForm/getContactForm.module.scss";

const GetContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...inititalState })
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return {...prevState, [name]: value}
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state});
    setState({ ...inititalState });
  }


  const { name, phone } = state;

  return (
      <form  onSubmit={handleSubmit}>
        <label className={styles.labelForm}>
          Name{' '}
          <input className={styles.imputForm}
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
          <input className={styles.imputFormTel}
            type="tel"
            name="phone"
            value={phone}
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

