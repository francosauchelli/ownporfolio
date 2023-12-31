import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeActiveProject } from '../../store/portfolio';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



export const ProjectView = () => {
    const dispatch = useDispatch()
    const { activeProject } = useSelector( state => state.portfolio );

    const { body, langs, screenshot, title } = activeProject; 


    const imagesSwipe = useMemo( () => {
        return screenshot.length > 0
                ? screenshot
                : [ '/assets/screenshots/noimage.png' ];
    }, [screenshot]);

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = imagesSwipe.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const toCloseActiveProject = () => {
        dispatch( closeActiveProject() );
    };


    return (
        <Card >
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                    }}
                >
                    <Typography>Languajes: { langs.join( ', ' ) }.</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {imagesSwipe.map((step, index) => (
                    <div key={ index }>
                        {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                            component="img"
                            sx={{
                            height: 255,
                            display: 'block',
                            maxWidth: 400,
                            overflow: 'hidden',
                            width: '100%',
                            }}
                            src={step}
                            alt='Project Screenshot'
                        />
                        ) : null}
                    </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                        ) : (
                        <KeyboardArrowRight />
                        )}
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                        ) : (
                        <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                    }
                />
                </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { title }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { body }
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    onClick={ toCloseActiveProject }
                >
                    Close
                </Button>
                <Button size="small">View Code</Button>
            </CardActions>
        </Card>
    );
};