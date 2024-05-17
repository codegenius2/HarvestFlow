import React from "react";

const HamburgerMenu: React.FC = () => {
  return (
    <div className="alert">
      <ul className="navigation1">
        <i className="bx bxs-x-circle close"></i>
        <li>
          <a href="#banner" className="out">
            HOME
          </a>
        </li>
        <li>
          <a href="#news" className="out">
            SHOP
          </a>
        </li>
        <li>
          <a href="#jobs" className="out">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#register" className="out">
            REVIEWS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
