import React, { useState } from "react";
import "./wishpopup.scss";

import { Icon } from "@iconify/react";

const WishPopup = ({ showWishPoppup, setShowWishPopup, savebtnHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className="wishpop">
        <div className="wishpop__header">
          <div className="cross__icon" onClick={() => savebtnHandler()}>
            <Icon icon="radix-icons:cross-2" />
          </div>
          <div className="title">Name this wishlist</div>
        </div>
        <hr className="horizontalline" />
        <div className="wishpop__body">
          <input
            type="text"
            name=""
            id=""
            value={inputValue}
            onChange={handleInputChange}
            maxlength="50"
            placeholder="Name"
          />
          <p>50 characters maximum</p>
        </div>
        <hr className="horizontalline" />
        <div className="btn">
          <button
            className={`createbtn ${inputValue ? "" : "blurry-button"}`}
            onClick={() => savebtnHandler()}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default WishPopup;
