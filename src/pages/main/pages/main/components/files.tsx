import React from 'react';
import {Grid, Typography} from "@mui/material";
import {gridSpacing} from "../../../../../store/constants/constatns";
import File from "../../components/file";

const Files = () => {
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h3">
                    Files
                </Typography>
            </Grid>
            <Grid xs={12} item>
                <Grid container spacing={gridSpacing}>
                    <File/>
                    <File/>
                    <File/>
                    <File/>
                    <File/>
                    <File/>
                    <File/>
                    <File/>
                    <File/>
                    <File/>
                    <File/>
                </Grid>
            </Grid>
        </>
    );
};

export default Files;