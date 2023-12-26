import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useStyleHandler } from '../../../hooks';


export const GithubButton = ({ animate = true }) => {

    const { 
        customedStyle,
        defaultStyle,
        iconAnimation,
        handleMouseEnter,
        handleMouseLeave 

    } = useStyleHandler( animate );

    const url = 'https://github.com/francosauchelli';

    return (
        <IconButton
            data-icon='github'
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            onClick={ () => window.open( url,'_blank') }
        >
            <svg width={0} height={0}>
            <linearGradient id="githubColors" x1={1} y1={0} x2={1} y2={1} gradientTransform="rotate(45)">
                <stop offset='0%' stopColor="#232A37" />
                <stop offset='50%' stopColor="#707989" />
                <stop offset='100%' stopColor="#8B94A5" />
            </linearGradient>
            </svg>
            <GitHubIcon 
                className={ iconAnimation?.github }
                style={ customedStyle.github || defaultStyle }
            />
        </IconButton>
    );
};