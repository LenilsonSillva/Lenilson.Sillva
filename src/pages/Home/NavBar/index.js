import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MyPhoto from './principal.png';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NavBar = () => {

   const { t, i18n } = useTranslation()
  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value)
  }

  const pages = [
    {id: 1, nome : t("Bar.projects"), link : '/projects'},
    {id: 2, nome : t("Bar.contact"), link : '/contact'}
  ]
  const settings = ['Português', 'English', 'Español'];
  const langValue = ["pt", "en", "es"] 
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (value) => {
    setAnchorElNav(null)
    navigate(value, { replace: true });
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Avatar alt="Lenilson" src={MyPhoto} sx={{ width: 20, minWidth: 30, maxWidth: 60, height: 'auto', mr: 1, display: { xs: 'none', md: 'flex' }}}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={()=>{navigate('./', {replace: true})}}
            sx={{
              mr: 2,
              pl: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "Sofia",
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: "pointer"
            }}
          >
            Lenilson Sillva
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={()=>{handleCloseNavMenu(page.link)}}>
                  <Button sx={{color: 'inherit'}}>
                    {page.nome}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button onClick={()=>{navigate('./', {replace: true})}} sx={{ mr: 1, display: { xs: 'flex', md: 'none' }}}>
            <Avatar alt="Lenilson" src={MyPhoto} sx={{ width: 20, minWidth: 30, maxWidth: 60, height: 'auto'}}/>
          </Button>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={()=>{navigate('./', {replace: true})}}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              key={page.id}
              onClick={()=>{handleCloseNavMenu(page.link)}}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.nome}
            </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={t("Bar.lang")}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LanguageOutlinedIcon style={{color: 'white'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, i) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} value={localStorage.getItem("i18nextLng")}>
                  <Typography textAlign="center" onClick={()=>{handleLanguageChange(langValue[i])}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
