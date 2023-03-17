
import styles from "../ContactList/contactList.module.scss";
import PropTypes from 'prop-types';

const ContactsList = ({removeContact, items}) => {

    const contacts = items.map(({ id, name, number}) => <li key={id} className={styles.itemContact}>	
         {name} : {number}
        <button onClick={() => removeContact(id)} type="button" className={styles.buttonItem}>Delete</button></li>);

    return (
        <ul>

          { contacts}
        </ul>
    )

}



  
ContactsList.defaultProps = {
    items: []
}
export default ContactsList;


ContactsList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        number:  PropTypes.string.isRequired,
    }))
}
