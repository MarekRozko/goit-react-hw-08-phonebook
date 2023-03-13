import {  useDispatch } from "react-redux";
import LoginForm from "../../LoginForm/LoginForm";
import { login } from "../../redux/Auth/auth-operations";
import styles from "./loginPage.module.scss";
const LoginPage = () => {

    const dispatch = useDispatch();

    const handleLogin = (data) => {
        dispatch(login(data));
    }


    return (
        <div>
            <h1 className={styles.label}>Login</h1>
            <LoginForm onSubmit={handleLogin} />
        </div>
    )
}

export default LoginPage;