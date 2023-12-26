import { useSelector } from 'react-redux';
import { PortfolioLayout } from '../layout';
import { SideBar } from '../components';
import { Box } from '@mui/material';
import { NoViewSelected, ProjectView } from '../views';
import Grid from '@mui/material/Grid';

import bgProjects from '../../../public/assets/backgrounds/bg-projects.mp4';
import '../styles/portfolioStyles.css';



const drawerWidth = 400;

export const ProjectsPage = () => {

    const { activeProject, isSaving } = useSelector( state => state.portfolio );


    return (
        <PortfolioLayout>
    
            <Box
                component='main'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'center',
                }}
            >
                

                <SideBar drawerWidth={ drawerWidth } />

                <Grid 
                    sx={{
                        // backgroundColor: "yellow",
                        width: `calc( 100% - ${ drawerWidth }px )`,
                    }}
                >
                    <Box
                        sx={{ color: 'yellow', position: 'absolute' }}
                    >
                        <video className='videoTag' autoPlay loop muted>
                            <source src={bgProjects} type='video/mp4' />
                        </video>

                        {
                            ( !!activeProject )
                            ? <ProjectView />
                            : <NoViewSelected />
                        }

                    </Box>
                </Grid>
                {/* <Box sx={{ flexGrow: 1, p: 2 }} >
                    <h1>Projects Page</h1>
                </Box> */}
            
            </Box>

        </ PortfolioLayout>
    );
}