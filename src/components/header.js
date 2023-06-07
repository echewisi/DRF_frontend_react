import react from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/material/styles';

const useStyles= makeStyles((theme)=> ({
    AppBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));

function Header(){
    const classes= useStyles();
}