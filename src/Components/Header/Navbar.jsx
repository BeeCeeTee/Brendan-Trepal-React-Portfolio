import './navbar.css';

export default function Nav({ links }) {
  return (
    <nav className="navbar-nav">
      <ul className="navbar-ul">
        {links.map((link) => link)}
      </ul>
    </nav>
  );
}