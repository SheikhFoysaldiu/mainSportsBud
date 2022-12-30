import * as React from 'react';
import './Navbar.css'

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
import { Markunread, People } from '@material-ui/icons';

import { Link } from 'react-router-dom';

import profilePic from '../../Asset/person/profile.png';
import NotificationDropDown from '../../Components/Notification/NotificationDropDown';
import { TeamOutlined } from '@ant-design/icons';
import { TheaterComedyOutlined } from '@mui/icons-material';
import FriendRequestDropDown from '../../Components/FriendRequest/FriendRequestDropDown';

import * as FaIcons from "react-icons/fa";
import {AiOutlineHome} from "react-icons/ai";
import {MdSportsBaseball} from "react-icons/md";
import {MdOutlineFeedback} from "react-icons/md";
import {CgCommunity} from "react-icons/cg";
import * as AiIcons from "react-icons/ai";

export default function PrimarySearchAppBar() {
  const [active, setActive] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { logOut } = React.useContext(AuthContext)
  const [notificationOpen, setNotificationOpen] = React.useState(false)
  const [friendRequestDrowpDown, setFriendRequestDrowpDown] = React.useState(false)
  const [isOpen, setIsopen] = React.useState(false);
  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => {
    
    
    setSidebar(!sidebar)
  };
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

  const handletoggle = () => {
    setActive(true)
  }





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

      <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
          <li onClick={handleMenuClose}>
            <Link to="/main/profileuser" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
          </li>
          <li onClick={handleMenuClose}>
            <Link onClick={handleLogOut} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</Link>
          </li>
        </ul>

      </div>
    </Menu>


  );



  return (
    <>
  
      <div className="navbar bg-base-100 shadow-md fixed top-0 w-full z-50">
        <div className="navbar-start w-[5%]">
          <div className="">
            <Link to="#" className="menu-bars1">
              
              <svg onClick={showSidebar} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-0 lg:ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      
            </Link>
          </div>
          
          <nav className={`w-[100%] lg:w-[17%] ${sidebar ? "nav-menu active bg-base-100" : "nav-menu bg-base-100"}`}>
            
            <ul className="nav-menu-items">
              <li className="navbar-toggle flex items-center justify-center text-center shadow-md p-5" onClick={showSidebar}>
              <p className='text-black text-2xl lg:text-xl mx-5 lg:mx-5 font-bold my-auto '>Sportsbud</p>
              <p className='my-auto bg-red-200-50 shadow-md rounded-full p-2'>
              <AiIcons.AiOutlineClose  className='text-black font-bold cursor-pointer text-2xl lg:text-xl'/>
              </p>
              
               
              </li>
              <li >
                <Link to='/main' className="navbar-toggle1 text-center mt-6 text-2xl lg:text-xl font-semibold hover:bg-slate-300 p-3 mx-3 rounded-md hover:shadow-md bg-slate-200 shadow-md flex items-center justify-center lg:justify-start" onClick={showSidebar}>
                <AiOutlineHome className='mr-2' ></AiOutlineHome>
                Home
                </Link>
              </li>
              <li >
                <Link to='/' className="navbar-toggle1 text-center mt-6 text-2xl lg:text-xl font-semibold hover:bg-slate-300 p-3 mx-3 rounded-md hover:shadow-md bg-slate-200 shadow-md flex items-center justify-center lg:justify-start" onClick={showSidebar}>
                <MdSportsBaseball className='mr-2' ></MdSportsBaseball>
                Sport Choice
                </Link>
              </li>
              <li >
                <Link to='/main/community' className="navbar-toggle1 text-center mt-6 text-2xl lg:text-xl font-semibold hover:bg-slate-300 p-3 mx-3 rounded-md hover:shadow-md bg-slate-200 shadow-md flex items-center justify-center lg:justify-start" onClick={showSidebar}>
                <CgCommunity className='mr-2' ></CgCommunity>
                Community
                </Link>
              </li>
              <li >
                <Link to='/main/feedback' className="navbar-toggle1 text-center mt-6 text-2xl lg:text-xl font-semibold hover:bg-slate-300 p-3 mx-3 rounded-md hover:shadow-md bg-slate-200 shadow-md flex items-center justify-center lg:justify-start" onClick={showSidebar}>
                <MdOutlineFeedback className='mr-2' ></MdOutlineFeedback>
                Feedback
                </Link>
              </li>
              
            </ul>
          </nav>
          <div
        className={`sidebar-overlay ${sidebar === true ? "active" : ""}`}
        
      ></div>
        </div>
        <div className="navbar-start">
          <a className="normal-case text-sm lg:text-xl ml-10">Sportsbud</a>
        </div>
        <div className="navbar-end">

          <div className='flex items-center'>

            <input type="text" placeholder='Search' onClick={handletoggle} className={`w-20  ${active ? "border rounded-xl shadow-md w-32 lg:w-96" : "border-none"}`} />

          </div>


          <button className="btn btn-ghost btn-circle ml-0 lg:ml-4">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-7 lg:w-8 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to='/main/profileuser' className='justify-between'>Profile</Link>

                </li>
                <li><Link>Settings</Link></li>
                <li><Link onClick={handleLogOut}>Logout</Link></li>
              </ul>
            </div>
          </button>

        </div>
      
      </div>
        
    </>


  );
}
