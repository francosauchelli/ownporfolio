import { IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { useStyleHandler } from '../../../hooks';


export const MailButton = ({ animate = true }) => {

    
    const { 
        customedStyle,
        defaultStyle,
        iconAnimation,
        handleMouseEnter,
        handleMouseLeave 
        
    } = useStyleHandler( animate );

    const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=francosauchelli@gmail.com';

    return (
        <IconButton
            data-icon='mail'
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onClick={ () => window.open( url,'_blank') }
        >
            <svg width={0} height={0}>
            <linearGradient id="mailColors" x1={1} y1={0} x2={1} y2={1} gradientTransform="rotate(15)">
                <stop offset='1%' stopColor="#F43C1C" />
                <stop offset='50%' stopColor="#F4C019" />
                <stop offset='70%' stopColor="#8BE723" />
                <stop offset='100%' stopColor="#76ABEC" />
            </linearGradient>
            </svg>
            <MailOutlineIcon
                className={ iconAnimation?.mail }
                style={ customedStyle.mail || defaultStyle }
            />
        </IconButton>
    );
};