import React, { useRef, useEffect } from "react";
import "./listingcard.scss";

import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ListingCard = ({ element }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  {
    console.log(`hello ${url}`);
  }
  // const { name, address, description, image, star, ...rest } = element;
  // console.log(name, address, description, image);
  // const BaseUrl = "https://royalapi.lancemeup.com";
  // console.log(`${BaseUrl / image}`);
  return (
    <>
      <div className="card" onClick={() => navigate(`/hotel/${element.id}`)}>
        <div className="img">
          <img
            src={`https://royalapi.lancemeup.com${element.image}`}
            alt="listing Image"
            crossorigin="anonymous"
          />
        </div>

        <div className="title">
          <h4 className="location">{element?.address}</h4>
          <div className="rating">
            <Icon icon="ic:outline-star" />
            <p className="rating-point">{element?.star}</p>
          </div>
        </div>
        <p className="owner"> Stay with Bobby Khadka . Business owner </p>
        <p className="date">Jun 18-24</p>
        <p className="price">
          <span>$108</span> night
        </p>
      </div>
    </>
  );
};

export default ListingCard;
