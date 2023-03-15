import { useSelector, useDispatch } from "react-redux";
import { logout } from "components/redux/Auth/auth-operations";
import styles from "./navbar-user.module.scss";
import { getUser } from "components/redux/Auth/auth-selectors";

export const UserMenu = () => {
  const {email} = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
          {email}
          <button className={styles.btn} onClick={handleLogout}>
            Logout
          </button>
    </div>
  );
};


