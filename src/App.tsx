import React, {FC, lazy, Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import theme from "./themes/theme";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import {checkAuth} from "./store/slices/auth";
import Loading from "./components/loading/loading";
import AuthRouter from "./pages/auth/authRouter";

const Dashboard = lazy(() => import('./pages/dashboard/dashboard'));

const router = createBrowserRouter([
        {
            path: '/auth',
            children: AuthRouter
        },
        {
            path: "/dashboard",
            element: <ProtectedRoute><Dashboard/></ProtectedRoute>,
        },
        {
            path: '*',
            element: <Navigate to="/dashboard"/>
        }
    ])
;

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [])

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme()}>
                <CssBaseline/>
                {/*<NavigationScroll/>*/}
                <Suspense fallback={<Loading/>}>
                    <RouterProvider router={router}/>
                </Suspense>
                {/*</NavigationScroll>*/}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App;