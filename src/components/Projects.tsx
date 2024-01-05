import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Projects = () => {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        React + APIs
                    </Typography>
                    <Typography variant="body2">
                        A web app exploring the implementation of APIs with React
                    </Typography>
                    <CardActions>
                        <Button size="small" href="https://github.com/teddyXIV/react-api-recipes" target='_blank'>{<GitHubIcon />}</Button>
                    </CardActions>
                    <Stack direction="row" spacing={1}>
                        <Chip label="React" />
                        <Chip label="Vite" />
                        <Chip label="MUI" />
                        <Chip label="API calls" />
                    </Stack>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
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
            </Card>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Currency exchanger
                    </Typography>
                    <Typography variant="body2">
                        An application that allows the user to enter a currency and convert it into another currency at the current exchange rate.
                    </Typography>
                    <CardActions>
                        <Button size="small" href="https://github.com/teddyXIV/Currency-Exchanger.git" target='_blank'>{<GitHubIcon />}</Button>
                    </CardActions>
                    <Stack direction="row" spacing={1}>
                        <Chip label="JavaScript" />
                        <Chip label="API calls" />
                        <Chip label="Vite" />
                        <Chip label="Bootstrap" />
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}

export default Projects;