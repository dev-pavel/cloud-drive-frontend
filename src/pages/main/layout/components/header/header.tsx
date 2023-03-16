import React, {FC} from "react";
import {Avatar, Box, ButtonBase, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {IconMenu2} from '@tabler/icons-react';
import Search from "./components/search";
import Profile from "./components/profle";

const Header: FC = () => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{display: {xs: 'none', md: 'block'}, flexGrow: 1}}>
                    <ButtonBase
                        disableRipple
                        // onClick={() => dispatch({type: MENU_OPEN, id: defaultId})}
                        component={Link}
                        to={''}
                    >
                        {/*<Logo/>*/}
                    </ButtonBase>
                </Box>
                <ButtonBase sx={{borderRadius: '12px', overflow: 'hidden'}}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        // onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <IconMenu2
                            stroke={1.5}
                            size="1.3rem"
                        />
                    </Avatar>
                </ButtonBase>
            </Box>

            <Search/>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{flexGrow: 1}}/>
            <Profile/>
        </>
    )
}

export default Header;