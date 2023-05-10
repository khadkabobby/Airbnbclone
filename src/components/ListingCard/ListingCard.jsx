import React, { useState } from "react";
import "./listingcard.scss";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const ListingCard = ({
  hotel_name,
  hotel_id,
  address,
  max_photo_url,
  review_score,
  composite_price_breakdown,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card" onClick={() => navigate(`/hotel/${hotel_id}`)}>
        <div className="img">
          <img src={max_photo_url} alt="listing Image" />
        </div>

        <div className="title">
          <h4 className="location">{address}</h4>
          <div className="rating">
            <Icon icon="ic:outline-star" />
            <p className="rating-point">{review_score}</p>
          </div>
        </div>
        <p className="owner">{hotel_name}</p>
        <p className="date">Jun 18-24</p>
        <p className="price">
          <span>
            ${composite_price_breakdown?.gross_amount_per_night?.value}
          </span>{" "}
          night
        </p>
      </div>
    </>
  );
};

export default ListingCard;
