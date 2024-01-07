import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

const Header = () => {

    const linkStyle = {
        color: '#FBF2C0',
        marginRight: '10px',
        '&:hover': {
            color: '#a1cdf1',
        },
    };

    return (
        <>
            <div>
                <h1>Teddy Peterschmidt </h1>
                <h3>Full stack developer</h3>
                <div>
                    <Link href="https://github.com/teddyXIV" target="_blank" sx={linkStyle}>
                        <GitHubIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/teddy-peterschmidt/" target="_blank" sx={linkStyle}>
                        <LinkedInIcon />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;