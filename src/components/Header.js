import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="header-container container-fluid">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contcat us</li>
            <li>Cart</li>
            <button
              className="btn"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
