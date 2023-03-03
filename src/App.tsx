import React, {FC, lazy} from "react";
import {Provider} from "react-redux";
import store from "./store/store";
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import theme from "./themes/theme";

const Login = lazy(() => import('./pages/auth/login'))
const Registration = lazy(() => import('./pages/auth/registration'))

const router = createBrowserRouter([
    {
        path: "/login",
        element: <React.Suspense fallback={<>...</>}><Login/></React.Suspense>,
    },
    {
        path: "/registration",
        element: <React.Suspense fallback={<>...</>}><Registration/></React.Suspense>,
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