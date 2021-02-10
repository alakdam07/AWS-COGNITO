import React from 'react';
import { NavLink } from "react-router-dom";
import useHandlder from '../configHandler/useHandler';

export default function SigninLinks() {
  const { getAuthenticatedUser } = useHandlder()
  const Logout = () => {
    getAuthenticatedUser()?.signOut();
    console.log("sign out succe");
  }

  return (
    <div>
      <div>
        <ul className="right">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/secondhome'>2nd Home</NavLink></li>
          <li><a onClick={Logout}>Log Out</a></li>
          <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
