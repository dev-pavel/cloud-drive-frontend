import {lazy} from "react";
import {Navigate, RouteObject} from "react-router-dom";
import MainLayout from "./layout/layout";

const Main = lazy(() => import('./pages/main'));

const MainRouter: RouteObject[] = [
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <Main/>
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/main"/>
    }
];

export default MainRouter;