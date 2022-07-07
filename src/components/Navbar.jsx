import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <NavLink className="btn btn-ghost normal-case text-xl" to="/">
            <span className="text-green-500">BD</span>
            <span className="text-red-600">info</span>
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="flex menu menu-horizontal gap-5">
            <button className="btn-info btn"><NavLink to="/weather">Weather</NavLink></button>
            <button className="btn-success btn"><NavLink to="/corona">Corona Updates</NavLink></button>
            <button className="btn-primary btn btn-warning"><NavLink to="/population">Population</NavLink></button>
          </ul>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
