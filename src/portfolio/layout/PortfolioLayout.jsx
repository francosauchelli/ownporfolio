import { Box } from '@mui/material';
import { Footer, Navbar } from '../components';


const drawerWidth = 400;

export const PortfolioLayout = ({ children }) => {

    return (
        <Box 
            justifyContent="center"
        >
            
            <Navbar />
            
            { children }

            <Footer />
        </Box>        
        
    );
};