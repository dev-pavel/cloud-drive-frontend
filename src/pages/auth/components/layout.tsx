import React, {FC, PropsWithChildren} from "react";
import {Box, Card, Grid, useTheme} from "@mui/material";

const AuthLayout: FC<PropsWithChildren> = ({children}) => {
    const theme = useTheme();

    return (
        <Grid style={{backgroundColor: theme.palette.primary.light, minHeight: '100vh'}}>
            <Grid container direction="column" justifyContent="flex-end" sx={{minHeight: '100vh'}}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{minHeight: 'calc(100vh - 68px)'}}>
                        <Grid item sx={{m: {xs: 1, sm: 3}, mb: 0}}>
                            <Card
                                sx={{
                                    maxWidth: {xs: 400, lg: 475},
                                    margin: {xs: 2.5, md: 3},
                                    '& > *': {
                                        flexGrow: 1,
                                        flexBasis: '50%'
                                    }
                                }}
                            >
                                <Box sx={{p: {xs: 2, sm: 3, xl: 5}}}>{children}</Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AuthLayout;