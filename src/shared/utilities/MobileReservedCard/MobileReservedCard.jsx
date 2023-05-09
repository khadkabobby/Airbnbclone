import React from "react";
import "./mobilereservedcard.scss";

const MobileReservedCard = () => {
  return (
    <div className="mobileReservedCard">
      <div className="left">
        <div className="rate">
          <span>$99</span> night
        </div>
        <div className="date">jun 21 - 23</div>
      </div>
      <div className="right">
        <div className="reservedbtn">Reserve</div>
      </div>
    </div>
  );
};

export default MobileReservedCard;
