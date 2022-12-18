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
import NotificationDropDown from '../../Components/Notification/NotificationDropDown';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { logOut } = React.useContext(AuthContext)
  const [notificationOpen, setNotificationOpen] = React.useState(false)
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err))
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const handleMenuClose = () => {
    setAnchorEl(null);

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

      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
          <li onClick={handleMenuClose}>
            <Link to="/main/profileuser" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
          </li>
          <li onClick={handleMenuClose}>
            <Link onClick={handleLogOut} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</Link>
          </li>
        </ul>

      </div>
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

              <IconButton onClick={() => setNotificationOpen(prev => !prev, console.log(notificationOpen))} size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>


              <img onClick={handleProfileMenuOpen} class="w-10 h-10 rounded-full cursor-pointer" src={profilePic} alt="Profile Pic" />

            </Box>


          </Toolbar>

        </AppBar>

        {renderMenu}

      </Box >
      {notificationOpen &&
        <NotificationDropDown
          notificationOpen={notificationOpen}
          setNotificationOpen={setNotificationOpen}

        />}

    </>


  );
}
