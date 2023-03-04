import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Paper from '@mui/material/Paper';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';


export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >   
                    <Link to="https://github.com/Christoph551" target="_blank">
                        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/christopher-simmonds-b8721486/" target="_blank">
                        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
                    </Link>
                </BottomNavigation>
            </Paper>
        </Box>
    );
}