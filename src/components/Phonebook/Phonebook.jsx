import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GetContactForm from "./GetContactForm/GetContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContact from "./FilterContact/FilterContact";
import 'react-toastify/dist/ReactToastify.css';
import { fetchAllContact, fetchAddContact, fetchDeleteContact } from "../../redux/contacts/contact-operations";
import { setFilter } from "../../redux/filter/filter-slice";
import { getFilteredContacts } from "../../redux/contacts/contact-selector";
import { getFilter } from "../../redux/filter/filter-selector";
import { Box, Heading } from 'rebass';
import { ToastContainer} from 'react-toastify';
import styles from "../app.module.scss";

const Phonebook = () => {

    const filteredContacts = useSelector(getFilteredContacts);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchAllContact())
    }, [dispatch])

    const HandleAddContact = ({ name, number }) => {
        dispatch(fetchAddContact({ name, number }));
    }

    const handleDeleteContact = (id) => {
        dispatch(fetchDeleteContact(id));
    }

    const handleFilter = ({ target }) => {
        dispatch(setFilter(target.value))
    }

    const isContacts = Boolean(filteredContacts?.length)

    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to right, #3a6186, #89253e)`,
                color: "white",
                py: [4, 5, 6],
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}
        >
            <Heading as='h1' sx={{color: 'white', textAlign: 'center', mb: 4, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',}}>Phonebook</Heading>
            <Box
                sx={{
                    
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    p: 4,
                    width: ['100%', '80%', '70%', '50%']
                }}
            >
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
            </Box>
        </Box>
    )
}

export default Phonebook;
