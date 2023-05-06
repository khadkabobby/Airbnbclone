import React from "react";
import "./listingcard.scss";

import { Icon } from "@iconify/react";

const ListingCard = () => {
  return (
    <>
      <div className="card">
        <div className="img">
          <img
            src="https://a0.muscache.com/im/pictures/570296bc-a40d-40db-877e-e8d59def2ad6.jpg?im_w=720"
            alt="listing Image"
          />
        </div>
        <div className="title">
          <h4 className="location">Surry Hills, Australia</h4>
          <div className="rating">
            <Icon icon="ic:outline-star" />
            <p className="rating-point">4.4</p>
          </div>
        </div>
        <p className="owner"> Stay with Bron . Business owner </p>
        <p className="date">Jun 18-24</p>
        <p className="price">
          <span>$108</span> night
        </p>
      </div>
    </>
  );
};

export default ListingCard;
