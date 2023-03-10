import { NavLink } from "react-router-dom";

import styles from "./navbarAuth.module.scss";

const NavbarAuth = () => {
    return (<div className={styles.container}>
                <NavLink to="/register" className={styles.link}>Register</NavLink> 
                <NavLink to="/login" className={styles.link}>Login</NavLink>
            </div>)
}

export default NavbarAuth;