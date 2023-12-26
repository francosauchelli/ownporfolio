import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { menuPageSelection } from '../../helpers';


export const OptionCard = ({ option }) => {
    
    const navigate = useNavigate();
    
    const { title, description, img } = option;


    const handleNavigateMenu = ( title ) => {

        const page = menuPageSelection( title )

        navigate(`/portfolio/${ page }`);
    };


    return (  
        <Grid  
            item
            xs={12}
            sm={6}
            md={4}
        >
            <Card 
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardActionArea
                    onClick={ () => handleNavigateMenu( title ) }
                >
                    <CardMedia
                        component="img"
                        image={ img }
                        alt={ `${ title } image` }
                        />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            { title }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};
