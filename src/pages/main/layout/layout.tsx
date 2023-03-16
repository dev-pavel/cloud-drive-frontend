import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import {AppBar, Box, CssBaseline, styled, Toolbar, useTheme} from "@mui/material";
import Header from "./components/header/header";
import {drawerWidth} from "../../../store/constants/constatns";
import Sidebar from "./components/sidebar/sidebar";

// @ts-ignore
const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

const MainLayout: FC = () => {
    const theme = useTheme();

    return (
        <Box>
            <CssBaseline/>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    // transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header/>
                    {/*<Header handleLeftDrawerToggle={handleLeftDrawerToggle} />*/}
                </Toolbar>
            </AppBar>
            <Sidebar/>
            <Main
                theme={theme}
                // open={leftDrawerOpened}
                // @ts-ignore
                open={true}
            >
                <Outlet/>
            </Main>
        </Box>
    )
}

export default MainLayout;