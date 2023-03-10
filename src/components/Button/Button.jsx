import style from "./button.module.scss";

const Button = ({ children, type= "submit" }) => {
    return <button type={type} className={style.button}>{ children}</button>
}
export default Button;