import { Box, Grid, List, ListItemButton, Typography } from '@mui/material';
import { GithubButton, InstagramButton, LinkedinButton, MailButton, WhatsappButton } from './socialLinksButtons/';

import { getPages, menuPageSelection } from '../../helpers';
import { useNavigate } from 'react-router-dom';


const data = await getPages();


export const Footer = () => {
    const navigate = useNavigate();

    const handleNavigateMenu = ( datasetPage ) => {
        const page = menuPageSelection( datasetPage )
        navigate(`/portfolio/${ page }`);
    };
        

    return (
        <Box sx={{ bgcolor: 'primary.main', p: 6 }} component="footer">
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Box 
                        sx={{ margin: '30px' }}    
                    >
                        <img alt="Profile Picture" src="/assets/backgrounds/logo-dark.png" width="60"/>
                    </Box>
                    <Box >
                        <Typography 
                            variant="h6"
                            align="center"
                            sx={{
                                color: 'white',
                                fontSize: '15px',
                                textAlign: 'justify'
                            }}
                            >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur, possimus doloremque quae voluptates aut ex voluptatum nesciunt corrupti numquam suscipit ratione fugiat dolorum nisi sint cupiditate non asperiores earum.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={5}
                    align='right'
                >
                    <Grid 
                        item
                        xs={12}
                        md={6}
                        align='right'
                    > 
                        <Typography sx={{ color: 'white', fontSize: 15  }} variant="h6" component="div">
                            Explore
                        </Typography>
                        <List >
                            {data.map(( page ) => (
                                <ListItemButton
                                    key={page.id}
                                    sx={{
                                        justifyContent: 'right',
                                        pr:'0px', pt: '4px', pb: '4px'
                                    }}
                                    onClick={ () => handleNavigateMenu( page.title ) }
                                >
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            fontSize: 13,
                                        }}
                                    >
                                        { page.title }
                                    </Typography>
                                </ListItemButton>
                            ))}
                        </List>
                    </Grid>
                </Grid>

            </Grid> 
                <Grid 
                    item
                    xs={12} 
                    sx={{ 
                        display: 'flex',
                        justifyContent: 'flex-end',
                        height: '30px',
                    }}
                >
                        <LinkedinButton  animate={ false }  />
                        <GithubButton  animate={ false } />
                        <MailButton  animate={ false } />
                        <WhatsappButton  animate={ false } />
                        <InstagramButton  animate={ false } />
                </Grid>
        </Box>
    );
}
 
export default Footer;  