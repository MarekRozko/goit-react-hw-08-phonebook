import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/Auth/auth-operations";
import {isUserLogin} from "../../redux/Auth/auth-selectors";
import LoginForm from "../../LoginForm/LoginForm";
import styles from "./loginPage.module.scss";
const LoginPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        dispatch(login(data));
    }

    if(isLogin) {
        return <Navigate to="/contact" />
    }

    return (
        <div>
            <h1 className={styles.label}>Login</h1>
            <LoginForm onSubmit={handleLogin} />
        </div>
    )
}

export default LoginPage;