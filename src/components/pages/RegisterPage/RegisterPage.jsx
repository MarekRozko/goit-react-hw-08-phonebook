import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import RegisterForm from "components/RegisrerForm/RegisterForm";
import { signup } from "components/redux/Auth/auth-operations";
import { isUserLogin } from "components/redux/Auth/auth-selectors";
import styles from "./registerPage.module.scss";

const RegisterPage = () => {
    const isLogin = useSelector(isUserLogin)
    const dispatch = useDispatch();

    const handleSignup = (data) => {
        dispatch(signup(data))
    }
    if (isLogin) {
        return <Navigate to="/contacts" />
    }
    return (
        <div>
            <h1 className={styles.label}>Registration</h1>
            <RegisterForm onSubmit={handleSignup}/>
        </div>
    )
}

export default RegisterPage;