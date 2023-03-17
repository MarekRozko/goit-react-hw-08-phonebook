import TextField from "components/TextField/TextField";
import Button from "components/Button/Button";
import useForm from "hooks/useForm";
import fields from "./fields";
import initialState from "./initialState";
import styles from "./registerForm.module.scss"

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { name, email, password } = state;
    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <TextField value={name} handleChange={ handleChange} {...fields.name} />
            <TextField value={email} handleChange={ handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button>Register</Button>
        </form>
    )
}
export default RegisterForm;