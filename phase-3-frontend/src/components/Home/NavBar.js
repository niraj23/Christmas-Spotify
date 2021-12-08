import { Navbar, Nav } from 'rsuite';
import { NavLink } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
import {
  FaHome as FaHomeIcon,
  FaCode as FaCodeIcon
} from 'react-icons/fa';

const NavBar = () => {
return (
  <Navbar style={{background: '#09070d'}}>
    <Navbar.Brand style={{ color: 'white'}}>
      Christmas Spotify
    </Navbar.Brand>
    <Nav>
      <Nav.Item as={NavLink} to="/home" icon={<FaHomeIcon />} size="2em" style={{ color: '#61dafb'}}>Home</Nav.Item>
      <Nav.Item as={NavLink} to="/playlist" style={{ color: 'white'}}>Playlist</Nav.Item>
      <Nav.Item as={NavLink} to="/songs"style={{ color: 'white' }}>Songs</Nav.Item>
      <Nav.Item as={NavLink} to="/friends"style={{ color: 'white' }}>Friends</Nav.Item>
    </Nav>
    <Nav pullRight>
      <Nav.Item as={NavLink} to="/devs" icon={<FaCodeIcon /> } size="2em" style={{ color: '#61dafb' }}>Devs</Nav.Item>
    </Nav>
  </Navbar>
);
}

export default NavBar;

