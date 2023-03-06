import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ContactModal from '../ContactModal';
import Paper from '@mui/material/Paper';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    theme.palette.mode === 'light' ? '#011627' : '#fafffd',
                }}
                >

            <Button
                variant="outlined"
                onClick={handleClickOpen}
                style={{
                    backgroundColor: '#7b886f',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    padding: '1rem 2rem',
                    borderRadius: '10px',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 0 30px 0 rgba(0,0,0,0.5)',
                    marginTop: 50
                }}
                >
                Contact Me
            </Button>
            <div style={{ marginTop: 50 }}>
                <p>
                    I'd love to hear from you! By clicking the box above, you can send me a quick email. Let me know what you think of the site and/or my other projects!<br/> <br/> You can also visit the Resume tab to review and download my resume. <br/> <br/>Additionally, you can find me on LinkedIn and GitHub. Just click on the icons at the bottom of the screen and it'll take you to my respective profile!
                </p>
            </div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" style={{color: '#e9ebf8', fontSize: 18}}>
                            Contact Me
                        </Typography>
                        
                    </Toolbar>
                </AppBar>
                <ContactModal />
            </Dialog>
                            </Paper>
        </div>
    );
}
