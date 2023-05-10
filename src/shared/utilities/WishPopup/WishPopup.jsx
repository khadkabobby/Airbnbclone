import React, { useState } from "react";
import "./wishpopup.scss";

import { Icon } from "@iconify/react";
// import { useDispatch } from "react-redux";
// import { addToWishList } from "../../../store/wishListSlice";
// import { useParams } from "react-router-dom";

const WishPopup = ({ onCreate, onCancel, wishlistName, setWishlistName }) => {
  const handleCreateWishlist = () => {
    onCreate(wishlistName);
  };

  return (
    <>
      <div className="wishpop">
        <div className="wishpop__header">
          <div className="cross__icon" onClick={onCancel}>
            <Icon icon="radix-icons:cross-2" />
          </div>
          <div className="title">Name this wishlist</div>
        </div>
        <hr className="horizontalline" />
        <div className="wishpop__body">
          <input
            type="text"
            value={wishlistName}
            onChange={(e) => setWishlistName(e.target.value)}
            maxLength="50"
            placeholder="Name"
          />
          <p>50 characters maximum</p>
        </div>
        <hr className="horizontalline" />
        <div className="btn">
          <button
            className={`createbtn ${wishlistName ? "" : "blurry-button"}`}
            onClick={handleCreateWishlist}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default WishPopup;
