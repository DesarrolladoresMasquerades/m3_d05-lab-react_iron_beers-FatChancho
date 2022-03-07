import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
 
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to={`/beers/randomBeer`}>
        <button>Random beer</button>
      </NavLink>
      <NavLink to="/beers">
        <button>All beer</button>
      </NavLink>
      <NavLink to="/createBeer">
        <button>Add your beer</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
