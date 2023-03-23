import React from 'react';
import {Grid, Typography} from "@mui/material";
import {gridSpacing} from "../../../../../store/constants/constatns";
import Folder from "../../components/folder";

const Folders = () => {
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h3">
                    Folders
                </Typography>
            </Grid>
            <Grid xs={12} item>
                <Grid container spacing={gridSpacing}>
                    <Folder/>
                    <Folder/>
                    <Folder/>
                    <Folder/>
                    <Folder/>
                </Grid>
            </Grid>
        </>
    );
};

export default Folders;