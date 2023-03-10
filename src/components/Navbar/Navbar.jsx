import { useSelector } from "react-redux";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";
import { isUserLogin } from "components/redux/Auth/auth-selectors";
const Navbar = () => {
    const isLogin = useSelector(isUserLogin)
    return (
        <div>
            {!isLogin && <NavbarAuth />}
            {isLogin && <NavbarUser/>}
        </div>
    )
}

export default Navbar;