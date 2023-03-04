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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
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
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                style={{
                    backgroundColor: '#9fd356',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    padding: '1rem 2rem',
                    borderRadius: '10px',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 0 30px 0 rgba(0,0,0,0.5)',
                    marginTop: 100
                }}
            >
                Contact Me
            </Button>
            <div style={{ marginTop: 50 }}>
                <p>
                    I'd love to hear from you! Click the box above to send me a message, or email me at <a href="mailto:christophersimmonds551@gmail.com">christophersimmonds551@gmail.com</a> You can also visit the Resume tab to review and download my resume. Additionally, you can find me on <a href="https://www.linkedin.com/in/christopher-simmonds-b8721486/" target="_blank" rel="noreferrer">LinkedIn</a> and <a href="https://www.github.com/Christoph551" target="_blank" rel="noreferrer">GitHub</a>.
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
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Contact Me
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            SAVE
                        </Button>
                    </Toolbar>
                </AppBar>
                <ContactModal />
            </Dialog>
        </div>
    );
}
