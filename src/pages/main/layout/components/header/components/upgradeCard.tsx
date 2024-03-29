import React, {FC} from "react";
import {Button, CardContent, Grid, Stack, styled, Typography} from "@mui/material";
import Card from "../../../../../../components/card/card";

const CardStyle = styled(Card)(({theme}) => ({
    background: theme.palette.warning.light,
    marginBottom: '16px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '19px solid ',
        borderColor: theme.palette.warning.main,
        borderRadius: '50%',
        top: '65px',
        right: '-150px'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '3px solid ',
        borderColor: theme.palette.warning.main,
        borderRadius: '50%',
        top: '145px',
        right: '-70px'
    }
}));

const UpgradeCard: FC = () => {

    return (
        <CardStyle>
            <CardContent>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h4">Upgrade your plan</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" color="grey.900"
                                    sx={{opacity: 0.6}}>
                            70% discount for 1 years <br/>
                            subscriptions.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row">
                            <Button variant="contained" color="warning"
                                    sx={{boxShadow: 'none'}}>
                                Go Premium
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </CardStyle>
    )
}

export default UpgradeCard