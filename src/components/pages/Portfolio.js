import * as React from 'react';
import Paper from '@mui/material/Paper';
import Projects from '../Projects';

export default function ProjectContents(props) {
    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            }}>

            <Paper
                
                sx={{
                    p: 2,
                    marginTop: 10,
                    maxWidth: 1000,
                    flexGrow: 1,
                    color: 'white',
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#b48b7d' : '#fafffd',
                    opacity: '75%'
                }}
                >
            <Projects/>
            </Paper>
        </div>
        );
}