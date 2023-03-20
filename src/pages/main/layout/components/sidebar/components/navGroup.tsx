import React, {FC} from 'react';
import {Divider, List, Typography, useTheme} from "@mui/material";

const NavGroup: FC<any> = ({title, children}) => {
    const theme = useTheme()

    return (
        <>
            <List
                subheader={
                    title && (
                        <Typography variant="caption" sx={{...theme.typography.menuCaption}} display="block" gutterBottom>
                            {title}
                        </Typography>
                    )
                }
            >
                {children}
            </List>
            <Divider sx={{mt: 0.25, mb: 1.25}}/>
        </>
    );
}

export default NavGroup;