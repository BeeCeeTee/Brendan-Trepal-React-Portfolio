import { Link } from 'react-router-dom';
import './navigation.css'
import Navbar from './Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="link" to="/">
          About
        </Link>,
        <Link key={2} className="link" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="link" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="link" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}