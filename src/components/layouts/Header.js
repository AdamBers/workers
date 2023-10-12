import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to={"/"}>CompanyName</Link>
      </div>
      <div className="header__nav">
        <Link to={"/employees"}>Employees</Link>
      </div>
    </div>
  );
}

export default Header;
