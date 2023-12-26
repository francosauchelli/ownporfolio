import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useStyleHandler } from '../../../hooks';


export const LinkedinButton = ({ animate = true }) => {

    const { 
        customedStyle,
        defaultStyle,
        iconAnimation,
        handleMouseEnter,
        handleMouseLeave 

    } = useStyleHandler( animate );

    const url = 'https://www.linkedin.com/in/franco-sauchelli/';

    return (
        <IconButton
            data-icon='linkedin'
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onClick={ () => window.open( url,'_blank') }
        >
            <svg width={0} height={0}>
            <linearGradient id="linkedinColors" x1={1} y1={0} x2={1} y2={1} gradientTransform="rotate(45)">
                <stop offset='0%' stopColor="#2166E7" />
                <stop offset='50%' stopColor="#7494D1" />
                <stop offset='100%' stopColor="#84A8EA" />
            </linearGradient>
            </svg>
            <LinkedInIcon 
                className={ iconAnimation?.linkedin }
                style={ customedStyle.linkedin || defaultStyle }
            />
        </IconButton>
    );
};