import { useState } from "react";
import { LogoUrl } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  /* If no dependency array => UseEffect is called on every render */
  /* If dependency array is empty = [] => useEffect is called on initial render(just once) */
  /* If dependency array is not empty, for ex [btnNameReact] => useEffect is called every time, when btnNameReact is updated */

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LogoUrl} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
