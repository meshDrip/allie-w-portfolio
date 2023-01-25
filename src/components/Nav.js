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
          <div className="relative h-16 lg:h-auto w-14">
            {" "}
            <svg className="absolute w-full h-full" viewBox="0 0 32 29.6">
              <path
                stroke="hsl(0%,0%,0%)"
                fill="#5f5ccc"
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                className="absolute w-full h-full"
              />
            </svg>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full ml-1"
              width="141.000000pt"
              height="134.000000pt"
              viewBox="0 0 141.000000 134.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M1273 1303 c-3 -10 -16 -41 -29 -70 -13 -28 -24 -54 -24 -57 0 -7
-230 -480 -265 -546 -20 -39 -29 -46 -62 -50 -65 -9 -70 -5 -72 63 -3 104 -30
104 -88 -2 -35 -66 -40 -71 -71 -71 l-33 0 6 53 c4 28 8 134 10 234 3 124 8
188 16 202 7 11 9 24 5 28 -5 4 -11 2 -13 -4 -3 -7 -9 -13 -14 -13 -6 0 -8 4
-5 9 3 5 -2 19 -13 32 -18 22 -18 22 -13 -32 l4 -55 -94 -140 c-51 -76 -118
-178 -148 -227 -51 -80 -58 -88 -93 -94 -40 -6 -46 -26 -9 -31 22 -3 22 -4 3
-30 -98 -140 -254 -433 -238 -449 5 -4 141 172 159 207 7 14 44 78 83 143 l69
117 113 0 c101 0 113 -2 113 -17 -1 -69 -22 -196 -39 -233 -17 -39 -18 -47 -5
-61 8 -8 14 -21 14 -27 0 -20 29 -13 44 11 8 12 16 49 19 83 4 50 13 75 58
151 31 54 61 94 73 97 33 8 52 -9 54 -51 1 -21 5 -59 8 -85 4 -35 0 -62 -15
-103 -11 -30 -17 -55 -12 -55 5 0 12 8 16 18 6 15 8 14 16 -6 8 -22 49 -32 49
-11 0 5 30 75 66 154 l67 143 135 1 c105 1 146 6 190 21 60 21 69 27 59 37 -9
8 -200 7 -290 -2 l-66 -6 15 38 c9 21 32 72 51 113 44 95 44 94 94 220 74 184
80 201 74 210 -3 5 4 32 16 62 12 29 25 63 30 76 5 14 5 22 -2 22 -5 0 -12 -8
-16 -17z m-668 -445 c-8 -125 -26 -282 -32 -288 -5 -5 -186 -1 -191 5 -1 1 14
30 35 64 21 34 45 74 53 90 25 46 134 221 138 221 2 0 1 -42 -3 -92z m175
-263 c0 -16 -6 -25 -15 -25 -18 0 -18 5 -5 31 14 26 20 24 20 -6z m-120 -75
c0 -6 -8 -25 -17 -43 -16 -29 -18 -30 -21 -10 -2 12 2 31 8 42 11 22 30 28 30
11z m240 3 c0 -2 -13 -26 -29 -54 l-28 -50 -7 47 c-3 25 -4 49 -1 53 4 8 65
11 65 4z"
                />
              </g>
            </svg>
          </div>
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
