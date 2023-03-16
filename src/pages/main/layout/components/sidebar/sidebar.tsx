import React, {FC} from "react";
import {Box, Drawer as MUIDrawer, useMediaQuery, useTheme} from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import {BrowserView, MobileView} from 'react-device-detect';
import {drawerWidth} from "../../../../../store/constants/constatns";

const Drawer: FC = () => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <Box sx={{display: 'flex', p: 2, mx: 'auto'}}>
                    {/*<LogoSection />*/}
                </Box>
            </Box>
            <BrowserView>
                <PerfectScrollbar
                    component="div"
                    style={{
                        height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        paddingLeft: '16px',
                        paddingRight: '16px'
                    }}
                >
                    {/*<MenuList />*/}
                    {/*<MenuCard />*/}
                </PerfectScrollbar>
            </BrowserView>
            <MobileView>
                <Box sx={{px: 2}}>
                    {/*<MenuList />*/}
                    {/*<MenuCard />*/}
                </Box>
            </MobileView>
        </>
    )
}

const Sidebar: FC<any> = ({drawerOpen, drawerToggle, window}) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component="nav" sx={{flexShrink: {md: 0}, width: matchUpMd ? drawerWidth : 'auto'}}
             aria-label="mailbox folders">
            <MUIDrawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{keepMounted: true}}
                color="inherit"
            >
                <Drawer/>
            </MUIDrawer>
        </Box>
    );
};

export default Sidebar;