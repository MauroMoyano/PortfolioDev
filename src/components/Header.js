import React from "react";
import { Link } from "react-scroll";
//images
import Logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          {/* button */}

          <button className="btn btn-sm">
            <Link to="contact" smooth={true} spy={true}>
              Work with me
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
