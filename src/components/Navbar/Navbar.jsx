import { useSelector } from "react-redux";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import {UserMenu }from "./NavbarUser/UserMenu";
import { isUserLogin } from "redux/Auth/auth-selectors";
const Navbar = () => {
    const isLogin = useSelector(isUserLogin)
    return (
        <div>
            {!isLogin && <NavbarAuth />}
            {isLogin && <UserMenu/>}
        </div>
    )
}

export default Navbar;