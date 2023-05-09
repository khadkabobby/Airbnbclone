import React from "react";
import "./profilebar.scss";
import { useNavigate } from "react-router-dom";

const Profilebar = () => {
  const navigate = useNavigate();
  return (
    <div className="profilebar">
      <div className="profile__element" onClick={() => navigate("/wishlists")}>
        WishLists
      </div>
      <div className="profile__element">Message</div>
      <div className="profile__element">Notification</div>
      <div className="profile__element">Trips</div>
    </div>
  );
};

export default Profilebar;
