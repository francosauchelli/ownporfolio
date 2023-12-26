import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { useRef } from 'react';
import { AboutMePage } from '../../portfolio/pages/AboutMePage';
import '../style/welcomePage.css';


// const defaultTheme = createTheme();



export const WelcomePage = () => {

    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    const handleSubmit = ( event ) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    return (
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={5}
                    sx={{
                        backgroundImage: 'url(/assets/avatar/test-welcome.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid 
                    item 
                    xs={12}
                    sm={8}
                    md={7} 
                    component={Paper} elevation={6} square
                    className="bg"
                >
                    <Box
                    
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        >
                        <Box 
                            component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}
                            
                        >
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={ handleClick }
                                id="welcome-button"
                            >
                                Hi!
                                <WavingHandIcon />
                            </Button>
                            <Box className='light x2'></Box>
                            <Box className='light x3'></Box>
                            <Box className='light x4'></Box>
                            <Box className='light x5'></Box>
                            <Box className='light x6'></Box>
                            <Box className='light x7'></Box>
                            <Box className='light x8'></Box>
                            <Box className='light x9'></Box>
                            <Box className='light x1'></Box>
                        </Box>
                    </Box>
                </Grid>
                <Box ref={ ref }>
                    <AboutMePage />
                </Box>
            </Grid>
    );
}





