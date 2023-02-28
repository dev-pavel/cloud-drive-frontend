import React, {FC, PropsWithChildren} from "react";
import {Grid, useTheme} from "@mui/material";

const AuthLayout: FC<PropsWithChildren> = ({children}) => {
    const theme = useTheme()

    return (
        <Grid style={{backgroundColor: theme.palette.primary.light, minHeight: '100vh'}}>
            {children}
        </Grid>
    )
}

export default AuthLayout;