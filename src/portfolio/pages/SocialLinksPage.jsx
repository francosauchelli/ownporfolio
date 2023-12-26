import { Grid } from '@mui/material';

import { PortfolioLayout } from '../layout';
import { GithubButton, InstagramButton, LinkedinButton, MailButton, WhatsappButton } from '../components/socialLinksButtons';


export const SocialLinksPage = () => {
    
    return (
        <PortfolioLayout >
            <Grid 
                container
                sx={{ 
                    height: '70vh',
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <Grid 
                    sx={{ 
                        display: 'flex',
                        width: '70%',
                        justifyContent: 'center' 
                    }}
                    >
                        <LinkedinButton />
                        <GithubButton />
                        <MailButton />
                        <InstagramButton />
                        <WhatsappButton />
                </Grid>
            </Grid>

        </PortfolioLayout>
    );
};