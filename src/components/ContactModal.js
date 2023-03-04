import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields() {
    return (
        <Box
            style={{ backgroundColor: '#342e37', height: '100vh' }}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 50 }}>
                <TextField
                    style={{ color: 'white'}}
                    error
                    id="Name"
                    label="Name"
                    defaultValue="Hello World"
                />
                <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Email"
                    defaultValue="Hello World"
                    helperText="Please enter a valid email address"
                />
            </div>
        </Box>
    );
}