import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="fLists">
          <ul className="fList">
            <li className="fListItem">Cities</li>
            <li className="fListItem">Restaurants</li>
            <li className="fListItem">Coffee Shops</li>
            <li className="fListItem">Unique restaurants to go </li>
            <li className="fListItem">Reviews</li>
            <li className="fListItem">Food communities </li>
            <li className="fListItem">Seasonal and holiday deals </li>
          </ul>

          <ul className="fList">
            <li className="fListItem">Customer Service</li>
            <li className="fListItem">Partner Help</li>
            <li className="fListItem">Careers</li>
            <li className="fListItem">Sustainability</li>
            <li className="fListItem">Press center</li>
            <li className="fListItem">Safety Resource Center</li>
            <li className="fListItem">Investor relations</li>
            <li className="fListItem">Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="fText">Copyright © 2023 Amakenzi 🖤</div>
    </>
  );
};

export default Footer;
