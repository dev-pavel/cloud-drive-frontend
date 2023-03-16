import React, {FC, Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import theme from "./themes/theme";
import {checkAuth} from "./store/slices/auth";
import Loading from "./components/loading/loading";
import AuthRouter from "./pages/auth/authRouter";
import MainRouter from "./pages/main/mainRouter";

const router = createBrowserRouter([
        {
            path: '/auth',
            children: AuthRouter
        },
        {
            path: "/main",
            children: MainRouter
        },
        {
            path: '*',
            element: <Navigate to="/main"/>
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