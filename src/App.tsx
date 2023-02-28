import React, {FC, lazy} from "react";
import {Provider} from "react-redux";
import store from "./store/store";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import NavigationScroll from "./layouts/navigationScroll/navigationScroll";

const Login = lazy(() => import('./pages/auth/login/login'))

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/registration",
        element: <Login/>,
    },
    {
        path: "/dashboard",
        element: <Login/>,
    }
]);

const App: FC = () => {
    const theme = createTheme({});

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
                {/*<NavigationScroll/>*/}
                {/*<RouterProvider router={router}/>*/}
                <RouterProvider router={router}/>
                {/*</NavigationScroll>*/}
            </Provider>
        </ThemeProvider>
    )
}

export default App;