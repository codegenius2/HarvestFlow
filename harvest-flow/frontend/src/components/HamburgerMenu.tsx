import React from "react";

const HamburgerMenu: React.FC = () => {
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content animated zoomIn">
          <div className="modal-header">
            <span className="close">×</span>
          </div>
          <div className="modal-body nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <strong>Your City</strong>
            <b>your@emailadress.com</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
