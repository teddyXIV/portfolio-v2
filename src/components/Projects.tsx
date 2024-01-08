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

    const cardStyle = {
        minWidth: 275,
        display: 'flex',
        background: "#FBF2C0",
        color: "#203623",
        '&:hover': {
            background: "#a1cdf1"
        }
    }

    const arrowStyle = {
        marginLeft: '10px',
        marginBottom: '5px'
    }

    const mediaStyle = {
        width: 175,
        marginLeft: 'auto'
    }

    return (
        <>
            <div className="project-container">
                <h2>Projects</h2>
                <Card className='project-card' sx={cardStyle}>
                    <CardActionArea component={Link} href="https://github.com/teddyXIV/react-api-recipes.git" target='_blank'>
                        <Box sx={{ display: 'flex' }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    React + APIs
                                    <ArrowOutwardIcon fontSize='medium' sx={arrowStyle} />
                                </Typography>
                                <Typography variant="body2">
                                    A web app exploring the implementation of APIs with React.
                                </Typography>
                                <Stack direction="row" spacing={1} sx={{ paddingTop: '10px' }}>
                                    <Chip label="React" sx={{ background: '#e07a5f', color: "#FBF2C0" }} />
                                    <Chip label="MUI" sx={{ background: '#593F62', color: "#FBF2C0" }} />
                                    <Chip label="API calls" sx={{ background: '#06BA63', color: "#FBF2C0" }} />
                                </Stack>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={mediaStyle}
                                image="src\assets\react_api.png"
                                alt="the front page of my React + API project"

                            />
                        </Box>
                    </CardActionArea>
                </Card>
                <Card className='project-card' sx={cardStyle}>
                    <CardActionArea component={Link} href="https://github.com/teddyXIV/redux-inventory-tracker.git" target='_blank'>
                        <Box sx={{ display: 'flex' }}>
                            <CardContent >
                                <Typography variant="h5" component="div">
                                    Inventory Tracker
                                    <ArrowOutwardIcon fontSize='medium' sx={arrowStyle} />
                                </Typography>
                                <Typography variant="body2">
                                    A inventory tracking app for a fictional surf shop utilizing Redux Toolkit for state management.
                                </Typography>
                                <Stack direction="row" spacing={1} sx={{ paddingTop: '10px' }}>
                                    <Chip label="React" sx={{ background: '#e07a5f', color: "#FBF2C0" }} />
                                    <Chip label="Redux Toolkit" sx={{ background: '#3F0D12', color: "#FBF2C0" }} />
                                    <Chip label="TypeScript" sx={{ background: '#0B1D51', color: "#FBF2C0" }} />
                                </Stack>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={mediaStyle}
                                image="src\assets\redux_inventory.png"
                                alt="the front page of my Inventory Tracker project"
                            />
                        </Box>
                    </CardActionArea>
                </Card>
                <Card className='project-card' sx={cardStyle}>
                    <CardActionArea component={Link} href="https://github.com/teddyXIV/Currency-Exchanger.git" target='_blank'>
                        <Box sx={{ display: 'flex' }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Currency exchanger
                                    <ArrowOutwardIcon fontSize='medium' sx={arrowStyle} />
                                </Typography>
                                <Typography variant="body2">
                                    An application that allows the user to enter a currency and convert it into another currency at the current exchange rate.
                                </Typography>
                                <Stack direction="row" spacing={1} sx={{ paddingTop: '10px' }}>
                                    <Chip label="JavaScript" sx={{ background: '#BA5C12', color: "#FBF2C0" }} />
                                    <Chip label="API calls" sx={{ background: '#06BA63', color: "#FBF2C0" }} />
                                    <Chip label="Bootstrap" sx={{ background: '#FC6471', color: "#FBF2C0" }} />
                                </Stack>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={mediaStyle}
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