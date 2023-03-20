import React, {FC} from "react";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import Logo from "../../../../../../assets/images/logo.svg";
import {BrowserView, MobileView} from "react-device-detect";
import PerfectScrollbar from "react-perfect-scrollbar";

const Drawer: FC = () => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <Box sx={{display: 'flex', p: 2, mx: 'auto'}}>
                    <img style={{height: 30}} src={Logo} alt="logo"/>
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
                    here will be sidebar
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

export default Drawer