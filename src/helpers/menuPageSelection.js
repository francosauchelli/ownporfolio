export const menuPageSelection = ( dataset ) => {

    let page = '';

    switch (dataset) {

        case 'Projects':
            page = 'projects';
            break;
        
        case 'About Me':
            page = 'aboutme';
            break;

        case 'Education':
            page = 'education';
            break;

        case 'Work Experience':
            page = 'experience';
            break;

        case 'Social Links':
            page = 'social';
            break;
        
        default:
            break;
    };

    return page;
};