import React from "react";
import NavBarItem from "./NavBarItem.js";
import NavBarBurger from "./NavBarBurger.js";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [navState, setState] = React.useState(false);
  const toggleNav = () => {
    setState(!navState);
  };
  let { contactButtons = [] } = props;
  let navBarContactBtns = contactButtons.map((icon) => (
    <NavBarItem icon={icon.icon} link={icon.link} key={icon.icon} />
  ));

  return (
    <nav className="" role="navigation" aria-label="main-navigation">
      <div className="flex flex-row p-2 mb-auto bg-backdropSalmon">
        <Link
          to="/"
          id="allie-logo"
          className="relative flex justify-center"
          href="#"
          aria-label="logo"
        >
          <div className="relative h-auto w-14"></div>
          <svg className="absolute w-full h-full" viewBox="0 0 32 29.6">
            <g
              transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            ></g>
          </svg>
        </Link>
        <div
          className={`justify-center text-center hidden lg:flex lg:flex-row
          }`}
        >
          <Link
            className="p-2 ml-4 text-4xl text-white transition-colors duration-300 hover:text-coolViolet font-handwritten"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="p-2 ml-4 text-4xl text-white transition-colors duration-300 hover:text-coolViolet font-handwritten"
            to="/about"
          >
            About
          </Link>
          <Link
            className="p-2 ml-4 mr-3 text-4xl text-white transition-colors duration-300 hover:text-coolViolet font-handwritten"
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <div className="hidden mx-5 ml-auto lg:flex">{navBarContactBtns}</div>
        <NavBarBurger active={navState} toggleNav={toggleNav} />
      </div>
      <div
        id="portfolioNavigation"
        className={`bg-canvasPink transition-all duration-1000 opacity-0 pt-5 lg:hidden  ${
          navState ? "opacity-100" : "h-0 collapse hidden"
        } `}
      >
        <div
          className={`flex flex-col justify-center text-center
          }`}
        >
          <Link
            className="p-2 text-5xl text-white transition-colors duration-300 hover:text-coolViolet font-handwritten"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="p-2 text-5xl text-white transition-colors duration-300 hover:text-coolViolet font-handwritten"
            to="/about"
          >
            About
          </Link>
          <Link
            className="p-2 text-5xl text-white transition-colors duration-300 hover:text-coolViolet font-handwritten"
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <div className="flex flex-row justify-center p-5 mx-auto mt-5 text-center">
          {navBarContactBtns}
        </div>
      </div>
    </nav>
  );
};
export default Header;
