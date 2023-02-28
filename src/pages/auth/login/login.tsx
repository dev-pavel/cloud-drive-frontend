import React, {FC} from "react";
import {Grid, Stack, Typography, useTheme} from "@mui/material";
import AuthLayout from "../../../layouts/auth/auth";
import AuthCardLayout from "../../../layouts/auth/authCard";

const Login: FC = () => {
    const theme = useTheme()

    return (
        <AuthLayout>
            <Grid container direction="column" justifyContent="flex-end" sx={{minHeight: '100vh'}}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{minHeight: 'calc(100vh - 68px)'}}>
                        <Grid item sx={{m: {xs: 1, sm: 3}, mb: 0}}>
                            <AuthCardLayout>
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        // direction={matchDownSM ? 'column-reverse' : 'row'}
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Grid item>
                                            <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                <Typography
                                                    color={theme.palette.secondary.main}
                                                    gutterBottom
                                                    variant={'h3'}
                                                    // variant={matchDownSM ? 'h3' : 'h2'}
                                                >
                                                    Hi, Welcome Back
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    fontSize="16px"
                                                    // textAlign={matchDownSM ? 'center' : 'inherit'}
                                                >
                                                    Enter your credentials to continue
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardLayout>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthLayout>
    )
}

export default Login;