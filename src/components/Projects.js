import Portfolio from '../components/pages/Portfolio';
import Project1 from '../images/Couch-Potato-Assistant.png';
import Project2 from '../images/Password-Generator.png';
import Project3 from '../images/Express-Note-Taker.png';
import Project4 from '../images/JATE.PNG';
import Project5 from '../images/E-Commerce.PNG';
import Project6 from '../images/Simmonds-Portfolio.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const projects = [
    {
        id: 1,
        title: 'Couch Potato Assistant',
        description: 'This project was my first group project in the Bootcamp. This application uses APIs to allow a user to search for data about movies. Such as Movie Title, Actors, Rating, etc...',
        link: 'https://christoph551.github.io/Couch-Potato-Assistant/',
        github: 'https://www.github.com/Christoph551/Couch-Potato-Assistant',
        image: Project1
    },
    {
        id: 2,
        title: 'Password Generator',
        description: "This project was my first solo project in the Bootcamp. This application allows a user to generate a random password based on criteria they've selected. The application will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript.",
        link: 'https://christoph551.github.io/Password-Generator/',
        github: 'https://www.github.com/Christoph551/Password-Generator',
        image: Project2
    },
    {
        id: 3,
        title: 'Express Note Taker',
        description: 'This application can be used to write, save, and delete notes. The application will use an express backend and save and retrieve note data from a JSON file.',
        link: 'https://serene-fortress-18066.herokuapp.com/',
        github: 'https://github.com/Christoph551/Express-Note-Taker',
        image: Project3
    },
    {
        id: 4,
        title: 'JATE',
        description: 'This is an installable application for a text editor. This application is also able to be installed on your local machine for offline use!',
        link: 'https://glacial-everglades-16556.herokuapp.com/',
        github: 'https://github.com/Christoph551/Jot-It-Down',
        image: Project4
    },
    {
        id: 5,
        title: 'E-Commerce',
        description: 'This application is the back end for an e-commerce site. It uses the latest technologies so that a retail company can compete with other e-commerce companies.',
        link: 'This is a node based application. Please see the github repository for more information.',
        github: 'https://github.com/Christoph551/E-Commerce',
        image: Project5
    },

    {
        id: 6,
        title: 'ReadMe Generator',
        description: "This application is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.",
        link: 'This is a node based application. Please see the github repository for more information.',
        github: 'https://www.github.com/Christoph551/ReadMe-Generator',
        image: Project6
    },
];



export default function ProjectContent(props) {
    return (
        <div>
            {props.projects.map(item => (
                <Grid container spacing={4}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Link 
                            to={item.link}
                            target="_blank">
                            <Img alt={item.title} src={item.image} />
                        </Link>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="h2" style={{fontSize: 24}}>
                                {item.title}
                            </Typography>
                            <Typography 
                                sx={{ margin: 5}}
                                variant="body2" 
                                gutterBottom>
                                    {item.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ButtonBase>
                            <Link 
                                to={item.github}
                                target="_blank">
                                <GitHubIcon />
                            </Link>
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Grid>
        ))}
            <div>
                <Portfolio projects={projects}/>
            </div>
        </div>
    );
}