import React, {FC, useState} from "react";
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
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginLeft: `${drawerWidth}px`,
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
    const [openSidebar, setOpenSidebar] = useState(false)

    const handleLeftDrawerToggle = () => {
        setOpenSidebar(value => !value)
    }

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
                    transition: openSidebar ? theme.transitions.create('all') : 'none'
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle}/>
                </Toolbar>
            </AppBar>
            <Sidebar
                drawerToggle={handleLeftDrawerToggle}
                drawerOpen={openSidebar}
            />
            <Main
                theme={theme}
                // @ts-ignore
                open={openSidebar}
            >
                <Outlet/>
            </Main>
        </Box>
    )
}

export default MainLayout;