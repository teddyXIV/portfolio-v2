import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Projects.css'
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Projects = () => {

    return (
        <>
            <div className="project-container">
                <h2>Projects</h2>
                <Card className='project-card' sx={{ minWidth: 275, display: 'flex' }}>
                    <CardActionArea component={Link} href="https://github.com/teddyXIV/react-api-recipes.git" target='_blank'>
                        <Box sx={{ display: 'flex' }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    React + APIs
                                    <ArrowOutwardIcon fontSize='small' />
                                </Typography>
                                <Typography variant="body2">
                                    A web app exploring the implementation of APIs with React
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="React" />
                                    <Chip label="MUI" />
                                    <Chip label="API calls" />
                                </Stack>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 175, marginLeft: 'auto' }}
                                image="src\assets\react_api.png"
                                alt="the front page of my React + API project"

                            />
                        </Box>
                    </CardActionArea>
                </Card>
                <Card className='project-card' sx={{ minWidth: 275, display: 'flex' }}>
                    <CardActionArea component={Link} href="https://github.com/teddyXIV/redux-inventory-tracker.git" target='_blank'>
                        <Box sx={{ display: 'flex' }}>
                            <CardContent >
                                <Typography variant="h5" component="div">
                                    Inventory Tracker
                                    <ArrowOutwardIcon fontSize='small' />
                                </Typography>
                                <Typography variant="body2">
                                    A inventory tracking app for a fictional surf shop utilizing Redux Toolkit for state management.
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="React" />
                                    <Chip label="Redux Toolkit" />
                                    <Chip label="TypeScript" />
                                </Stack>
                            </CardContent>
                            <div className="card-pic">
                                <CardMedia
                                    component="img"
                                    sx={{ width: 175, marginLeft: 'auto' }}
                                    image="src\assets\redux_inventory.png"
                                    alt="the front page of my Inventory Tracker project"
                                />
                            </div>
                        </Box>
                    </CardActionArea>
                </Card>
                <Card className='project-card' sx={{ minWidth: 275, display: 'flex' }}>
                    <CardActionArea component={Link} href="https://github.com/teddyXIV/Currency-Exchanger.git" target='_blank'>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Currency exchanger
                                    <ArrowOutwardIcon fontSize='small' />
                                </Typography>
                                <Typography variant="body2">
                                    An application that allows the user to enter a currency and convert it into another currency at the current exchange rate.
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="JavaScript" />
                                    <Chip label="API calls" />
                                    <Chip label="Bootstrap" />
                                </Stack>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 175, marginLeft: 'auto' }}
                                image="src\assets\currency_api.png"
                                alt="the front page of my Currency Exchange project"
                            />
                        </Box>
                    </CardActionArea>
                </Card >
            </div>
        </>
    )
}

export default Projects;