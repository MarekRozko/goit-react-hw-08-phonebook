import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux/Auth/auth-selectors";
import { Loader } from "components/Loader/Loader";

const PrivateRoute = () => {
    const { isLogin, token } = useSelector(getAuth);
    if (!isLogin && token) {
        return <Loader />;
    }
    if (!isLogin && !token) {
        return<Navigate to="/login"/>
    }
    return <Outlet/>
}

export default PrivateRoute;