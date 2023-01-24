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
          className="flex justify-center"
          href="#"
          aria-label="logo"
        >
          <svg className="h-auto w-14" viewBox="0 0 32 29.6">
            <path
              stroke="hsl(0%,0%,0%)"
              fill="#5f5ccc"
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
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
