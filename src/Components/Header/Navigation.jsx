import { NavLink } from 'react-router-dom';
import './navigation.css'
import Navbar from './Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[
        <NavLink key={1} className={({ isActive }) =>
          isActive ? "link active" : "link"
        } to="/">
          About
        </NavLink>,
        <NavLink key={2} className={({ isActive }) =>
          isActive ? "link active" : "link"
        } to="/portfolio">
          Portfolio
        </NavLink>,
        <NavLink key={3} className={({ isActive }) =>
          isActive ? "link active" : "link"
        } to="/contact">
          Contact
        </NavLink>,
        <NavLink key={4} className={({ isActive }) =>
          isActive ? "link active" : "link"
        } to="/resume">
          Resume
        </NavLink>,
      ]}
    />
  );
}