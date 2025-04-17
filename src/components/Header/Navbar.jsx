import React from "react";

import { Link, NavLink } from "react-router";
import './nav.css'

const Navbar = () => {
  return (
    <nav className=" mr-5 ">
      <NavLink  className ="mr-10" to="/">Home</NavLink>
      <NavLink className ="mr-10"  to="/mobiles">Mobiles</NavLink>
      <NavLink className ="mr-10"  to="/laptop">Laptop</NavLink>
      <NavLink className ="mr-10"  to="/users">Users</NavLink>
      <NavLink className ="mr-10"  to="/posts">posts</NavLink>
      <NavLink className ="mr-10"  to="/comments">Comments</NavLink>
    </nav>
  );
};

export default Navbar;
