import TextField from "components/TextField/TextField";
import Button from "components/Button/Button";
import useForm from "hooks/useForm";
import fields from "./fields";
import initialState from "./initialState";
import styles from "./loginForm.module.scss"

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { email, password } = state;
    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <TextField value={email} handleChange={ handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button>Login</Button>
        </form>
    )
}
export default LoginForm;