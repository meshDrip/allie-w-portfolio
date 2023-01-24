import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarItem = (props) => {
  return (
    <a className="m-auto" href={props.link} target="_blank">
      <FontAwesomeIcon
        className="text-5xl text-white transition-colors duration-300 hover:text-coolViolet fa-2x lg:ml-6 lg:text-4xl"
        icon={props.icon}
      />
    </a>
  );
};

export default NavBarItem;
