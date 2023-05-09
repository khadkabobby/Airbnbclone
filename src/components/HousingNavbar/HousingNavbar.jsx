import React, { useState } from "react";
import "./housingnavbar.scss";

import AirbnbLogo from "../../assets/airbnb.svg";
import SearchIcon from "../../assets/SearchIcon.svg";

import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import Profilebar from "../../shared/utilities/Profilebar/Profilebar";

const HousingNavbar = ({ savebtnHandler }) => {
  const [showProfilebar, setShowProfilebar] = useState(false);
  const navigate = useNavigate();

  const profilebarHandler = () => {
    setShowProfilebar(!showProfilebar);
  };
  return (
    <header>
      <div className="container">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={AirbnbLogo} alt="logo" />
        </div>

        <div className="searchbar">
          <div className="search">Start your search</div>
          <div className="searchIcon">
            <img src={SearchIcon} alt="searchicon" />
          </div>
        </div>
        <div className="mobilenavbar">
          <div className="homes">
            <Icon icon="ic:round-keyboard-arrow-left" width="28" height="28" />
            <p>Homes</p>
          </div>
          <div className="archive">
            <div className="share">
              <Icon
                icon="iconoir:share-ios"
                width="20"
                height="20"
                color="#222"
                className="archive_icon"
              />
            </div>
            <div className="save" onClick={() => savebtnHandler()}>
              <Icon
                icon="mdi:favourite-border"
                width="20"
                height="20"
                color="#222"
                className="archive_icon"
              />
            </div>
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
          <div className="register" onClick={() => profilebarHandler()}>
            <Icon icon="ci:hamburger-lg" color="#222" width="20" height="20" />
            <Icon
              icon="iconamoon:profile-circle-fill"
              color="#717171"
              width="32"
              height="32"
            />
          </div>
        </div>
      </div>
      {showProfilebar && (
        <div className="profilebar">
          <Profilebar />
        </div>
      )}
    </header>
  );
};

export default HousingNavbar;
