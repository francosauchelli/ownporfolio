import { Box, Divider, Drawer, List } from '@mui/material';
import { SideBarItem } from './SideBarItem';
import React from 'react';



const data = [
    { id: 1, title: 'Project1', langs: [ 'Javascript', 'React', 'Typescript' ], body: 'this is the project n° 1', 
        screenshot: ['https://images.unsplash.com/photo-1532614338840-ab30cf10ed36', '/assets/screenshots/ss-test1.jpg', '/assets/screenshots/ss-test2.jpg' ] },
    { id: 2, title: 'Project2', langs: [ 'Python', 'Sqlite3' ],body: 'this is the project n° 2', 
        screenshot: ['/assets/screenshots/screenshot-eg.jpg', '/assets/screenshots/ss-test2.jpg', '/assets/screenshots/ss-test3.jpg', '/assets/screenshots/ss-test4.jpg' ] },
    { id: 3, title: 'Project3', langs: [ 'HTML', 'Javascript', 'CSS' ],body: 'this is the project n° 3', 
        screenshot: ['/assets/screenshots/ss-test3.jpg', '/assets/screenshots/ss-test2.jpg', '/assets/screenshots/ss-test3.jpg', '/assets/screenshots/ss-test1.jpg' ] },
    { id: 4, title: 'Project4', langs: [ 'Javascript', 'React', 'NodeJS' ],body: 'this is the project n° 4', 
        screenshot: ['/assets/screenshots/ss-test2.jpg', '/assets/screensshots/ss-test3.jpg', '/assets/screenshots/ss-test4.jpg' ] },
    { id: 5, title: 'Project5', langs: [ 'SQL' ], body: 'this is the project n° 5 asdadajdkadkdajdhkhdhadhahdk',
        screenshot: [] },
]


export const SideBar = ({ drawerWidth }) => {
    return (
        <Box 
            component='nav'
            sx={{ zIndex: 'modal' }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box', 
                        width: drawerWidth, 
                        position: 'relative' 
                    }
                }}
            >
 
                <List>
                    {
                        data.map(( item, index ) => (
                            <React.Fragment key={ item.id }>
                                <SideBarItem item={ item }/>
                                { index !== data.length - 1 && <Divider />}
                            </ React.Fragment>
                        ))
                    }
                </List>
            </Drawer>
        </ Box>
    );
};