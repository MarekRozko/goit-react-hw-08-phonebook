
import styles from "../ContactList/contactList.module.scss";
import PropTypes from 'prop-types';

const ContactsList = ({removeContact, items}) => {

    const contacts = items.map(({ id, name, phone}) => <li key={id} className={styles.itemContact}>	
📱 {name}: {phone}
        <button onClick={() => removeContact(id)} type="button" className={styles.buttonItem}>Delete</button></li>);

    return (
        <ul>

          { contacts}
        </ul>
    )

}



  

export default ContactsList;
ContactsList.defaultProps = {
    items: []
}

ContactsList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        phone:  PropTypes.string.isRequired,
    }))
}