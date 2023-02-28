import React, {FC, lazy} from "react";
import {Provider} from "react-redux";
import store from "./store/store";
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavigationScroll from "./layouts/navigationScroll/navigationScroll";
import theme from "./themes/theme";

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

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme()}>
                <CssBaseline/>
                <Provider store={store}>
                    {/*<NavigationScroll/>*/}
                    {/*<RouterProvider router={router}/>*/}
                    <RouterProvider router={router}/>
                    {/*</NavigationScroll>*/}
                </Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App;