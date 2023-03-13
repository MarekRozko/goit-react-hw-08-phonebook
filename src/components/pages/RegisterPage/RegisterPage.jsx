import { useDispatch} from "react-redux";
import RegisterForm from "components/RegisrerForm/RegisterForm";
import { signup } from "components/redux/Auth/auth-operations";
import styles from "./registerPage.module.scss";

const RegisterPage = () => {

    const dispatch = useDispatch();

    const handleSignup = (data) => {
        dispatch(signup(data))
    }

    return (
        <div>
            <h1 className={styles.label}>Registration</h1>
            <RegisterForm onSubmit={handleSignup}/>
        </div>
    )
}

export default RegisterPage;