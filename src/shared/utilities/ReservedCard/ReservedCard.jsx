import React from "react";
import "./reservedcard.scss";
import { Icon } from "@iconify/react";

const ReservedCard = () => {
  return (
    <div className="reserved__card">
      <div className="reserved__card-header">
        <div className="price">
          <span>$99</span> night
        </div>
        <div className="reaction">
          <div className="rating">
            <Icon icon="ic:outline-star" />
            <p>4.92</p>
          </div>
          <div className="reviews">593 reviews</div>
        </div>
      </div>
      <div className="guest__details">
        <div className="checkin-checkout">
          <div className="checkin">
            <p>check-in</p>
            <p>6/21/2023</p>
          </div>
          <div className="checkout">
            <p>check-out</p>
            <p>6/23/2023</p>
          </div>
        </div>
        <div className="guests">
          <div className="number_of_guest">
            <p>guests</p>
            <p>1 guest</p>
          </div>
          <div className="icon">
            <Icon
              icon="ic:round-keyboard-arrow-left"
              width="28"
              height="28"
              rotate={3}
            />
          </div>
        </div>
      </div>
      <div className="reserve__button">Reserve</div>
      <div className="extra__information">You won't be charged yet</div>
      <div className="raw__calculation">
        <div className="raw__calculation-1">
          <div className="particular">$99 x 2 nights</div>
          <div className="rate">$197</div>
        </div>
        <div className="raw__calculation-1">
          <div className="particular">Airbnb service fee</div>
          <div className="rate">$28</div>
        </div>
      </div>
      <hr className="horizontal__line" />
      <div className="total__calculation">
        <div className="particular">Total before taxes</div>
        <div className="rate">$225</div>
      </div>
    </div>
  );
};

export default ReservedCard;
