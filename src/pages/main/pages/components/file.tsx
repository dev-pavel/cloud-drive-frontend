import React from 'react';
import {Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {styled, useTheme} from "@mui/material/styles";
import Card from "../../../../components/card/card";

const CardWrapper = styled(Card)(({theme}) => ({
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

const File = () => {
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
                                        backgroundColor: theme.palette.warning.light,
                                        color: theme.palette.warning.dark
                                    }}
                                >
                                    <InsertDriveFileIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                sx={{
                                    py: 0,
                                    mt: 0.45,
                                    mb: 0.45
                                }}
                                primary={
                                    <Typography variant="h4">
                                        file_name.pdf
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

export default File;