import { useMemo } from 'react';
import { Box, CardContent, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useDispatch } from 'react-redux';
import { setActiveProject } from '../../store/portfolio';


export const SideBarItem = ({ item }) => {

    const dispatch = useDispatch();
    
    const { title, langs, screenshot }= item;

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring( 0, 17 ) + '...'
            : title;
    }, [title]);



    const replaceImage = ( error ) => {
        //replacement of broken Image
        error.target.src = '/assets/screenshots/noimage.png';
    };

    const onClickProject = () => {
        dispatch( setActiveProject( item ) );
    };


    return (
        <ListItem disablePadding
            // sx={{ backgroundColor: 'primary.main'}}
        >
            <ListItemButton
                onClick={ onClickProject }    
            >
                <ListItemIcon >
                    <LabelImportantIcon />
                </ListItemIcon>
                <Grid container>
                    <Box
                        component="img"
                        sx={{
                            // height: 233,
                            width: 100,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                        }}
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={ ( screenshot.length > 0 ) ? screenshot[0] : '' }
                        onError={ replaceImage }
                        alt={`Project Screenshot`}
                        loading="lazy"
                    />
                </Grid>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" >
                        { newTitle }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        { langs.join( ', ' ) }.
                    </Typography>
                </CardContent>

            </ListItemButton>
        </ListItem>
    );
};