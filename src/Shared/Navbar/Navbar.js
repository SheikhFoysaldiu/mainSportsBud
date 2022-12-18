import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Search from '../Search/Search';

import { AuthContext } from '../../Context/AuthProvider';
import { Markunread } from '@material-ui/icons';

import { Link } from 'react-router-dom';

import profilePic from '../../Asset/person/profile.png';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { logOut } = React.useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err))
  }
  const handleSearchOpen = () => {
    setSearchOpen(prev => !prev)
    console.log(searchOpen)
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to="/main/profileuser">  <button>Profile</button></Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><button onClick={handleLogOut}>Logout</button></MenuItem>

    </Menu>


  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleSearchOpen}>
        <IconButton
          size="large"
          aria-label="Search"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SearchIcon />
        </IconButton>
        <p>Search</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Link to="/main/profileuser">  <p>Profile</p></Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <Markunread />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>

      </MenuItem>

    </Menu>
  );

  return (
    <>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <AppBar position="sticky" color='transparent'>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex' } }}
            >
              SportZBud
            </Typography>


            <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }} >
              <Search />
            </Box>

            <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}>
              <Link to='/main/message'>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="error">
                    <Markunread />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <img onClick={handleProfileMenuOpen} class="w-10 h-10 rounded-full cursor-pointer" src={profilePic} alt="Profile Pic" />

            </Box>


          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box >

    </>


  );
}
