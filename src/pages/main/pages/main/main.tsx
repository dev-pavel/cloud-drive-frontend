import React, {FC} from "react";
import {Grid} from "@mui/material";
import {gridSpacing} from "../../../../store/constants/constatns";
import TotalFiles from "./components/totalFiles";
import TotalFileSize from "./components/totalFileSize";
import TotalUsers from "./components/totalUsers";
import TotalUsersFiles from "./components/totalUsersFiles";
import Folders from "./components/folders";
import Files from "./components/files";


const Main: FC = () => {

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalFiles/>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalFileSize/>
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalUsers/>
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalUsersFiles/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Folders/>
                    <Files/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Main;