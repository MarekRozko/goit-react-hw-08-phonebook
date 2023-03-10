import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../components/pages/LoginPage/LoginPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Suspense>

    )
}

export default UserRoutes;