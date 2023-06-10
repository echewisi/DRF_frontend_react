import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/material/styles';

const useStyles= makeStyles((theme)=> ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));

function Header(){
    const classes= useStyles();
    return(
        <React.Fragment>
            <CssBaseline />
                <AppBar
                position= "Static"
                color= "white"
                elevation={0}
                className={classes.appBar}
                >
                    <Toolbar>
                        <Typography variant='h6' color= "inherent" noWrap>
                            Blog
                        </Typography>
                    </Toolbar>

                </AppBar>
        </React.Fragment>
    );
}

export default Header;