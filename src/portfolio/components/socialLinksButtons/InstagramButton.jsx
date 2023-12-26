import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useStyleHandler } from '../../../hooks';


export const InstagramButton = ({ animate = true }) => {

    const { 
        customedStyle,
        defaultStyle,
        iconAnimation,
        handleMouseEnter,
        handleMouseLeave 
        
    } = useStyleHandler( animate );

    const url = 'https://www.instagram.com/francosauchelli/';
    
    return (
        <IconButton
            data-icon='instagram'
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onClick={ () => window.open( url,'_blank') }
        >
            <svg width={0} height={0}>
            <linearGradient id="instagramColors" x1={1} y1={0} x2={1} y2={1} gradientTransform="rotate(15)">
                <stop offset='1%' stopColor="#6D19F4" />
                <stop offset='15%' stopColor="#F41CE3" />
                <stop offset='50%' stopColor="#F43C1C" />
                <stop offset='100%' stopColor="#F4C019" />
            </linearGradient>
            </svg>
            <InstagramIcon 
                className={ iconAnimation?.instagram }
                style={ customedStyle.instagram || defaultStyle }
            />
        </IconButton>
    );
};