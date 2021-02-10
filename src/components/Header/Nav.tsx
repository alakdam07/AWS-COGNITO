import React from "react";
import { Link } from "react-router-dom";
import SigninLinks from './SigninLinks';
import SignoutLinks from './SignoutLinks';
import useHandlder from '../configHandler/useHandler';

const Nav = () => {
  const { isAuthenticated } = useHandlder();
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Logo</Link>
        {
          isAuthenticated ? <SigninLinks /> : <SignoutLinks />
        }

      </div>
    </nav>
  );
};

export default Nav;
