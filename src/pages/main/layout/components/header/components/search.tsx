import {
    Avatar,
    Box,
    ButtonBase,
    Card,
    Grid,
    InputAdornment,
    OutlinedInput,
    Popper,
    styled,
    useTheme
} from "@mui/material";
import React, {FC, useState} from "react";
import {IconAdjustmentsHorizontal, IconSearch, IconX} from "@tabler/icons-react";
import Transition from "../../../../../../components/transition/transition";
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';
import SearchIcon from '@mui/icons-material/Search';

const PopperStyle = styled(Popper)(({theme}) => ({
    zIndex: 1100,
    width: '99%',
    top: '-55px !important',
    padding: '0 12px',
    [theme.breakpoints.down('sm')]: {
        padding: '0 10px'
    }
}));

const OutlineInputStyle = styled(OutlinedInput)(({theme}) => ({
    width: 434,
    marginLeft: 16,
    paddingLeft: 16,
    paddingRight: 16,
    '& input': {
        background: 'transparent !important',
        paddingLeft: '4px !important'
    },
    [theme.breakpoints.down('lg')]: {
        width: 250
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: 4,
        background: '#fff'
    }
}));

const HeaderAvatarStyle = styled(Avatar)(({theme}) => ({
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '&:hover': {
        background: theme.palette.secondary.dark,
        color: theme.palette.secondary.light
    }
}));

const MobileSearch: FC<any> = ({value, setValue, popupState}) => {
    const theme = useTheme();

    return (
        <OutlineInputStyle
            id="input-search-header"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
            startAdornment={
                <InputAdornment position="start">
                    <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]}/>
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                    <ButtonBase sx={{borderRadius: '12px'}}>
                        <HeaderAvatarStyle variant="rounded">
                            <SearchIcon />
                            {/*<IconAdjustmentsHorizontal stroke={1.5} size="1.3rem"/>*/}
                        </HeaderAvatarStyle>
                    </ButtonBase>
                    <Box sx={{ml: 2}}>
                        <ButtonBase sx={{borderRadius: '12px'}}>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.mediumAvatar,
                                    background: theme.palette.orange.light,
                                    color: theme.palette.orange.dark,
                                    '&:hover': {
                                        background: theme.palette.orange.dark,
                                        color: theme.palette.orange.light
                                    }
                                }}
                                {...bindToggle(popupState)}
                            >
                                <IconX stroke={1.5} size="1.3rem"/>
                            </Avatar>
                        </ButtonBase>
                    </Box>
                </InputAdornment>
            }
            aria-describedby="search-helper-text"
            inputProps={{'aria-label': 'weight'}}
        />
    );
};

const Search: FC = () => {
    const theme = useTheme();
    const [value, setValue] = useState('');

    return (
        <>
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <PopupState variant="popper" popupId="demo-popup-popper">
                    {(popupState) => (
                        <>
                            <Box sx={{ml: 2}}>
                                <ButtonBase sx={{borderRadius: '12px'}}>
                                    <HeaderAvatarStyle variant="rounded" {...bindToggle(popupState)}>
                                        <IconSearch stroke={1.5} size="1.2rem"/>
                                    </HeaderAvatarStyle>
                                </ButtonBase>
                            </Box>
                            <PopperStyle {...bindPopper(popupState)} transition>
                                {({TransitionProps}) => (
                                    <>
                                        <Transition
                                            type="zoom"
                                            {...TransitionProps}
                                            sx={{transformOrigin: 'center left'}}
                                        >
                                            <Card
                                                sx={{
                                                    background: '#fff',
                                                    [theme.breakpoints.down('sm')]: {
                                                        border: 0,
                                                        boxShadow: 'none'
                                                    }
                                                }}
                                            >
                                                <Box sx={{p: 2}}>
                                                    <Grid container alignItems="center" justifyContent="space-between">
                                                        <Grid item xs>
                                                            <MobileSearch value={value} setValue={setValue}
                                                                          popupState={popupState}/>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Card>
                                        </Transition>
                                    </>
                                )}
                            </PopperStyle>
                        </>
                    )}
                </PopupState>
            </Box>
            <Box sx={{display: {xs: 'none', md: 'block'}}}>
                <OutlineInputStyle
                    id="input-search-header"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search"
                    // startAdornment={
                    //     <InputAdornment position="start">
                    //         <SearchIcon />
                    //         {/*<IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]}/>*/}
                    //     </InputAdornment>
                    // }
                    endAdornment={
                        <InputAdornment position="end">
                            <ButtonBase sx={{borderRadius: '12px'}}>
                                <HeaderAvatarStyle variant="rounded">
                                    <SearchIcon />
                                    {/*<IconAdjustmentsHorizontal stroke={1.5} size="1.3rem"/>*/}
                                </HeaderAvatarStyle>
                            </ButtonBase>
                        </InputAdornment>
                    }
                    aria-describedby="search-helper-text"
                    inputProps={{'aria-label': 'weight'}}
                />
            </Box>
        </>
    );
};

export default Search