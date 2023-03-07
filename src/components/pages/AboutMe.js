import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import BackgroundPhoto from '../../images/Simmonds-Background.jpg'

function DrawerAppBar(props) {
    return (
        <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 100,
                }}>
                <img
                    alt="Photo of family crest logo."
                    src={BackgroundPhoto}
                    style={{
                        height: 420,
                    }}
                />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Card
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: "#b48b7d",
                        color: 'white',
                        border: '2px solid #56351e',
                        opacity: '75%',
                        marginTop: 100
                    }}
                    sx={{ maxWidth: 700 }}>
                    <Box
                        component="main"
                        sx={{ p: 3 }}>
                        <h2>About Me</h2>
                        <Typography>
                            Hi there! My name is Chris. Currently, I am eager to reach the point of graduation from a 3-month long Coding Bootcamp with the University of Arizona. I began my coding journey in December of 2022.
                            <br />
                            <br />
                            While in this Bootcamp, I have learned a great deal of new information and am very excited to put this new knowlege to use and build some applications! So far, I am quite fond of the front-end and playing around with CSS and styling. However, as I learn more information about JavaScript technologies like React, I cannot help but to look forward to seeing what I can do with them!
                        </Typography>
                    </Box>
                </Card>
            </div>
        </main>
    );
}

export default DrawerAppBar;