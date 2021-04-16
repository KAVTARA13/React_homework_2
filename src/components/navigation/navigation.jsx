import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="header pt-4">
      <h2 className="text-muted">Header</h2>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link" activeClassName="active">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts" className="nav-link" activeClassName="active">
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
