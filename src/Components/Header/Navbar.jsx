import './navbar.css';

export default function Nav({ links }) {
  return (
    <nav className="navbar-nav">
      <ul className="">
        {links.map((link) => link)}
      </ul>
    </nav>
  );
}