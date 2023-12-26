import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
    return (
        <AuthLayout title='Create Account' >
                <form >
                    <Grid item
                        xs={ 12 }
                        sx={{ mt: 2 }}
                    >
                        <TextField 
                            label="Name"
                            type="text"
                            fullWidth
                        />

                    </Grid>
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
                            xs={ 12}
                            >
                            <Button variant='contained' fullWidth >
                                <Typography sx={{ ml: 1 }}>Create Account</Typography> 
                            </Button>
                            
                        </Grid>

                        <Grid container 
                            direction="row" 
                            justifyContent="end"    
                        >
                            <Typography sx={{ mr: 1, mt: 1 }}>Already Have An Account?</Typography>
                            <Link 
                                component={ RouterLink } to='/auth/login' 
                                color="inherit" sx={{ mt: 1 }}
                            >
                                    Log In
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>
    );
}