import React, { useState } from "react";
import "./housingcomp.scss";

import { Icon } from "@iconify/react";
import ReservedCard from "../../shared/utilities/ReservedCard/ReservedCard";
import MobileReservedCard from "../../shared/utilities/MobileReservedCard/MobileReservedCard";
import WishPopup from "../../shared/utilities/WishPopup/WishPopup";
import HousingNavbar from "../HousingNavbar/HousingNavbar";

const HousingComp = () => {
  const [showWishpopup, setShowWishpopup] = useState(false);
  const savebtnHandler = () => {
    setShowWishpopup(!showWishpopup);
  };
  return (
    <>
      <HousingNavbar savebtnHandler={savebtnHandler} />
      <div className="housing__component">
        <div className="mobile__image__section">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=320"
            alt=""
          />
          <div className="number_of_photos">1/19</div>
        </div>
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
                <div className="save" onClick={() => savebtnHandler()}>
                  <Icon
                    icon="mdi:favourite-border"
                    width="20"
                    height="20"
                    color="#222"
                  />
                  <p>save</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image__container">
            <div className="left__image">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720"
                alt=""
              />
            </div>
            <div className="right__image">
              <div className="right__image-small">
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=960"
                  alt=""
                />
              </div>
              <div className="right__image-small">
                <img
                  src="https://a0.muscache.com/im/pictures/749528e3-d251-4ee7-aa24-4b13604e7501.jpg?im_w=480"
                  alt=""
                />
              </div>
              <div className="right__image-small">
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=960"
                  alt=""
                />
              </div>
              <div className="right__image-small">
                <img
                  src="https://a0.muscache.com/im/pictures/749528e3-d251-4ee7-aa24-4b13604e7501.jpg?im_w=480"
                  alt=""
                />
              </div>
            </div>
          </div>
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
                  <Icon icon="ph:bathtub" width="25" height="25" color="#222" />
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
                showWishpopup={showWishpopup}
                setShowWishpopup={setShowWishpopup}
                savebtnHandler={savebtnHandler}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HousingComp;
