import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { useStyleHandler } from '../../../hooks';


export const WhatsappButton = ({ animate = true }) => {

    const { 
        customedStyle,
        defaultStyle,
        iconAnimation,
        handleMouseEnter,
        handleMouseLeave 
        
    } = useStyleHandler( animate );

    const url = 'https://api.whatsapp.com/send?phone=5493512110985';
    
    return (
        <IconButton
            data-icon='whatsapp'
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onClick={ () => window.open( url,'_blank') }
        >
            <svg width={0} height={0}>
            <linearGradient id="whatsappColors" x1={1} y1={0} x2={1} y2={1} gradientTransform="rotate(15)">
                <stop offset='1%' stopColor="#32BC13" />
                <stop offset='15%' stopColor="#49D32B" />
                <stop offset='50%' stopColor="#5AF638" />
                <stop offset='100%' stopColor="#41DD1E" />
            </linearGradient>
            </svg>
            <WhatsAppIcon 
                className={ iconAnimation?.whatsapp }
                style={ customedStyle.whatsapp || defaultStyle }
            />
        </IconButton>
    );
};