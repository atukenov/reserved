import React from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faBowlFood,
  faCoffee,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    person: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, options } });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">
          Time to eat? <br />
          Book table for your greate breakfast, lunch or dinner!
        </h1>
        <div className="searchContainer">
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBowlFood} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <div
                className="headerSearchItem"
                onClick={() => setOpenOptions(!openOptions)}
              >
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className="headerSearchText">{`${options.person} person`}</span>
              </div>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Person</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.person <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("person", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.person}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("person", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button className="headerBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
