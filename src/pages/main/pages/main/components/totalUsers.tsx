import React from "react";
import {styled, useTheme} from '@mui/material/styles';
import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import Card from "../../../../../components/card/card";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const CardWrapper = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));


const TotalUsers = () => {
    const theme = useTheme();

    return (
        <>
            {/*{isLoading ? (*/}
            {/*    <TotalIncomeCard/>*/}
            {/*) : (*/}
            <CardWrapper border={false} content={false}>
                <Box sx={{p: 2}}>
                    <List sx={{py: 0}}>
                        <ListItem alignItems="center" disableGutters sx={{py: 0}}>
                            <ListItemAvatar>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        ...theme.typography.commonAvatar,
                                        //@ts-ignore
                                        ...theme.typography.largeAvatar,
                                        //@ts-ignore
                                        backgroundColor: theme.palette.primary[800],
                                        color: '#fff'
                                    }}
                                >
                                    <PeopleAltIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                sx={{
                                    py: 0,
                                    mt: 0.45,
                                    mb: 0.45
                                }}
                                primary={
                                    <Typography variant="h4" sx={{color: '#fff'}}>
                                        1304 Users
                                    </Typography>
                                }
                                secondary={
                                    <Typography variant="subtitle2" sx={{color: 'primary.light', mt: 0.25}}>
                                        Total Users Count
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
            </CardWrapper>
            {/*)}*/}
        </>
    );
};
export default TotalUsers;