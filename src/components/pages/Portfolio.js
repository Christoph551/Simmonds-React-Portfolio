import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import Projects from '../Projects';



export default function ProjectContents(props) {
    return (

        <Paper
            sx={{
                p: 2,
                marginTop: 15,
                marginLeft: 10,
                marginRight: 10,
                maxWidth: 1000,
                flexGrow: 1,
                color: 'black',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fafffd',
            }}
        >
        <Projects/>


        </Paper>
        );
}