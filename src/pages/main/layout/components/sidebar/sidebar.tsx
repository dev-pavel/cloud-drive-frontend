import React, {FC} from "react";
import {Box, Drawer as MUIDrawer, useMediaQuery, useTheme} from "@mui/material";
import {drawerWidth} from "../../../../../store/constants/constatns";
import Drawer from "./components/drawer";

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