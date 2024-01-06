import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Projects.css'
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';

const Projects = () => {
    return (
        <>
            <Card className='project-card' sx={{ minWidth: 275, display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            React + APIs
                            <CardActions>
                                <Button size="small" href="https://github.com/teddyXIV/redux-inventory-tracker.git" target='_blank'>{<GitHubIcon />}</Button>
                            </CardActions>
                        </Typography>
                        <Typography variant="body2">
                            A web app exploring the implementation of APIs with React
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip label="React" />
                            <Chip label="Vite" />
                            <Chip label="MUI" />
                            <Chip label="API calls" />
                        </Stack>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 175 }}
                    image="src\assets\react_api.png"
                    alt="the front page of my React + API project"
                />
            </Card>
            <Card className='project-card' sx={{ minWidth: 275, display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Inventory Tracker
                        </Typography>
                        <Typography variant="body2">
                            A inventory tracking app for a fictional surf shop.
                        </Typography>
                        <CardActions>
                            <Button size="small" href="https://github.com/teddyXIV/redux-inventory-tracker.git" target='_blank'>{<GitHubIcon />}</Button>
                        </CardActions>
                        <Stack direction="row" spacing={1}>
                            <Chip label="React" />
                            <Chip label="Redux Toolkit" />
                            <Chip label="TypeScript" />
                            <Chip label="Vite" />
                        </Stack>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 175 }}
                    image="src\assets\redux_inventory.png"
                    alt="the front page of my React + API project"
                />
            </Card>
            <Card className='project-card' sx={{ minWidth: 275, display: 'flex' }}>
                <CardActionArea component={Link} href="https://github.com/teddyXIV/Currency-Exchanger.git" target='_blank'>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Currency exchanger
                            </Typography>
                            <Typography variant="body2">
                                An application that allows the user to enter a currency and convert it into another currency at the current exchange rate.
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip label="JavaScript" />
                                <Chip label="API calls" />
                                <Chip label="Vite" />
                                <Chip label="Bootstrap" />
                            </Stack>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="src\assets\currency_api.png"
                        alt="the front page of my React + API project"
                    />
                </CardActionArea>
            </Card >
        </>
    )
}

export default Projects;