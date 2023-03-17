import { lazy, Suspense } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../components/PublicRoute/PublicRoute';
import { Loader } from '../components/Loader/Loader';
const RegisterPage = lazy(() => import("../page/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../page/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../page/ContactsPage/ContactsPage"));
const HomePage = lazy(() => import("../page/HomePage/HomePage"));
const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route index element={<HomePage />} />
                <Route element={<PublicRoute/>}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
            </Routes>
             <Outlet />
        </Suspense>

    )
}

export default UserRoutes;