
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GetContactForm from "../GetContactForm/GetContactForm";
import ContactList from "../ContactList/ContactList";
import FilterContact from "../FilterContact/FilterContact";
import 'react-toastify/dist/ReactToastify.css';
import { setFilter } from "../redux/filter/filter-slice";
import { getFilteredContacts } from "../redux/contacts/contact-selector";
import { getFilter } from "../redux/filter/filter-selector";
import styles from "components/app.module.css";
import { ToastContainer} from 'react-toastify';
const Phonebook = () => {

    const filteredContacts = useSelector(getFilteredContacts);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchAllContact())
    }, [dispatch])



    // const HandleAddContact = ({ name, phone }) => {

    //     dispatch(fetchAddContact({ name, phone }));
    // }

    // const handleDeleteContact = (id) => {
    //     dispatch(fetchDeleteContact(id));
    // }
    const handleFilter = ({ target }) => {
        dispatch(setFilter(target.value))
    }


  
    const isContacts = Boolean(filteredContacts?.length)

    return (
            <div className={styles.containerPhonebook}>
                 <h1 className={styles.titlePhone}>Phonebook</h1>
                <div>
                    <div>
                        <GetContactForm onSubmit={HandleAddContact} />
                    </div>
                    <div>
                        <h2 className={styles.titleContact}>Contacts</h2>
                    <FilterContact value={filter} handleChange={handleFilter} />
                        {isContacts && <ContactList removeContact={handleDeleteContact} items={filteredContacts} />}
                    {!isContacts && <p className={styles.addCont}>No any contact! Add new</p>}
                    <ToastContainer/>
                    </div>
                </div>
            </div>
        )
}



export default Phonebook;