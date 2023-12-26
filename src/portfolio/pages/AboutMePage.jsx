import { PortfolioLayout } from '../layout';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



export const AboutMePage = () => {
    return (
        <PortfolioLayout >

            {/* <h1>About Me</h1> */}


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={5}>

                        <Box
                            sx={{
                                backgroundImage: 'url(/assets/avatar/avatar.jpg)',
                                backgroundSize: 'cover',
                                height: '80vh',
                                margin: '5vh'
                            //   width: '80%',
                            // width: '100%',
                            }} 
                        />
                    </Grid>

                    <Grid item xs={7}
                        sx={{ 
                        // backgroundColor: "yellow",
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'center',
                    }}
                    >
                        <Box 
                            sx={{
                                height: '50vh',
                                // backgroundColor: 'blue', 
                                width: '90%',
                                ml: 3,
                                mr: 3
                            }}
                        >
                            <Typography 
                                variant="h6"
                                align="center"
                                sx={{
                                    fontWeight: 'bold',
                                    fontStyle: 'oblique',
                                    fontFamily: 'Monospace'
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur, possimus doloremque quae voluptates aut ex voluptatum nesciunt corrupti numquam suscipit ratione fugiat dolorum nisi sint cupiditate non asperiores earum.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure in quibusdam a praesentium iste veniam eveniet dolorem? Dicta molestiae nam iste expedita, tempora fugiat, inventore architecto quis provident quaerat voluptas.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Box>


        </PortfolioLayout>
    );
};