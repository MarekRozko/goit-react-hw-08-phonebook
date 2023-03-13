
import styles from "../FilterContact/filterContact.module.scss";

const FilterContact = ({ handleChange, value}) => {
  return (
    <label className={styles.labelFilter}>
      Find contacts by name{' '}
      <input className={styles.inputFilter} value={value} name="filter" onChange={handleChange} placeholder="Filter contacts"/>
    </label>
  );
};

export default FilterContact;


