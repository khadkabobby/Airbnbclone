import React, { useState } from "react";
import "./housingcomp.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../store/wishListSlice";
import { Icon } from "@iconify/react";

import ReservedCard from "../../shared/utilities/ReservedCard/ReservedCard";
import MobileReservedCard from "../../shared/utilities/MobileReservedCard/MobileReservedCard";
import WishPopup from "../../shared/utilities/WishPopup/WishPopup";
import HousingNavbar from "../HousingNavbar/HousingNavbar";
import useFetchDynamic from "../../hooks/useFetchDynamic";

const HousingComp = () => {
  const [showWishpopup, setShowWishpopup] = useState(false);
  const [wishlistName, setWishlistName] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const wishlist = useSelector((state) => state.wishlist);

  const isSaved = wishlist.some((item) => item.id === id);

  const handleSaveIconClick = () => {
    if (isSaved) {
      dispatch(removeFromWishlist(id));
    } else {
      setShowWishpopup(true);
    }
  };

  const handlePopupCancel = () => {
    setShowWishpopup(false);
  };

  const handleCreateWishlist = (wishlistName) => {
    dispatch(
      addToWishlist({ id: id, name: wishlistName, imageUrl: imageArray })
    );
    setShowWishpopup(false);
  };
  const params = {
    hotel_id: `${id}`,
    locale: "en-gb",
  };
  const { data, loading } = useFetchDynamic("/photos", params);
  const imageArray = data;
  return (
    <>
      <HousingNavbar
        handleSaveIconClick={handleSaveIconClick}
        isSaved={isSaved}
      />
      {!loading ? (
        <div className="housing__component">
          {imageArray && (
            <div className="mobile__image__section">
              <img src={imageArray[0].url_max} alt="" />
              <div className="number_of_photos">1/19</div>
            </div>
          )}
          <div className="image__section">
            <div className="image__section-header">
              <h2>Plan City Adventures from a Surry Hills Balcony</h2>
              <div className="header__about">
                <div className="header__left">
                  <div className="rating">
                    <Icon icon="ic:outline-star" />
                    <p>4.92</p>
                  </div>
                  <span>&#8226;</span>
                  <div className="reviews">593 reviews</div>
                  <span>&#8226;</span>
                  <div className="location">
                    Surry Hills, New South Wales, Australia
                  </div>
                </div>
                <div className="header__right">
                  <div className="share">
                    <Icon
                      icon="iconoir:share-ios"
                      width="20"
                      height="20"
                      color="#222"
                    />
                    <p>Share</p>
                  </div>
                  <div className="save" onClick={handleSaveIconClick}>
                    {isSaved ? (
                      <Icon
                        icon="mdi:favourite"
                        width="20"
                        height="20"
                        color="#ff385c"
                      />
                    ) : (
                      <Icon
                        icon="mdi:favourite-border"
                        width="20"
                        height="20"
                        color="#222"
                      />
                    )}

                    <p>save</p>
                  </div>
                </div>
              </div>
            </div>
            {imageArray && (
              <div className="image__container">
                <div className="left__image">
                  <img src={imageArray[0].url_max} alt="" />
                </div>
                <div className="right__image">
                  <div className="right__image-small">
                    <img src={imageArray[1].url_max} alt="" />
                  </div>
                  <div className="right__image-small">
                    <img src={imageArray[2].url_max} alt="" />
                  </div>
                  <div className="right__image-small">
                    <img src={imageArray[3].url_max} alt="" />
                  </div>
                  <div className="right__image-small">
                    <img src={imageArray[4].url_max} alt="" />
                  </div>
                </div>
              </div>
            )}
            <hr className="horizontalline" />
            <div className="reserve__section">
              <div className="room__about">
                <div className="owner">
                  <h3 className="owner__name">Room in a home hosted by Bran</h3>
                  <div className="owner__image">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/33304422-5c16-4c24-aac6-675348235ab2.jpg?im_w=240"
                      alt=""
                    />
                  </div>
                </div>
                <div className="room__facilites">
                  <div className="facility">
                    <Icon
                      icon="mingcute:bed-2-line"
                      width="25"
                      height="25"
                      color="#222"
                    />
                    <p>1 king bed</p>
                  </div>
                  <div className="facility">
                    <Icon
                      icon="ph:bathtub"
                      width="25"
                      height="25"
                      color="#222"
                    />
                    <p>Dedicated bathroom</p>
                  </div>
                  <div className="facility">
                    <Icon
                      icon="streamline:interface-user-home-home-geometric-human-person-single-user"
                      width="25"
                      height="25"
                      color="#222"
                    />
                    <p>Host Lives here</p>
                  </div>
                </div>
              </div>
              <div className="reserve__card">
                <ReservedCard />
              </div>
            </div>
          </div>
          <MobileReservedCard />
          {showWishpopup && (
            <div className="wish__popup-background">
              <div className="wish__popup">
                <WishPopup
                  onCreate={handleCreateWishlist}
                  onCancel={handlePopupCancel}
                  wishlistName={wishlistName}
                  setWishlistName={setWishlistName}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}
    </>
  );
};

export default HousingComp;
