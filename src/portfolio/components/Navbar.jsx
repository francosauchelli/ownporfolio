import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { getPages, menuPageSelection } from '../../helpers';


const data = await getPages();

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();


    const handleOpenUserMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorElNav(null);
    };

    const handleNavigateMenu = ( event ) => {
        const datasetPage = event.currentTarget.dataset.page
        const page = menuPageSelection( datasetPage )
        navigate(`/portfolio/${ page }`);
        setAnchorElNav( null );
    };


    return (
        <AppBar 
            position = 'static'
            sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box' }}}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton 
                        sx={{ p: 0, mr: 2 }}
                        href="/portfolio"
                        >
                            <Avatar alt="Profile Picture" src="/assets/avatar/avatar.jpg" />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/portfolio"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FRANCO SAUCHELLI
                    </Typography>

                    <Box 
                        sx={{ 
                            flexGrow: 1, 
                            display: { xs: 'none', md: 'flex' }, 
                            justifyContent: 'flex-end',
                            mr: '30px' 
                        }}
                    >
                    {data.map((page) => (
                        <Button
                            key={page.title}
                            onClick={ handleNavigateMenu }
                            data-page={ page.title }
                            sx={{ my: 2, color: 'white', display: 'flex', fontSize: 12 }}
                        >
                            {page.title}
                        </Button>
                    ))}
                    </Box>

                    <Box 
                        sx={{ 
                            flexGrow: 1, 
                            display: { md: 'none', xs: 'flex' },
                            justifyContent: 'flex-end',
                            mr: '60px' 
                        }}
                    >
                    <Tooltip title="Open settings" >
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                            <MenuIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleClose}
                    >
                        {data.map((page) => (
                            <MenuItem 
                                key={page.title} 
                                onClick={ handleNavigateMenu }
                                data-page={ page.title }
                            >
                                <Typography textAlign="center">{page.title}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}