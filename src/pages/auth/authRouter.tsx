import {lazy} from "react";
import {Navigate} from "react-router-dom";

const Login = lazy(() => import('./pages/login'));
const Registration = lazy(() => import('./pages/registration'));

const AuthRouter = [
    {
        path: 'login',
        element: <Login/>,
    },
    {
        path: "registration",
        element: <Registration/>,
    },
    {
        path: '*',
        element: <Navigate to="/auth/login"/>
    }
];

export default AuthRouter;