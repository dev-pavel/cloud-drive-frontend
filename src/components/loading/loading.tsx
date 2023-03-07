import React, {FC} from "react";
import {CircularProgress, Grid, useTheme} from "@mui/material";

const Loading: FC = () => {
    const theme = useTheme();

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{backgroundColor: theme.palette.primary.light, minHeight: '100vh'}}
        >
            <CircularProgress
                size={100}
                color="primary"
            />
        </Grid>
    )
}

export default Loading;