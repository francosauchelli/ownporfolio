import { useState } from 'react';


export const useStyleHandler = ( animate ) => {
    
    const [ iconAnimation, setIconAnimation ] = useState(null);
    const [ socialIcon, setSocialIcon ] = useState(null);
    
    const handleMouseEnter = ( event ) => {
        if( !animate ) return;
        
        const icon = event.target.dataset.icon;
        setSocialIcon( icon );
        setIconAnimation({ [icon]: 'animate__animated animate__pulse animate__flip' });
    };
    
    const handleMouseLeave = () => {
        setSocialIcon( null );
        setIconAnimation( null );
    };

    const defaultStyle = {
        fontSize: animate ? '45px' : '20px',
        margin: animate ? '30px' : '1px',
        color: animate ? '#5A5670' : '#bdc7c0',
    };

    const customedStyle = {
        [socialIcon]: {
            fontSize: '100px',
            color: 'green',
            marginLef: '50%',
        }
    };


    switch (socialIcon) {

        case 'linkedin':
            customedStyle.linkedin.fill = "url(#linkedinColors)"
            break;

        case 'github':
            customedStyle.github.fill = "url(#githubColors)"
            break;

        case 'mail':
            customedStyle.mail.fill = "url(#mailColors)"
            break;

        case 'instagram':
            customedStyle.instagram.fill = "url(#instagramColors)"
            break;

        case 'whatsapp':
            customedStyle.whatsapp.fill = "url(#whatsappColors)"
            break;
    
        default:
            break;
    }


    return {
        customedStyle,
        defaultStyle,
        iconAnimation,
        handleMouseEnter,
        handleMouseLeave
    };
};