
import styles from "../ContactList/contactList.module.scss";


const ContactsList = ({removeContact, items}) => {

    const contacts = items.map(({ id, name, phone}) => <li key={id} className={styles.itemContact}>	{name}: {phone}
        <button onClick={() => removeContact(id)} type="button" className={styles.buttonItem}>Delete</button></li>);

    return (
        <ul>

          { contacts}
        </ul>
    )

}



  

export default ContactsList;
