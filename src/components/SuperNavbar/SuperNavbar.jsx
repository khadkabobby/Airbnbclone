import React, { useState } from "react";
import "./supernavbar.scss";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import AirbnbLogo from "../../assets/airbnb.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import Profilebar from "../../shared/utilities/Profilebar/Profilebar";

const SuperNavbar = () => {
  const [showProfilebar, setShowProfilebar] = useState(false);
  const navigate = useNavigate();

  const profilebarHandler = () => {
    setShowProfilebar(!showProfilebar);
  };

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={AirbnbLogo} alt="logo" />
          </div>

          <div className="searchbar">
            <div className="location">Anywhere</div>
            <div className="time">Any week</div>
            <div className="guest">Add guests</div>
            <div className="searchIcon">
              <img src={SearchIcon} alt="searchicon" />
            </div>
          </div>
          <div className="mobilesearchbar">
            <div className="searchbar-left">
              <div className="searchIcon">
                <Icon
                  icon="ic:baseline-search"
                  color="#222"
                  width="23"
                  height="23"
                />
              </div>
              <div className="searchindex">
                <div className="location">Anywhere</div>
                <div className="both">
                  <div className="time">Any week </div>
                  {" . "}
                  <div className="guest"> Add guests</div>
                </div>
              </div>
            </div>
            <div className="searchbar-right">
              <Icon
                icon="material-symbols:build-circle-outline-rounded"
                color="#717171"
                width="32"
                height="32"
              />
            </div>
          </div>
          <div className="rightbar">
            <div className="listinghome">Airbnb your home</div>
            <div className="earthIcon">
              <Icon
                icon="fontisto:world-o"
                width="15"
                height="15"
                className="earth-icon"
              />
            </div>
            <div className="register" onClick={profilebarHandler}>
              <Icon
                icon="ci:hamburger-lg"
                color="#222"
                width="20"
                height="20"
              />
              <Icon
                icon="iconamoon:profile-circle-fill"
                color="#717171"
                width="32"
                height="32"
              />
            </div>
          </div>
        </div>
      </header>
      {showProfilebar && (
        <div className="profilebar-wrapper">
          <Profilebar />
        </div>
      )}
    </>
  );
};

export default SuperNavbar;
