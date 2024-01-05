import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

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
                </CardContent>
                <CardActions>
                    <Button size="small" href="https://github.com/teddyXIV/react-api-recipes" target='_blank'>{<GitHubIcon />}</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Projects;