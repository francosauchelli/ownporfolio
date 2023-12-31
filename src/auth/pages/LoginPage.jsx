import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (
        <AuthLayout title='Admin Login' >
                <form >
                    <Grid item
                        xs={ 12 }
                        sx={{ mt: 2 }}
                    >
                        <TextField 
                            label="e-mail"
                            type="email"
                            fullWidth
                        />

                    </Grid>
                    <Grid item
                        xs={ 12 }
                        sx={{ mt: 2 }}
                    >
                        <TextField 
                            label="Password"
                            type="password"
                            fullWidth
                        />

                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }} >
                        <Grid item
                            xs={ 12} sm={ 6 }
                            >
                            <Button variant='contained' fullWidth >
                                <Typography>Login</Typography> 
                            </Button>
                            
                        </Grid>
                        <Grid item
                            xs={ 12} sm={ 6 }
                            >
                            <Button variant='contained' fullWidth >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Gmail</Typography> 
                            </Button>
                            
                        </Grid>

                        <Grid container 
                            direction="row" 
                            justifyContent="end"    
                        >
                            <Link 
                                component={ RouterLink } to='/auth/register' 
                                color="inherit" sx={{ mt: 1 }}
                            >
                                    Create Account
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>
    );
}