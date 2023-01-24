const NavBarBurger = (props) => {
  return (
    <button
      onClick={props.toggleNav}
      className={`ml-auto lg:hidden ${props.active ? "" : ""}`}
    >
      <div
        className={`transition-transform  w-8 h-0.5 bg-white ${
          props.active ? `transition-transform translate-y-2.5 rotate-45` : ``
        }`}
      />
      <div
        className={`transition-opacity w-8 h-0.5 my-2 bg-white ${
          props.active ? `opacity-0 collapse h-0` : ``
        }`}
      />
      <div
        className={`transition-transform  w-8 h-0.5  bg-white ${
          props.active ? `transition-transform -translate-y-2.5 -rotate-45` : ``
        }`}
      />
    </button>
  );
};

export default NavBarBurger;
