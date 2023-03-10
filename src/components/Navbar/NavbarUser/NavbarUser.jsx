import { useSelector } from "react-redux";
import { getUser } from "components/redux/Auth/auth-selectors";
import styles from "./navbar-user.module.scss";
const NavbarUser = () => {
    const { name } = useSelector(getUser);
    return (
        <div className={styles.container}>
           User: {name}    <button className={styles.btn}>Logout</button>
        </div>
    )
}

export default NavbarUser;