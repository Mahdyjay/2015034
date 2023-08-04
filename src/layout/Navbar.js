import React from "react";
import { Link } from "react-router-dom";
import "../navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbarText" to="/">
          Patientss
        </Link>
        <Link className="btn btn-outline-light" to="/addpatient">
          Add Patients
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
