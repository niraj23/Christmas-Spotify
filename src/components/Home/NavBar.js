import React from 'react';
import { Navbar, Nav } from 'rsuite';
import { NavLink } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
import {
  FaHome as FaHomeIcon,
  FaCode as FaCodeIcon
} from 'react-icons/fa';

const NavBar = (props) => {
return (
  <Navbar style={{background: '#09070d'}}>
    <Navbar.Brand style={{ color: 'white'}}>
      Christmas Spotify
    </Navbar.Brand>
    <Nav>
    {props.login ? (
      <div className="sideBar">

      <Nav.Item as={NavLink} to="/home" icon={<FaHomeIcon />} size="2em" style={{ color: '#61dafb'}}>Home</Nav.Item>
      <Nav.Item as={NavLink} to="/playlist" style={{ color: 'white'}}>Playlist</Nav.Item>
      <Nav.Item as={NavLink} to="/profile"style={{ color: 'white' }}>Profile</Nav.Item>
      <Nav.Item as={NavLink} to="/popular"style={{ color: 'white' }}>Top 50</Nav.Item>
      <Nav.Item as={NavLink} to="/christmas"style={{ color: 'white' }}>Christmas Songs</Nav.Item>
      <Nav.Item as={NavLink} to="/home"style={{ color: 'white' }} onClick={props.logout}>Logout</Nav.Item>
      </div>
  ) : (
    <div className="sideBar">
      <Nav.Item as={NavLink} to="/home" style={{ color: 'white'}}>Home</Nav.Item>
      <Nav.Item as={NavLink} to="/login"style={{ color: 'white' }}>Login</Nav.Item>
      <Nav.Item as={NavLink} to="/signup"style={{ color: 'white' }}>Signup</Nav.Item>
      <h1 id='home-title' style={{paddingLeft: '407px'}}>Christmas Spotify</h1>
      </div>
    )}
    </Nav>
    <Nav pullRight>
      <Nav.Item id='devs' as={NavLink} to="/devs" icon={<FaCodeIcon /> } size="2em" style={{ color: '#61dafb' }}>Devs</Nav.Item>
    </Nav>
  </Navbar>
);
}

export default NavBar;