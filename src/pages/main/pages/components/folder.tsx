import React from 'react';
import {Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FolderIcon from '@mui/icons-material/Folder';
import {styled, useTheme} from "@mui/material/styles";
import Card from "../../../../components/card/card";

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

const Folder = () => {
    const theme = useTheme();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
                                    <FolderIcon/>
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
                                        Folder Name
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
            </CardWrapper>
        </Grid>
    );
};

export default Folder;