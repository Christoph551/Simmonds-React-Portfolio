import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import couchPotatoAssistant from '../../images/Couch-Potato-Assistant.png'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid() {
    return (
        <Paper
            sx={{
                p: 2,
                marginTop: 15,
                marginLeft: 10,
                marginRight: 10,
                maxWidth: 1000,
                flexGrow: 1,
                color: '#fafffd',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#1A2027' : '#fafffd',
            }}
        >
            <Grid container spacing={4}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Link 
                            to="https://christoph551.github.io/Couch-Potato-Assistant/"
                            target="_blank">
                            <Img alt="Couch Potato Assistant" src={couchPotatoAssistant} />
                        </Link>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Couch Potato Assistant
                            </Typography>
                            <Typography 
                                sx={{ margin: 5}}
                                variant="body2" 
                                gutterBottom>
                                    This project was my first group project in the Bootcamp. This application uses APIs to allow a user to search for data about movies. Such as Movie Title, Actors, Rating, etc...
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ButtonBase>
                            <Link 
                                to="https://github.com/Christoph551/Couch-Potato-Assistant"
                                target="_blank">
                                <GitHubIcon />
                            </Link>
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}