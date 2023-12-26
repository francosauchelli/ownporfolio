import { Box, Container, Grid } from '@mui/material';

import { OptionCard } from '../components';
import { PortfolioLayout } from '../layout/PortfolioLayout';
import { getPages } from '../../helpers';


const data = await getPages();
    
export const PortfolioPage = () => {

    return (
        <PortfolioLayout >

                <Container sx={{ py: 6 }} maxWidth="md" >
                    <Grid container spacing={3}>
                        { data.map( ( page ) => (
                            <OptionCard 
                                key={ page.id } 
                                option={ page }
                            />
                        ))}
                    </Grid>
                </Container>

        </PortfolioLayout>
    );
};