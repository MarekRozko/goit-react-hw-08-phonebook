import { lazy, Suspense } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../components/pages/LoginPage/LoginPage"));
const Phonebook = lazy(() => import("../components/Phonebook/Phonebook"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route index element={<HomePage />} />
                <Route element={<PublicRoute/>}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/contacts" element={<Phonebook />} />
                </Route>
            </Routes>
             <Outlet />
        </Suspense>

    )
}

export default UserRoutes;