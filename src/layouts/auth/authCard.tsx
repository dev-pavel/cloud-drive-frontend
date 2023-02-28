import React, {FC, PropsWithChildren} from "react";
import {Box, Card, CardContent} from "@mui/material";

const AuthCardLayout: FC<PropsWithChildren> = ({children}) => {

    return (
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
            <CardContent>
                <Box sx={{p: {xs: 2, sm: 3, xl: 5}}}>{children}</Box>
            </CardContent>
        </Card>
    )
}

export default AuthCardLayout;