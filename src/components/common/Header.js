import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <header>
      <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/admin" activeClassName="active">Admin</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      <img src="../images/reckon-aps.png" className="logo" />
     </nav>
     </header>
  );
};

export default Header;
